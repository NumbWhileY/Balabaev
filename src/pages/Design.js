import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Design = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { setSelectedItemId } = useContext(AppContext);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
        navigate('/develop');
    };

    useEffect(() => {
        fetch('https://api.ipify.org/')
            .then(r => r.text())
            .then(ip => console.log('User IP:', ip))
            .catch(err => console.error('Failed to get IP:', err));

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:9000/api/service');
                if (!response.ok) throw new Error('Ошибка загрузки данных');
                const data = await response.json();
                setItems(data);
                setIsVisible(true);
            } catch (err) {
                setError(err.message);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredItems = items?.filter(item => item.key === 'design');

    return (
        <div className="container mx-auto px-4">
            <div className="flex relative justify-center mt-5 mb-5 rounded-2xl w-full h-[300px] bg-[#F9F7F7]">
                <div className="flex justify-between w-full py-2">
                    <div>
                        <small>Главная / Услуги / Разработка сайтов</small>
                    </div>
                    <div className="flex">
                        <img src="code.webp" className="h-[20px]" alt="Code" />
                        <img src="25serv.webp" className="h-[20px]" alt="Services" />
                    </div>
                </div>
                <img
                    src="/statue.webp"
                    className="absolute w-95 h-64 bottom-0 right-20 pb-3"
                    alt="Robot"
                />
                <div className="absolute left-10 top-20 text-6xl font-bold">
                    Услуги дизайна
                </div>
                <div className="absolute left-10 top-52 flex flex-col">
                    <button
                        className="bg-[#0077FF] rounded-xl text-white px-10 mt-5 font-bold text-lg md:text-xl lg:text-2xl"
                        onClick={() => { document.getElementById('form').scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        Подобрать услугу
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-5 pt-5 gap-4">
                <div className="row-span-2 rounded-lg bg-[#F9F7F7] p-5">
                    <h1 className="font-bold text-[32px] md:text-[48px]">Об услуге дизайна</h1>
                    <p className="pt-7 text-[16px] md:text-[24px]">
                        Услуга "Дизайн" от "Balabaev Production" предлагает создание уникальных и запоминающихся визуальных решений для вашего бизнеса.
                        Мы разрабатываем стильные и функциональные веб-дизайны, привлекающие внимание баннеры и креативные посты для социальных сетей.
                        Наш подход сочетает эстетику с удобством использования, чтобы ваш бренд выделялся и успешно взаимодействовал с вашей целевой аудиторией.
                        Независимо от сложности задачи, мы обеспечим индивидуальный подход и высокое качество каждого проекта.
                    </p>
                    <div className="flex items-center px-1 py-10 space-x-4">
                        <button
                            className="text-sm border-2 rounded-lg pr-2 bg-[#0077FF] px-3 py-2"
                            onClick={() => { document.getElementById('grid').scrollIntoView({ behavior: 'smooth' }); }}
                        >
                            <span className="whitespace-nowrap text-white">Подобрать услугу</span>
                        </button>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="flex bg-[#F9F7F7] rounded-lg p-[31px]"
                        style={{
                            backgroundImage: "url('clock.webp')",
                            backgroundSize: 'auto 60%',
                            backgroundPosition: 'right bottom 10px',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="pr-10">
                            <h2 className="font-bold text-[32px] md:text-[48px]">от 1-го дня</h2>
                            <p className="pt-20 text-[16px] md:text-[24px]">срок реализации</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex bg-[#F9F7F7] rounded-lg p-[31px]"
                        style={{
                            backgroundImage: "url('statue.webp')",
                            backgroundSize: 'auto 60%',
                            backgroundPosition: 'right bottom 10px',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="pr-10">
                            <h2 className="font-bold text-[32px] md:text-[48px]">2 варианта</h2>
                            <p className="pt-20 text-[16px] md:text-[24px]">дизайн на выбор</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex bg-[#0077FF] rounded-lg p-[31px]"
                        style={{
                            backgroundImage: "url('puzzle.webp')",
                            backgroundSize: 'auto 60%',
                            backgroundPosition: 'right bottom 10px',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="pl-5">
                            <h2 className="font-bold text-white text-[32px] md:text-[48px]">внимание</h2>
                            <p className="pt-20 text-white text-[16px] md:text-[24px]">к деталям</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex bg-[#333333] rounded-lg p-[31px]"
                        style={{
                            backgroundImage: "url('star.webp')",
                            backgroundSize: 'auto 60%',
                            backgroundPosition: 'right bottom 10px',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="pr-10">
                            <h2 className="font-bold text-white text-[32px] md:text-[48px]">нет шаблонов</h2>
                            <p className="pt-20 text-white text-[16px] md:text-[24px]">в дизайне</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Items Grid Section */}
            <div
                id='grid'
                style={{
                    visibility: isVisible ? 'visible' : 'hidden',
                    opacity: isVisible ? 1 : 0,
                    transition: 'visibility 0s, opacity 0.5s linear'
                }}
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-5 mt-5`}
            >
                {filteredItems?.map((item) => (
                    <div
                        key={item.id}
                        id={item.key}
                        onClick={() => handleItemClick(item.id)}
                        className={`grid grid-cols-1 w-full bg-[#F9F7F7] gap-y-${item.discount ? "6" : "4"} rounded-lg cursor-pointer hover:shadow-lg transition-shadow`}
                    >
                        {/* Item Content */}
                        <div className={`p-${item.discount ? "6" : "4"} justify-around`}>
                            <h3 className={`pb-${item.discount ? "6" : "4"} font-bold`}>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>

                       {/* Item Image */}
                       {item.image && (
                           // Ensure the image is displayed correctly
                           // You can adjust the height and width as needed for responsiveness
                           <>
                               {item.discount && (
                                   // Discount Badge
                                   <>
                                       {/* Discount Badge */}
                                       {/* Adjust position and size as needed */}
                                       {/* You can also add a condition to show/hide based on screen size */}
                                       {/* Example of a discount badge */}
                                       {item.discount && (
                                           // Discount Badge
                                           <>
                                               {/* Discount Badge */}
                                               {/* Adjust position and size as needed */}
                                               {/* You can also add a condition to show/hide based on screen size */}
                                               {/* Example of a discount badge */}
                                               {item.discount && (
                                                   // Discount Badge
                                                   <>
                                                       {/* Discount Badge */}
                                                       {/* Adjust position and size as needed */}
                                                       {/* You can also add a condition to show/hide based on screen size */}
                                                       {/* Example of a discount badge */}

                                                       

                                                   </>
                                               )}
                                           </>
                                       )}
                                   </>
                               )}
                           </>
                       )}
                   </ div >
               ))}
           </ div >

       </ div >
   );
}

export default Design;