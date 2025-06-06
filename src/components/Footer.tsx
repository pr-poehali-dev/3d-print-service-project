import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold font-rubik">3DPrintPro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональные услуги 3D печати в Москве. Высокое качество,
              доступные цены, быстрые сроки.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-rubik">Услуги</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Прототипирование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сувениры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Архитектура
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Запчасти
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-rubik">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} />
                <span>info@3dprintpro.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 3DPrintPro. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
