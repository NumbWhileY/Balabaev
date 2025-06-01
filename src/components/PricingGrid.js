const plans = [
    {
      name: "START",
      description: "Для начинающего бизнеса",
      features: [
        { name: "Количество рекламных компаний", value: "1", available: true },
        { name: "Количество рекламных баннеров", value: "", available: false },
        { name: "Количество ключевых фраз поиска", value: "до 50", available: true },
        { name: "Планирование рекламного бюджета", value: "", available: false },
        { name: "Анализ конкурентов", value: "", available: false },
        { name: "Настройка счетчиков и целей", value: "", available: false },
        { name: "Настройка UTM-меток", value: "", available: false },
        { name: "Поддержка и сопровождение", value: "", available: false },
        { name: "Регистрация в Яндекс.Бизнес", value: "", available: false },
        { name: "Ежемесячная отчетность", value: "", available: false },
        { name: "РК в локальных каналах VK, Telegram", value: "", available: false },
        { name: "Срок запуска компании", value: "1-2 дня", available: true, color: "blue" },
      ],
      backgroundColor: "#F9F7F7",
      textColor: "#000000",
    },
    {
      name: "BUSINESS PRO",
      description: "Для укрепившегося бизнеса, для повышения продаж",
      features: [
        { name: "Количество рекламных компаний", value: "до 2", available: true },
        { name: "Количество рекламных баннеров", value: "1", available: true },
        { name: "Количество ключевых фраз поиска", value: "до 80", available: true },
        { name: "Планирование рекламного бюджета", value: "", available: true },
        { name: "Анализ конкурентов", value: "", available: true },
        { name: "Настройка счетчиков и целей", value: "", available: true },
        { name: "Настройка UTM-меток", value: "", available: false },
        { name: "Поддержка и сопровождение", value: "", available: true },
        { name: "Регистрация в Яндекс.Бизнес", value: "", available: true },
        { name: "Ежемесячная отчетность", value: "", available: true },
        { name: "РК в локальных каналах VK, Telegram", value: "", available: false },
        { name: "Срок запуска компании", value: "2-5 дней", available: true, color: "blue" },
      ],
      backgroundColor: "#0077FF",
      textColor: "#FFFFFF",
    },
    {
      name: "PREMIUM",
      description: "Для максимального роста бизнеса",
      features: [
        { name: "Количество рекламных компаний", value: "до 5", available: true },
        { name: "Количество рекламных баннеров", value: "2", available: true },
        { name: "Количество ключевых фраз поиска", value: "до 150", available: true },
        { name: "Планирование рекламного бюджета", value: "", available: true },
        { name: "Анализ конкурентов", value: "", available: true },
        { name: "Настройка счетчиков и целей", value: "", available: true },
        { name: "Настройка UTM-меток", value: "", available: true },
        { name: "Поддержка и сопровождение", value: "", available: true },
        { name: "Регистрация в Яндекс.Бизнес", value: "", available: true },
        { name: "Ежемесячная отчетность", value: "", available: true },
        { name: "РК в локальных каналах VK, Telegram", value: "", available: true },
        { name: "Срок запуска компании", value: "5-7 дней", available: true, color: "blue" },
      ],
      backgroundColor: "#22C55E",
      textColor: "#FFFFFF",
    },
  ];
  
  const PricingCard = ({ plan }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6" style={{ backgroundColor: plan.backgroundColor, color: plan.textColor }}>
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold" style={{ fontFamily: "Raleway", fontWeight: "900" }}>
            {plan.name}
          </div>
          <img src="tarif.webp" alt="tarif" className="h-5" />
        </div>
        <div className="pt-4 font-bold">
          <small>{plan.description}</small>
        </div>
      </div>
      <div className="p-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex justify-between border-b-2 py-4">
            <div className="text-sm">{feature.name}</div>
            <div
              className={`transform -skew-x-12 h-5 px-4 flex items-center justify-center rounded-xl ${
                feature.available
                  ? feature.color === "blue"
                    ? "bg-[#0077FF]"
                    : "bg-[#22C55E]"
                  : "bg-[#EF4444]"
              }`}
            >
              <small className="transform skew-x-12 text-white">{feature.value}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  const PricingGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
  
  export default PricingGrid;