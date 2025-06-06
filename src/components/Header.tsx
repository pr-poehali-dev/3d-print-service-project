import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Icon name="Box" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 font-rubik">
              3DPrintPro
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Портфолио
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Процесс
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Контакты
            </a>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Заказать
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Процесс
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Контакты
              </a>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
                Заказать
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
