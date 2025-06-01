import { useNavigate } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import { AppContext } from "../context/AppContext";

const SiteDev = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    const { setSelectedItemId } = useContext(AppContext);
    const [activeFilter, setActiveFilter] = useState('dev');

      useEffect(() => {
          // При изменении фильтра сначала скрываем сетку
          setIsVisible(false);
          
          // Через небольшой таймаут снова показываем
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 400); // Время должно быть чуть больше чем transition (2s)
        
          return () => clearTimeout(timer);
        }, [activeFilter]);



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

            



            const filteredItems = items.filter(item => item.key === 'dev');
  

        const navigate = useNavigate();

        const handleItemClick = (id) => {
            setSelectedItemId(id); // Устанавливаем выбранную картинку в контекст
            navigate('/develop'); // Переходим на страницу /develop
        };
  



    return(
        <div className="px-5">
          <div className="flex relative justify-center mt-5 mb-5 px-5 rounded-2xl w-full h-[300px] bg-[#F9F7F7]">
            <div className="flex justify-between w-full py-2">
                <div>
                <small>Главная / Услуги / Разработка сайтов</small>
                </div>
                <div className="flex">
                 <img src="code.webp" className="h-[20px]"/>
                 <img src="25serv.webp" className="h-[20px]"/>
                </div>
            </div>
                <img
                    src="/const_piece.webp"
                    className="absolute w-95 h-80 bottom-0 right-20" // Позиционирование в правом нижнем углу
                    alt="Robot"
                />

                <div className="absolute left-10 top-20 text-6xl font-bold">
                    Разработка сайта
                </div>

                <div className="absolute left-10 top-52 flex flex-col"> 
                    <button className="bg-[#0077FF] rounded-xl text-white px-10 mt-5 font-bold" style={{fontSize: '32px'}}
                    onClick={() => {document.getElementById('services').scrollIntoView({ behavior: 'smooth' });}}
                    >Подобрать услугу</button>
                </div>
            </div>

            <div className="grid grid-cols-2 px-5 pt-5 gap-4">
   
    <div className="row-span-2 rounded-lg bg-[#F9F7F7] first">
        <div className="px-5 py-5">
            <div className="font-bold">Об разработке сайтов</div>
            <div className="pt-7 text-[24px]">
                Мы создаем сайты, которые не просто привлекают внимание, но и конвертируют посетителей в клиентов. 
                Веб-студия "Balabaev Production" предлагает полный цикл разработки сайтов любой сложности: от лендингов и корпоративных порталов до интернет-магазинов. 
                Мы используем современные технологии и индивидуальный подход, чтобы ваш бизнес выделялся на фоне конкурентов и достигал новых высот. Ваш сайт – это ваш успех в интернете, и мы знаем, как его обеспечить.
            </div>
            <div className="flex items-center px-5 py-10 space-x-4">
                <button className="text-[16px] border-2 rounded-lg pr-2">
                    <span className="whitespace-nowrap">Подобрать услугу</span>
                </button>
                <button className="text-[16px] border-2 rounded px-2">
                    <span className="whitespace-nowrap">Для бизнеса</span>
                </button>
                <button className="text-[16px] border-2 rounded px-2">
                    <span className="whitespace-nowrap">Для себя</span>
                </button>
            </div>
        </div>
    </div>

    
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
   
        <div className="flex bg-[#F9F7F7] rounded-lg p-[31px]"
         style={{ 
            backgroundImage: "url(clock.webp)",
            backgroundSize: 'auto 40%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <div className="pr-10">
                <div className="font-bold text-[48px]">От 14 дней</div>
                <div className="pt-20 text-[24px]">срок реализации</div>
            </div>
        </div>

      
        <div className="flex bg-[#F9F7F7] rounded-lg p-[31px]"
        style={{ 
            backgroundImage: "url(star.webp)",
            backgroundSize: 'auto 40%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <div className="pr-10">
                <div className="font-bold text-[48px]">1 год</div>
                <div className="pt-20 text-[24px]">гарантия</div>
            </div>
        </div>

       
        <div className="flex bg-[#0077FF] rounded-lg p-[31px]"
         style={{ 
            backgroundImage: "url(people.webp)",
            backgroundSize: 'auto 40%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <div className="pl-5">
                <div className="font-bold text-white text-[48px]">1 месяц</div>
                <div className="pt-20 text-white text-[24px]">бесплатное сопровождение</div>
            </div>
        </div>

        
        <div className="flex bg-[#F9F7F7] rounded-lg p-[31px]"
         style={{ 
            backgroundImage: "url(statue.webp)",
            backgroundSize: 'auto 40%',
            backgroundPosition: 'right bottom 10px',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <div className="pr-10">
                <div className="font-bold text-[48px] whitespace-nowrap">2 варианта</div>
                <div className="pt-20 text-[24px]">дизайн на выбор</div>
            </div>

        </div>
    </div>
</div>




            <div className="flex px-5 mt-5">
                <div className="font-bold text-7xl" id="services">Услуги</div>
                <div className="bg-blue-700 transform -skew-x-12 h-[30px] px-7 flex items-center justify-center rounded-xl">
                    <span className="transform skew-x-12 text-white">{filteredItems.length}</span>
                </div>
                {/* <div className="flex items-center px-5 py-10 space-x-4">
                    <button id="all" className="text-lg border-2 rounded-lg px-5" onClick={() => {setActiveFilter('all');}}>Все</button>
                    <button id="site" className="text-lg border-2 rounded px-5" onClick={() => {setActiveFilter('site');}}>Разработка сайтов</button>
                    <button id="design" className="text-lg border-2 rounded px-5" onClick={() => {setActiveFilter('design');}}>Дизайн</button>
                    <button id="prod" className="text-lg border-2 rounded px-5" onClick={() => {setActiveFilter('prod');}}>Продвижение</button>
                    <button id="sopr" className="text-lg border-2 rounded px-5" onClick={() => {setActiveFilter('sopr');}}>Сопровождение</button>
                </div> */}
            </div>

            <div className="grid grid-cols-3 grid-rows-2 px-5 gap-10" id="grid"
            style={{
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: isVisible ? 1 : 0,
            transition: 'visibility 0s, opacity 0.5s linear'
            }}
            >
            {filteredItems.map((item) => (
                <div 
                key={item.id}
                id={item.key}
                className="grid grid-cols-2 grid-rows-1 w-full bg-[#F9F7F7] gap-10 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleItemClick(item.image)}
                    
                        >
                        <div className="px-5 py-5 justify-around">
                            <div className="pb-5 font-bold">{item.title}</div>
                            <div className="pt-5">{item.description}</div>
                        </div>
                        <div>
                    {item.discount && (
                    <div className="flex justify-end px-5 pt-3">
                        <div className="bg-blue-700 transform -skew-x-12 rounded-xl px-5 text-white">-50%</div>
                    </div>
                    )}
                    <img src={item.image} className={item.discount ? "" : "py-10"} alt={item.title} />
                </div>
                </div>
            ))}
            </div>
        </div>
    );
}


export default SiteDev;