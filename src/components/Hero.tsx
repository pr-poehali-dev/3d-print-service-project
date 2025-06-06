import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-rubik leading-tight">
            Профессиональная <span className="text-purple-600">3D-печать</span>{" "}
            на заказ
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Изготовим детали, сувениры и прототипы с точностью до 0.05 мм. От
            идеи до готового изделия за 1 день.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all transform hover:scale-105 font-medium text-lg"
              onClick={() =>
                document
                  .getElementById("calculator-modal")
                  ?.classList.add("active")
              }
            >
              Рассчитать стоимость
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all font-medium text-lg">
              Примеры работ
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full">
                <Icon name="Zap" size={24} className="text-purple-600" />
              </div>
              <span className="font-medium text-gray-800">
                От 1 дня исполнения
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full">
                <Icon name="Package" size={24} className="text-purple-600" />
              </div>
              <span className="font-medium text-gray-800">12+ материалов</span>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full">
                <Icon name="Shield" size={24} className="text-purple-600" />
              </div>
              <span className="font-medium text-gray-800">
                Гарантия качества
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
