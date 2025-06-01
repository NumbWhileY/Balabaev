import { useEffect, useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Develop = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedItemId } = useContext(AppContext);

  useEffect(() => {
    fetch('https://api.ipify.org/')
      .then(r => r.text())
      .then(ip => console.log('User IP:', ip))
      .catch(err => console.error('Failed to get IP:', err));

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:9000/api/service/${selectedItemId}`);
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedItemId]);

  const arrToStr = (str) => {
    if (!str) return [];
    const trimmedStr = str.substring(1, str.length - 1);
    return trimmedStr.split(',');
  }

  if (loading) return <div className="text-center py-10">Загрузка...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Ошибка: {error}</div>;
  if (!items) return <div className="text-center py-10">Услуга не найдена</div>;

  return (
    <div className="container mx-auto px-3 sm:px-5">
      {/* Hero секция */}
      <div 
        className="relative rounded-2xl w-full h-[200px] sm:h-[300px] bg-[#F9F7F7] my-5"
        style={{
          backgroundImage: `url(/${items.image})`,
          backgroundPosition: 'right 20px top 20px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 70%',
        }}
      >
        <div className="flex justify-between w-full p-3 sm:p-5">
          <div className="text-xs sm:text-sm">
            Главная / Услуги / Разработка сайтов
          </div>
          <div className="flex gap-2">
            <img src="code.webp" className="h-4 sm:h-5" alt="code" />
            <img src="25serv.webp" className="h-4 sm:h-5" alt="25serv" />
          </div>
        </div>

        <div className="absolute left-5 sm:left-10 top-16 sm:top-20 text-3xl sm:text-6xl font-bold">
          {items.title}
        </div>

        <div className="absolute left-5 sm:left-10 top-32 sm:top-52">
          <button
            className="bg-[#0077FF] rounded-lg sm:rounded-xl text-white px-5 sm:px-10 py-2 sm:py-3 font-bold text-lg sm:text-2xl"
            onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Обсудить проект
          </button>
        </div>
      </div>

      {/* Основной контент */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <div className="bg-[#F9F7F7] p-5 rounded-lg">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3">Ваш бизнес в сети</h2>
          <h3 className="text-xl sm:text-2xl font-bold mb-5">Что такое сайт-визитка?</h3>
          <p className="text-lg sm:text-xl mb-5">{items.description}</p>
          <div className="flex flex-wrap gap-3">
            <button className="border-2 rounded-lg px-3 py-1 text-sm sm:text-base">Обсудить проект</button>
            <button className="border-2 rounded-lg px-3 py-1 text-sm sm:text-base">Для бизнеса</button>
            <button className="border-2 rounded-lg px-3 py-1 text-sm sm:text-base">Для себя</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {[
            { bg: '#F9F7F7', icon: 'clock.webp', value: items.items[0]?.time, text: 'срок реализации' },
            { bg: '#F9F7F7', icon: 'star.webp', value: '1 год', text: 'гарантия' },
            { bg: '#0077FF', icon: 'people.webp', value: '1 месяц', text: 'бесплатное сопровождение', textColor: 'text-white' },
            { bg: '#F9F7F7', icon: 'statue.webp', value: '2 варианта', text: 'дизайн на выбор' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`bg-[${item.bg}] rounded-lg p-4 sm:p-6 ${item.textColor || ''}`}
              style={{
                backgroundImage: `url(${item.icon})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 50%',
                backgroundPosition: 'right bottom 10px'
              }}
            >
              <div className={`font-bold text-xl sm:text-3xl ${item.textColor || ''}`}>{item.value}</div>
              <div className={`pt-8 sm:pt-16 text-sm sm:text-xl ${item.textColor || ''}`}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Что включает */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-5">Что включает {items.title}?</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 my-5">
        <div>
          {items.items[0]?.item?.map((feature, index) => (
            <div key={index} className="bg-[#F9F7F7] rounded-lg p-4 sm:p-5 text-lg sm:text-xl mb-3">
              {feature}
            </div>
          ))}
        </div>
        
        <div 
          className="bg-[#F9F7F7] rounded-lg p-5 min-h-[300px]"
          style={{
            backgroundImage: `url(${items.items[0]?.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'contain'
          }}
        >
          <div className="text-xl sm:text-2xl">
            {arrToStr(items.items[0]?.feature)[0]?.replace(/"/g, '')}
          </div>
        </div>
      </div>

      {/* Преимущества */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-5">Преимущества работы с нами</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {[
          {
            title: 'Индивидуальный подход',
            desc: 'Мы учитываем все пожелания клиента и создаем сайт, который отражает специфику вашего бизнеса',
            num: '01'
          },
          {
            title: 'Современный дизайн',
            desc: 'Разработка современного и адаптивного дизайна, который будет отлично смотреться на любых устройствах',
            num: '02'
          },
          {
            title: 'SEO-оптимизация',
            desc: 'Сайт будет готов к продвижению в поисковых системах, что поможет привлечь больше клиентов',
            num: '03'
          },
          {
            title: 'Поддержка и сопровождение',
            desc: 'Мы не просто создаем сайт, но и обеспечиваем его поддержку после запуска',
            num: '04'
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-[#F9F7F7] rounded-lg p-5 relative overflow-hidden"
          >
            <div className="absolute right-5 bottom-5 w-20 h-1 bg-blue-500"></div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm sm:text-base mb-8">{item.desc}</p>
            <div className="text-gray-400 text-2xl sm:text-4xl font-bold">{item.num}</div>
          </div>
        ))}
      </div>

      {/* CTA секция */}
      <div className="bg-[#F9F7F7] rounded-lg p-5 my-5 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-lg sm:text-xl font-bold text-[#0077FF] mb-4 sm:mb-0 sm:mr-5">
          Не упустите возможность создать свое присутствие в интернете! Оставьте заявку, и мы поможем вам разработать сайт, который станет эффективным инструментом для вашего бизнеса
        </p>
        <button 
          className="bg-[#0077FF] rounded-lg sm:rounded-xl text-white px-5 sm:px-10 py-2 sm:py-3 font-bold text-lg sm:text-xl"
          onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Получить консультацию
        </button>
      </div>
    </div>
  );
};

export default Develop;