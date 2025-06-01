import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Header = () => {
    const updatePageMeta = (pageName) => {
        document.title = pageName;
        let metaTag = document.querySelector('meta[name="page_name"]');
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('name', 'page_name');
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', pageName);
    };

    const scrollToService = () => {
        if (window.location.pathname === "/") {
            const servicesElement = document.getElementById('grid');
            if (servicesElement) {
                servicesElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            sessionStorage.setItem('scrollToServices', 'true');
            window.location.pathname = '/';
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            {/* Верхняя часть хедера */}
            <div className="bg-[#F9F7F7] h-10 sm:h-12 flex items-center justify-between px-3 sm:px-5 rounded-xl mx-2 sm:mx-5 mb-5">
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                    <a className="flex items-center space-x-1 sm:space-x-2" href="tel:+79296761105"
                       style={{ fontFamily: "'Fira Sans', sans-serif" }}>
                        <img className="w-3 h-3 sm:w-4 sm:h-4" src="/tel.webp" alt="tel" />
                        <span>+7 (995) 655-75-25</span>
                    </a>

                    <a className="flex items-center space-x-1 sm:space-x-2" href="mailto:info@balabaev-production.ru">
                        <img className="w-3 h-3 sm:w-4 sm:h-4" src="/mail.webp" alt="mail" />
                        <span className="hidden sm:inline">info@balabaev-production.ru</span>
                        <span className="sm:hidden">Email</span>
                    </a>

                    <a className="flex items-center space-x-1 sm:space-x-2" href="https://t.me/casvely">
                        <img className="w-3 h-3 sm:w-4 sm:h-4" src="/telegram.webp" alt="tg" />
                        <span className="hidden sm:inline">Telegram</span>
                    </a>

                    <a className="flex items-center space-x-1 sm:space-x-2" href="https://wa.me/+79166290774">
                        <img className="w-3 h-3 sm:w-4 sm:h-4" src="/wa.webp" alt="whatsapp" />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                </div>

                <div className="flex space-x-2 sm:space-x-4 text-xs sm:text-sm">
                    <button onClick={scrollToService}>
                        <span>Все услуги</span>
                    </button>
                    <NavLink 
                        to="/contacts" 
                        className={({ isActive }) => isActive ? "text-blue-500" : ""}
                        onClick={() => updatePageMeta('Контакты')}
                    >
                        <span>Контакты</span>
                    </NavLink>
                </div>
            </div>

            {/* Нижняя часть хедера */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 sm:mt-4 px-3 sm:px-5">
                <NavLink 
                    to="/" 
                    onClick={() => updatePageMeta('Главная')} 
                    className="mb-2 sm:mb-0 flex items-center mr-2"
                >
                    <img 
                        className="h-8 sm:h-12 w-auto" 
                        src="./Logo.webp" 
                        alt="BP Soft Logo"
                        style={{
                            maxWidth: 'none', // Убираем ограничение по ширине
                            objectFit: 'contain' // Сохраняем пропорции
                        }}
                    />
                </NavLink>
                
                <div className="hidden sm:flex border-l border-gray-400 items-center pl-5 text-gray-400 text-xs">
                    Цифровые решения для <br />Вас или Вашего бизнеса
                </div>
                
                <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-0 ml-0 sm:ml-5 text-xs sm:text-sm">
                    <NavLink
                        to="/sitedev"
                        className={({ isActive }) =>
                            `border px-2 py-1 rounded ${isActive ? "bg-blue-500 text-white" : ""}`
                        }
                        onClick={() => updatePageMeta('Разработка сайтов')}
                    >
                        Разработка
                    </NavLink>
                    
                    <NavLink
                        to="/design"
                        className={({ isActive }) =>
                            `border px-2 py-1 rounded ${isActive ? "bg-blue-500 text-white" : ""}`
                        }
                        onClick={() => updatePageMeta('Дизайн')}
                    >
                        Дизайн
                    </NavLink>
                    
                    <NavLink
                        to="/promotion"
                        className={({ isActive }) =>
                            `border px-2 py-1 rounded ${isActive ? "bg-blue-500 text-white" : ""}`
                        }
                        onClick={() => updatePageMeta('Продвижение')}
                    >
                        Продвижение
                    </NavLink>
                    
                    <NavLink
                        to="/accompaniment"
                        className={({ isActive }) =>
                            `border px-2 py-1 rounded ${isActive ? "bg-blue-500 text-white" : ""}`
                        }
                        onClick={() => updatePageMeta('Сопровождение')}
                    >
                        Сопровождение
                    </NavLink>
                    
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `border px-2 py-1 rounded ${isActive ? "bg-blue-500 text-white" : ""}`
                        }
                        onClick={() => updatePageMeta('Наши проекты')}
                    >
                        Проекты
                    </NavLink>
                    
                    <button 
                        className="border px-2 py-1 rounded" 
                        onClick={() => {
                            const form = document.getElementById('form');
                            if (form) form.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Обсудить
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;