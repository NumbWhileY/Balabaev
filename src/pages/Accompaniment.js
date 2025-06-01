const Accompaniment = () =>  {
    return(
        <div>
            <div
                className="flex relative justify-center mt-5 mb-5 px-5 rounded-2xl w-full h-[300px] bg-[#F9F7F7]"
                style={{
                    backgroundImage: 'url(/bubble.webp)',
                    backgroundPosition: 'right 50px top 20px', // Смещение на 50px от правого края и 20px от верхнего края
                    backgroundRepeat: 'no-repeat', // Изображение не повторяется
                    backgroundSize: 'auto 100%', // Изображение не растягивается и не обрезается
                  }}
                >
                <div className="flex justify-between w-full py-2">
                    <div>
                    <small>Главная / Услуги / Разработка сайтов</small>
                    </div>
                    <div className="flex">
                    <img src="code.webp" className="h-[20px]" alt="code" />
                    <img src="25serv.webp" className="h-[20px]" alt="25serv" />
                    </div>
                </div>

                    <div className="absolute left-10 top-20 text-6xl font-bold">
                        Сопровождение
                    </div>

                <div className="absolute left-10 top-52 flex flex-col">
                    <button
                    className="bg-[#0077FF] rounded-xl text-white px-10 mt-5 font-bold"
                    style={{ fontSize: '32px' }}
                    onClick={() => {
                        document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    >
                    Заказать сопровождение
                    </button>
                </div>
            </div>




            <div className="grid grid-cols-3 gap-8 px-5">


                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/clock_.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Техническая <br/> поддержка 24/7</div>
                    </div>
                    </div>




                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/CreditCard.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Забудть об оплате <br/> хостинга и домена</div>
                    </div>
                    </div>



                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/telegramLike.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Увеличим скорость <br/> загрузки вашего сайта</div>
                    </div>
                    </div>





                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/ArrowCircle.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Постоянно обновляем контент вашего сайта</div>
                    </div>
                    </div>




                    <div className="bg-[#F9F7F7] rounded-lg">
                        <div className="px-5">
                            <div className='text-[48px] text-blue-700 font-bold'>от 5500 ₽ <small className='text-[#B0B0B0] text-[24px]'>/ месяц</small></div>
                            <div className='pt-32 text-[24px]'>в стоимость включена оплата хостинга и домена</div>
                        </div>
                    </div>



                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/webpage.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Улучшим SEO-оптимизацию сайта</div>
                    </div>
                    </div>

                 


                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/shield.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Защити ваш сайт от лишник подключений</div>
                    </div>
                    </div>



                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/clockCorner.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Съэкономим ваши ресурсы и время</div>
                    </div>
                    </div>



                    <div className="bg-[#F9F7F7] rounded-lg"
                    style={{
                        backgroundImage: 'url(/robot.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 70%',
                        backgroundPosition: 'right bottom'
                        }}
                    >
                    <div className="px-5 pt-5 pb-40">
                        <div className="text-[36px] font-bold">Вы забудете про рутинные занятия по сайту</div>
                    </div>
                    </div>
            </div>

            <div className='px-5'>
            <div className="bg-[#F9F7F7] rounded-lg w-full mt-5 flex justify-between items-center  px-5 py-5">
                            <div className='text-[32px] font-bold'>
                            Оставьте заявку чтобы получить консультацию и узнать стоимость сопровождения для вашего сайта
                            </div>
                        <button className="bg-[#0077FF] rounded-xl text-white px-10 font-bold text-[32px]"
                         onClick={() => {
                            document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
                        }}
                        >Получить консультацию</button>
            </div>
            </div>
        </div>
    )
}


export default Accompaniment;