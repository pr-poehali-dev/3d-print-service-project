import { useState } from "react";
import Icon from "@/components/ui/icon";

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState({
    value: 5,
    name: "PLA",
  });
  const [weight, setWeight] = useState(10);
  const [urgency, setUrgency] = useState(1);
  const [postProcessing, setPostProcessing] = useState({
    supports: false,
    sanding: false,
    painting: false,
    assembly: false,
  });

  const materials = [
    { value: 5, name: "PLA", color: "#FF5722" },
    { value: 7, name: "PETG", color: "#4CAF50" },
    { value: 9, name: "ABS", color: "#2196F3" },
    { value: 12, name: "TPU", color: "#FFC107" },
    { value: 15, name: "Нейлон", color: "#9C27B0" },
  ];

  const calculateTotal = () => {
    let total = selectedMaterial.value * weight * urgency;

    if (postProcessing.supports) total += 850;
    if (postProcessing.sanding) total += 850;
    if (postProcessing.painting) total += 1500;
    if (postProcessing.assembly) total += 850;

    return Math.round(total);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Калькулятор стоимости
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Материал:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {materials.map((material) => (
                  <div
                    key={material.name}
                    className={`cursor-pointer border-2 rounded-lg p-3 transition-all ${
                      selectedMaterial.name === material.name
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedMaterial(material)}
                  >
                    <div
                      className="w-8 h-8 rounded-full mb-2"
                      style={{ backgroundColor: material.color }}
                    />
                    <div className="font-medium">{material.name}</div>
                    <div className="text-sm text-gray-500">
                      {material.value} руб/г
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Вес модели (граммы):
              </label>
              <input
                type="number"
                min="1"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Срочность:
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value={1}>Стандарт (3-5 дней)</option>
                <option value={1.2}>Срочно (1-2 дня) +20%</option>
                <option value={1.5}>Очень срочно (24 часа) +50%</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Постобработка:
              </label>
              <div className="space-y-2">
                {[
                  { key: "supports", label: "Снятие поддержек (+850 руб)" },
                  { key: "sanding", label: "Шлифовка (+850 руб)" },
                  { key: "painting", label: "Покраска (+1500 руб)" },
                  { key: "assembly", label: "Сборка (+850 руб)" },
                ].map((option) => (
                  <label key={option.key} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        postProcessing[
                          option.key as keyof typeof postProcessing
                        ]
                      }
                      onChange={(e) =>
                        setPostProcessing((prev) => ({
                          ...prev,
                          [option.key]: e.target.checked,
                        }))
                      }
                      className="mr-3 text-purple-600 focus:ring-purple-500"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Примерная стоимость:
              </h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {calculateTotal()} руб
              </div>
              <div className="text-sm text-gray-600">
                Точную стоимость уточнит менеджер после просмотра модели
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Отправить запрос
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Глобальный компонент для открытия калькулятора
window.openCalculator = () => {
  const event = new CustomEvent("openCalculator");
  window.dispatchEvent(event);
};

export default Calculator;
