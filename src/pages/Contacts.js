import React from 'react';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Контакты | Наши контактные данные и реквизиты</title>
        <meta name="description" content="Свяжитесь с нами для обсуждения вашего проекта. Телефон, email, адрес офиса и реквизиты компании." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Наши контакты
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Контактная информация */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="flex items-start mb-10">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <div
                 style={{

                    
                    background: 'grey',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%'
                
            }}
            
                ></div>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
                  <a href="tel:+79296761105" className="mt-2 text-xl text-gray-600 hover:text-blue-600">
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
              </div>

              <div className="flex items-start mb-10">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href="mailto:info@balabaev-production.ru" className="mt-2 text-xl text-gray-600 hover:text-blue-600">
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  </a>
                </div>
              </div>

              
              

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Режим работы</h3>
                  <p className="mt-2 text-xl text-gray-600">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб-Вс: выходной
                  </p>
                </div>
              </div>
            </div>
          </div>

       
        </div>

       
       
          

        {/* Реквизиты */}
        <div className="mt-16 max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Реквизиты компании
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Юридическая информация</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Название:</strong> ООО "Моя оборона"</li>
                  <li><strong>ИНН:</strong> </li>
                  <li><strong>КПП:</strong> XXXXXXXXXXXXXXXXXXXX</li>
                  <li><strong>ОГРН:</strong>XXXXXXXXXXXXXX</li>
                </ul>
              </div>


              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Банковские реквизиты</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Банк:</strong> ПАО "Сбербанк"</li>
                  <li><strong>БИК:</strong> XXXXXXXXXXXXXXXXXXXXX5</li>
                  <li><strong>Р/с:</strong> XXXXXXXXXXXXXXXXX</li>
                  <li><strong>К/с:</strong>XXXXXXXXXX</li>
                </ul>
              </div>


            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default Contacts;