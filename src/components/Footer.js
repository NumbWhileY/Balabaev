import React, { useEffect, useRef } from "react";
import IMask from 'imask';

const Footer = () => {
    const telInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // 1. Получаем IP пользователя
            const ipResponse = await fetch('http://localhost:9000/get-ip');
            if (!ipResponse.ok) throw new Error('Ошибка получения IP');
            const { ip } = await ipResponse.json();
            console.log('IP пользователя:', ip);
        
            // 2. Формируем данные формы
            const phoneValue = telInputRef.current?.unmaskedValue || 
                              telInputRef.current?.value.replace(/\D/g, '');
            
            const formData = {
                name: e.target.name.value,
                tel: `+7${phoneValue}`,
                email: e.target.email.value,
                ip: ip
            };
        
            console.log('Отправляемые данные:', formData);
        
            // 3. Отправляем данные формы
            const response = await fetch('http://localhost:9000/api/bid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        
            if (!response.ok) {
                alert('Это функция недоступна в режиме DEMO')
            }
        
            const result = await response.json();
            console.log('Успешно отправлено:', result);
            alert('Форма успешно отправлена!');
            
        } catch (error) {
            console.error('Ошибка:', error);
            alert(`Ошибка: ${error.message}`);
        }
    };

    useEffect(() => {
        const input = telInputRef.current;
        if (input) {
            const maskOptions = {
                mask: '+{7}(000)000-00-00'
            };
            const mask = IMask(input, maskOptions);

            const handleInput = () => {
                if (!input.value.startsWith('+')) {
                    input.value = '+' + input.value.replace(/\+/g, '');
                }
            };

            const handleKeyDown = (e) => {
                if (input.selectionStart === 1 && e.key === 'Backspace') {
                    e.preventDefault();
                }
            };

            input.addEventListener('input', handleInput);
            input.addEventListener('keydown', handleKeyDown);

            return () => {
                input.removeEventListener('input', handleInput);
                input.removeEventListener('keydown', handleKeyDown);
                mask.destroy();
            };
        }
    }, []);

    return (
        <footer className="bg-white">
            {/* Секция скидки */}
            <div className="px-3 sm:px-5 py-3 sm:py-5">
                <img src="discount.webp" alt="Discount" className="w-full mx-auto" />
            </div>

            {/* Форма обсуждения проекта */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3 sm:px-5 mb-5">
                <div id='form' className="order-2 md:order-1">
                    <img src="projectDis.webp" alt="Project Discussion" className="w-full" />
                </div>
                <div className="px-3 sm:px-5 order-1 md:order-2">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold mb-5">Обсудить проект</div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="text-sm">Как к вам обращаться?</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Имя"
                                    className="border rounded-lg px-4 py-2 w-full mt-1"
                                />
                            </div>
                            <div>
                                <label htmlFor="tel" className="text-sm">Ваш телефон</label>
                                <input
                                    type="text"
                                    name="tel"
                                    id="tel"
                                    required
                                    placeholder="+7 (999) 999-99-99"
                                    className="border rounded-lg px-4 py-2 w-full mt-1"
                                    ref={telInputRef}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-sm">Ваш e-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="ivanov@mail.com"
                                className="border rounded-lg px-4 py-2 w-full mt-1"
                            />
                        </div>
                        <div className="mb-4 text-xs">
                            Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных и политикой конфиденциальности
                        </div>
                        <div className="flex justify-end">
                            <button 
                                type="submit"
                                className="text-white rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-700 transition-colors"
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Нижняя часть футера */}
            <div className="bg-[#F9F7F7] py-5 sm:py-7">
                <div className="container mx-auto px-3 sm:px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Колонка 1 */}
                        <div>
                            <div className="text-gray-600 font-black text-sm mb-3">BALABAEV PRODUCTION</div>
                            <ul className="space-y-2">
                                {['Главная', 'Все услуги', 'Портфолио', 'BP Soft ID', 'Контакты', 'Политика конфиденциальности'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm hover:text-blue-600">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Колонка 2 */}
                        <div>
                            <div className="text-gray-600 font-black text-sm mb-3">УСЛУГИ</div>
                            <ul className="space-y-2">
                                {[
                                    'Разработка сайта-визитки',
                                    'Интернет-магазина на CMS OpenCart',
                                    'Интернет-магазина на CMS 1С-Битрикс',
                                    'Разработка сайта компании',
                                    'Образовательная платформа',
                                    'Другая платформа'
                                ].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm hover:text-blue-600">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Колонка 3 */}
                        <div>
                            <div className="text-gray-600 font-black text-sm mb-3">КАТАЛОГ</div>
                            <ul className="space-y-2">
                                {[
                                    'Полотенцесушители',
                                    'Аксессуары',
                                    'Слив и канализация',
                                    'Водоснабжение',
                                    'Инсталляции, кнопки смыва',
                                    'Водонагреватели'
                                ].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm hover:text-blue-600">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Колонка 4 */}
                        <div className="space-y-4">
                            <div>
                                <div className="text-gray-600 font-black text-xl mb-2">КОНТАКТЫ</div>
                                <div className="font-bold">+7 (xxx) xxx-xx-xx</div>
                                <div className="font-bold py-2">info@xxxx-xxxxxx.ru</div>
                                <div className="flex space-x-3 py-2">
                                    <a href="#"><img src="waFooter.webp" className="w-6 h-6" alt="WhatsApp" /></a>
                                    <a href="#"><img src="telgramFooter.webp" className="w-6 h-6" alt="Telegram" /></a>
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-600 font-black text-xl mb-2">РЕЖИМ РАБОТЫ</div>
                                <div className="font-black text-sm">Пн-Вс: с 09:00 до 21:00</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-right">
                        <div className="font-black text-sm">Сайт находится в режиме DEMO</div>
                    </div>
                </div>
            </div>

            {/* Копирайт */}
            <div className="bg-[#D0D0D080] px-3 sm:px-5 py-2 flex flex-col sm:flex-row justify-between items-center text-sm">
                <div>© 2019-2025 Balabaev Production</div>
                <div>ИП Балабаев Д. И.</div>
            </div>
        </footer>
    );
};

export default Footer;