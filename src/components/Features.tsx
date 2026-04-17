import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Clock",
    title: "Неспешное планирование",
    description: "Тайм-блоки, которые уважают ваши естественные ритмы. Между задачами всегда есть место для паузы и восстановления.",
  },
  {
    icon: "Layers",
    title: "Фокус на текущем",
    description: "Видите только то, что важно прямо сейчас. Остальное терпеливо ждёт своего момента.",
  },
  {
    icon: "Moon",
    title: "Часы тишины",
    description: "Автоматические периоды покоя защищают время глубокой работы — без уведомлений, без отвлечений.",
  },
  {
    icon: "Sparkles",
    title: "Мягкая аналитика",
    description: "Вдумчивые наблюдения за вашими паттернами продуктивности — без давления, с пониманием.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Возможности</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Инструменты, дарящие покой
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}