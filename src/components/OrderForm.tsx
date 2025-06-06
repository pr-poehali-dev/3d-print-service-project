import { useState } from "react";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    file: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь будет логика отправки формы
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({ ...prev, file }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-rubik">
            Готовы к заказу?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Отправьте заявку и получите расчет стоимости в течение часа
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block w-full cursor-pointer">
                <input
                  type="file"
                  accept=".stl,.obj,.step,.3mf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-400 transition-colors flex items-center justify-center space-x-3 text-gray-600">
                  <Icon name="Paperclip" size={20} />
                  <span>
                    {formData.file ? formData.file.name : "Прикрепить файл"}
                  </span>
                </div>
              </label>
              <p className="text-sm text-gray-500 mt-2">
                STL, OBJ, STEP, 3MF (до 50 МБ)
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition-colors font-medium text-lg"
            >
              Отправить запрос
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
