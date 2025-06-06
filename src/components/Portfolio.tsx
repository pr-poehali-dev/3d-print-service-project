const Portfolio = () => {
  const portfolioItems = [
    {
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
      title: "Механическая деталь",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      title: "Фигурка персонажа",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
      title: "Архитектурный макет",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
      title: "Корпус устройства",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=400&fit=crop",
      title: "Декоративное изделие",
    },
    {
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop",
      title: "Инженерный прототип",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-rubik">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 успешных проектов в различных областях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition-all font-medium">
            Смотреть все работы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
