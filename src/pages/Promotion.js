import PricingGrid from "../components/PricingGrid";



const Promotion = () => {
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
                    src="/stairs.webp"
                    className="absolute w-95 h-64 bottom-0 right-20 pb-3" // Позиционирование в правом нижнем углу
                    alt="Robot"
                />

                <div className="absolute left-10 top-20 text-6xl font-bold"
                >
                Продвижение
                </div>

                <div className="absolute left-10 top-52 flex flex-col"> 
                    <button className="bg-[#0077FF] rounded-xl text-white px-10 mt-5 font-bold" style={{fontSize: '32px'}}
                    onClick={() => {document.getElementById('form').scrollIntoView({ behavior: 'smooth' });}}
                    >Обсудить тарифы</button>
                </div>
            </div>



            <PricingGrid/>

            <div className="bg-[#F9F7F7] rounded-lg p-5 w-full mt-5 flex justify-between items-center">
                <div>
                    Оставьте заявку чтобы получить консультацию и узнать стоимость тарифоф для вашего бизнеса
                </div>
                <button className="bg-[#0077FF] rounded-xl text-white px-10 font-bold"
                 onClick={() => {
                    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
                }}
                >Получить консультацию</button>
            </div>
        </div>
    )
} 


export default Promotion;