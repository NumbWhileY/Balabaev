import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Mock данные для баннеров
const MOCK_BANNERS = [
  {
    id: 2,
    title: "Разработка сайтов для Вас или Вашего бизнеса",
    description: "Создание современных веб-решений для бизнеса",
    mainImage: "/design-banner.webp",
    overlayImage: "/robot.webp",
    link: "/sitedev",
    createdAt: "2025-04-05T21:13:53.714Z",
    updatedAt: "2025-04-05T21:13:53.714Z"
  },
  {
    id: 3,
    title: "Дизайн сайта за пару дней",
    description: "Уникальный визуальный стиль для вашего бренда",
    mainImage: "/design-banner.webp",
    overlayImage: "/statues.webp",
    link: "/design",
    createdAt: "2025-04-05T21:20:47.978Z",
    updatedAt: "2025-04-05T21:20:47.978Z"
  },
  {
    id: 4,
    title: "Продвижение сайтов с конверсией до 12%",
    description: "Комплексный digital-маркетинг для роста продаж",
    mainImage: "/design-banner.webp",
    overlayImage: "/phone.webp",
    link: "/promotion",
    createdAt: "2025-04-05T21:21:59.820Z",
    updatedAt: "2025-04-05T21:21:59.820Z"
  },
  {
    id: 5,
    title: "Сопровождение",
    description: "Техническая поддержка и развитие вашего сайта",
    mainImage: "/design-banner.webp",
    overlayImage: "/Layer2.webp",
    link: "/accompaniment",
    createdAt: "2025-04-05T21:22:32.899Z",
    updatedAt: "2025-04-05T21:22:32.899Z"
  }
];

const BannerContainer = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [usingMockData, setUsingMockData] = useState(false);

  // Проверка доступности сервера
  const checkServerAvailability = async () => {
    try {
      const response = await fetch('http://localhost:9000/health', {
        method: 'HEAD',
        timeout: 3000
      });
      return response.ok;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isServerAvailable = await checkServerAvailability();
        
        if (isServerAvailable) {
          const response = await fetch('http://localhost:9000/api/banner');
          if (!response.ok) throw new Error('Ошибка загрузки данных с сервера');
          const data = await response.json();
          setBanners(data);
        } else {
          // Если сервер недоступен, используем mock данные
          setBanners(MOCK_BANNERS);
          setUsingMockData(true);
          console.log('Сервер недоступен, используются mock данные');
        }
      } catch (err) {
        setError(err.message);
        // При ошибке также используем mock данные
        setBanners(MOCK_BANNERS);
        setUsingMockData(true);
        console.log('Ошибка при загрузке данных, используются mock данные');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Рассчитываем отступ между слайдами
  const gap = windowWidth < 768 ? 10 : 20;
  const gapPercentage = (gap / windowWidth) * 100;

  // Автопереключение слайдов
  useEffect(() => {
    if (banners.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Обработчики touch-событий для мобильных устройств
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Обновление мета-данных страницы
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

  if (loading) return <div className="text-center py-10">Загрузка баннеров...</div>;
  if (error && banners.length === 0) return <div className="text-center py-10 text-red-500">Ошибка: {error}</div>;
  if (banners.length === 0) return null;

  return (
    <div className="relative px-3 sm:px-5 mt-5 overflow-hidden">
      {/* Индикатор использования mock данных (только для разработки) */}
      {usingMockData && process.env.NODE_ENV === 'development' && (
        <div className="text-center text-yellow-600 text-sm mb-2">
          Внимание: сайт является демонстрационной версией
        </div>
      )}

      {/* Контейнер слайдов */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSlide * (100 + gapPercentage)}%)`,
          gap: `${gap}px`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {banners.map((banner) => (
          <div 
            key={banner.id}
            className="w-full flex-shrink-0 relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            {/* Основной фон с двумя изображениями */}
            <div 
              className="w-full h-full"
              style={{ 
                backgroundImage: `url(${banner.overlayImage}), url(${banner.mainImage})`,
                backgroundSize: windowWidth < 640 ? 'contain, cover' : 'contain, cover',
                backgroundPosition: windowWidth < 640 ? 
                  'right 10px bottom, center' : 
                  'right 20px bottom, center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* Текстовый контент */}
            <div className="absolute left-3 sm:left-5 top-3 sm:top-5 text-left max-w-xs sm:max-w-md">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold whitespace-nowrap text-[#F9F7F7]">
                {banner.title}
              </div>
            </div>

            {/* Кнопки */}
            <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-5 flex flex-col space-y-2 sm:space-y-3">
              <button 
                className="bg-[#0077FF] rounded-lg sm:rounded-xl text-white px-4 py-1 sm:px-6 sm:py-2 font-bold text-sm sm:text-lg"
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Обсудить проект
              </button>

              <NavLink
                to={banner.link}
                className="bg-white rounded-lg sm:rounded-xl px-4 py-1 sm:px-6 sm:py-2 font-bold text-sm sm:text-lg text-center"
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() => updatePageMeta(banner.title)}
              >
                Подробнее
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Навигационные точки */}
      {banners.length > 1 && (
        <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Кнопки навигации (только для десктопов) */}
      {windowWidth >= 768 && banners.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white/50 p-1 sm:p-2 rounded-full shadow-md hover:bg-white/80 transition"
            aria-label="Предыдущий слайд"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white/50 p-1 sm:p-2 rounded-full shadow-md hover:bg-white/80 transition"
            aria-label="Следующий слайд"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default BannerContainer;