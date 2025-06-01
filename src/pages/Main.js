import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
import BannerContainer from "../components/BannerContainer.";

const Main = () => {

      const { setSelectedItemId } = useContext(AppContext);
    
      const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [activeFilter, setActiveFilter] = useState('all');
      const [isVisible, setIsVisible] = useState(false);


    const updatePageMeta = (pageName) => {
        document.title = pageName;
        console.log(pageName)

        let metaTag = document.getElementById('meta');
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('name', 'page_name');
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', pageName);
    };
    

    useEffect(() => {
     
      setIsVisible(false);
      
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 400);
    
      return () => clearTimeout(timer);
    }, [activeFilter]);


    useEffect(() => {
        const handleScroll = () => {
          if (sessionStorage.getItem('scrollToServices') === 'true') {
            sessionStorage.removeItem('scrollToServices');
            const servicesElement = document.getElementById('grid');
            if (servicesElement) {
              servicesElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
      
        // Если страница уже загружена, выполняем сразу
        if (document.readyState === 'complete') {
          handleScroll();
        } else {
          // Иначе ждём полной загрузки
          window.addEventListener('load', handleScroll);
        }
      
        return () => {
          window.removeEventListener('load', handleScroll);
        };
      }, []);

  

    

      useEffect(() => {
        // Получаем IP пользователя (если это нужно)
        fetch('https://api.ipify.org/')
            .then(r => r.text())
            .then(ip => console.log('User IP:', ip))
            .catch(err => console.error('Failed to get IP:', err));

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:9000/api/service'); // Исправлено с /api/service на /api/services
                if (!response.ok) throw new Error('Ошибка загрузки данных');
                const data = await response.json();
                setItems(data);
                setIsVisible(true); // Показываем контент после загрузки
            } catch (err) {
                setError(err.message);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

      



      const filteredItems = activeFilter === 'all' 
      ? items 
      : items.filter(item => item.key === activeFilter);
  

        const navigate = useNavigate();

        const handleItemClick = (id) => {
            setSelectedItemId(id);
            console.log(id) // Устанавливаем выбранную картинку в контекст
            navigate('/develop'); // Переходим на страницу /develop
        };

    
    return (
        <div>
  <BannerContainer/>

  {/* Адаптивная сетка изображений */}
  <div className="container mx-auto px-3 sm:px-5 py-5">
  <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4">
    {/* Картинка 1 */}
    <div className="bg-[#F9F7F7] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg row-span-1">
      <img 
        src="cat.webp" 
        alt="Котик" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Картинка 2 */}
    <div 
      className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg row-span-1 cursor-pointer"
      onClick={() => window.open('https://san-combo.ru/', '_blank')}
    >
      <img 
        src="sancombo.webp" 
        alt="SanCombo" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Картинка 3 - занимает 2 строки */}
    <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg row-span-2">
      <img 
        src="lamp.webp" 
        alt="Дизайнерская лампа" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Картинка 4 - занимает 2 колонки */}
    <div className="col-span-2 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
      <img 
        src="Olga.webp" 
        alt="Ольга - дизайнер" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
</div>

  {/* Секция услуг */}
  <div className="flex flex-col px-3 sm:px-5 mt-5">
    <div className="flex items-baseline">
      <div className="font-bold text-4xl sm:text-5xl lg:text-7xl" id='services'>Услуги</div>
      <div className="bg-blue-700 transform -skew-x-12 h-[24px] sm:h-[30px] px-4 sm:px-7 flex items-center justify-center rounded-xl ml-3">
        <span className="transform skew-x-12 text-white text-sm sm:text-base">{filteredItems.length}</span>
      </div>
    </div>
    
    <div className="flex flex-wrap items-center py-5 sm:py-10 gap-2 sm:gap-4 overflow-x-auto pb-3">
      <button id="all" className="text-sm sm:text-lg border-2 rounded-lg px-3 sm:px-5 py-1 sm:py-2" onClick={() => {setActiveFilter('all');}}>Все</button>
      <button id="site" className="text-sm sm:text-lg border-2 rounded-lg px-3 sm:px-5 py-1 sm:py-2" onClick={() => {setActiveFilter('dev');}}>Разработка сайтов</button>
      <button id="design" className="text-sm sm:text-lg border-2 rounded-lg px-3 sm:px-5 py-1 sm:py-2" onClick={() => {setActiveFilter('design');}}>Дизайн</button>
      <button id="prod" className="text-sm sm:text-lg border-2 rounded-lg px-3 sm:px-5 py-1 sm:py-2" onClick={() => {setActiveFilter('promo');}}>Продвижение</button>
      <button id="sopr" className="text-sm sm:text-lg border-2 rounded-lg px-3 sm:px-5 py-1 sm:py-2" onClick={() => {setActiveFilter('support');}}>Сопровождение</button>
    </div>
  </div>

  {/* Сетка услуг */}
  <div 
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 sm:px-5 gap-5 sm:gap-10" 
    id="grid"
    style={{
      visibility: isVisible ? 'visible' : 'hidden',
      opacity: isVisible ? 1 : 0,
      transition: 'visibility 0s, opacity 0.5s linear'
    }}
  >
    {filteredItems != [] ? <div className="text-sm sm:text-lg  px-3 sm:px-5 py-1 sm:py-2">  В демонстрационной версии услуги не доступны  </div> : filteredItems.map((item) => (
      <div 
        key={item.id}
        id={item.key}
        className="grid grid-cols-1 sm:grid-cols-2 w-full bg-[#F9F7F7] gap-5 sm:gap-10 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => handleItemClick(item.id)}
      >
        <div className="px-3 sm:px-5 py-3 sm:py-5">
          <div className="pb-3 sm:pb-5 font-bold text-lg sm:text-xl">{item.title}</div>
          <div className="text-sm sm:text-base">{item.description}</div>
        </div>
        <div 
          className="relative min-h-[150px] sm:min-h-[200px]"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {item.discount && (
            <div className="absolute top-3 right-3">
              <div className="bg-blue-700 transform -skew-x-12 rounded-xl px-3 sm:px-5 text-white text-sm sm:text-base">-50%</div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
          
  {/* Секция гарантий */}
  <div className="my-5 px-3 sm:px-5">
    <div className="text-4xl sm:text-5xl lg:text-7xl font-bold">
      Мы гарантируем
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-3 sm:px-5 mb-5 gap-3 sm:gap-[46px]">
    <div className="bg-[#F9F7F7] rounded-lg w-full">
      <div className="p-3 sm:p-5">
        <div className="font-bold py-3 sm:py-5 text-lg sm:text-xl">
          Продающий сайт
        </div>
        <div className="text-sm sm:text-base">
          Оптимизированный сайт для продаж ваших услуг
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="pt-8 sm:pt-12 pl-3 sm:pl-5">
          <div className='text-gray-600 text-2xl sm:text-[40px] px-3 sm:px-5 font-bold'>01</div>
        </div>
        <div 
          className="w-full h-[100px] sm:h-[133px]"
          style={{ 
            backgroundImage: "url(globe.webp)",
            backgroundSize: 'auto 70%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>
    </div>

    <div className="bg-[#F9F7F7] rounded-lg w-full">
      <div className="p-3 sm:p-5">
        <div className="font-bold py-3 sm:py-5 text-lg sm:text-xl">
          Домен и хостинг
        </div>
        <div className="text-sm sm:text-base">
          Зарегистрируем домен и опубликуем сайт в сети
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="pt-8 sm:pt-12 pl-3 sm:pl-5">
          <div className='text-gray-600 text-2xl sm:text-[40px] px-3 sm:px-5 font-bold'>02</div>
        </div>
        <div 
          className="w-full h-[100px] sm:h-[133px]"
          style={{ 
            backgroundImage: "url(roads.webp)",
            backgroundSize: 'auto 70%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>
    </div>

    <div className="bg-[#F9F7F7] rounded-lg w-full">
      <div className="p-3 sm:p-5">
        <div className="font-bold py-3 sm:py-5 text-lg sm:text-xl">
          Поддержка 24/7
        </div>
        <div className="text-sm sm:text-base">
          Мы готовы помочь с любыми вопросами по сайту
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="pt-8 sm:pt-12 pl-3 sm:pl-5">
          <div className='text-gray-600 text-2xl sm:text-[40px] px-3 sm:px-5 font-bold'>03</div>
        </div>
        <div 
          className="w-full h-[100px] sm:h-[133px]"
          style={{ 
            backgroundImage: "url(people.webp)",
            backgroundSize: 'auto 70%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>
    </div>

    <div className="bg-[#F9F7F7] rounded-lg w-full">
      <div className="p-3 sm:p-5">
        <div className="font-bold py-3 sm:py-5 text-lg sm:text-xl">
          Соблюдение закона
        </div>
        <div className="text-sm sm:text-base">
          Наши сайты и реклама соответствуют ФЗ-152 и ФЗ-38
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="pt-8 sm:pt-12 pl-3 sm:pl-5">
          <div className='text-gray-600 text-2xl sm:text-[40px] px-3 sm:px-5 font-bold'>04</div>
        </div>
        <div 
          className="w-full h-[100px] sm:h-[140px]"
          style={{ 
            backgroundImage: "url(law.webp)",
            backgroundSize: 'auto 70%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Main;
