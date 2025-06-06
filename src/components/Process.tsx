const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Вы присылаете модель",
      description: "STL, OBJ или STEP файл",
    },
    {
      number: "2",
      title: "Согласовываем детали",
      description: "Материал, цвет и сроки",
    },
    {
      number: "3",
      title: "Получаете заказ",
      description: "Самовывоз или доставка",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-rubik">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс от заявки до готового изделия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-rubik">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-rubik">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-purple-200 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
