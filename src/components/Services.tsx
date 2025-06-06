import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Settings",
      title: "Прототипирование",
      description: "Печать функциональных прототипов для бизнеса и инженеров",
    },
    {
      icon: "Gift",
      title: "Сувениры",
      description: "Персонализированные подарки и фигурки",
    },
    {
      icon: "Building",
      title: "Архитектура",
      description: "Точные макеты зданий и интерьеров",
    },
    {
      icon: "Wrench",
      title: "Запчасти",
      description: "Изготовление деталей и механизмов",
    },
    {
      icon: "Palette",
      title: "Дизайн",
      description: "Создание уникальных декоративных изделий",
    },
    {
      icon: "Cpu",
      title: "Электроника",
      description: "Корпуса и компоненты для устройств",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-rubik">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг 3D-печати для любых задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:bg-white group"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Icon
                  name={service.icon as any}
                  size={28}
                  className="text-purple-600 group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-rubik">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
