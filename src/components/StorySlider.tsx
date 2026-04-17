import { useState } from "react";
import Icon from "@/components/ui/icon";

const episodes = [
  {
    number: "01",
    title: "Первая жертва",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
    border: "border-terracotta/20",
    dot: "bg-terracotta",
    text: `Маша вошла в класс, сжимая в руках папку с тетрадями. Все взгляды тут же обратились к ней — новенькой, которая сегодня впервые переступила порог школы.

— Смотрите‑ка, какая «красотка» к нам пожаловала! — ехидно бросила Аня, толкнув локтем Лизу. Та громко рассмеялась.

Маша покраснела и опустила глаза. Она знала, что её веснушки и рыжие волосы часто становятся поводом для насмешек. Она робко прошла к свободной парте, стараясь не замечать перешёптываний и смешков за спиной. Учитель литературы, заметив напряжение в классе, мягко сказал:

— Маша, добро пожаловать. Надеюсь, ты почувствуешь себя здесь как дома.

Но слова учителя не заглушили едких замечаний Ани и Лизы, которые продолжали перемигиваться и хихикать.`,
  },
  {
    number: "02",
    title: "Безмолвные свидетели",
    color: "text-stone",
    bg: "bg-stone/10",
    border: "border-stone/20",
    dot: "bg-stone",
    text: `На перемене Аня и Лиза окружили Машу у окна.

— Может, ты наденешь парик? А то твои рыжие вихры слепят! — съязвила Лиза.

Маша молча отвернулась, чувствуя, как к горлу подступает комок. Она отошла к подоконнику и уставилась в окно, пытаясь сдержать слёзы.

Петя стоял неподалёку и всё видел. Ему было искренне жаль Машу — она казалась такой беззащитной. Он хотел вступиться, но слова застряли в горле. Страх стать следующей мишенью сковал его. Остальные одноклассники тоже делали вид, что ничего не происходит: кто‑то листал телефон, кто‑то болтал с друзьями. Маша ощущала себя одинокой в этом шумном коридоре — словно она была невидимкой, которую никто не хотел замечать.`,
  },
  {
    number: "03",
    title: "Первый шаг к переменам",
    color: "text-amber",
    bg: "bg-amber/10",
    border: "border-amber/20",
    dot: "bg-amber",
    text: `После уроков Петя набрался смелости и зашёл в учительскую.

— Извините, можно с вами поговорить? — тихо спросил он. — Аня и Лиза постоянно дразнят Машу. Это уже не просто шутки…

Учитель внимательно выслушал Петю, кивнул и на следующий день объявил:

— Ребята, у нас важный разговор. Буллинг — это не безобидные поддёвки. Он ранит и разрушает доверие в коллективе.

Аня и Лиза переглянулись, опустив глаза. Маша удивлённо подняла взгляд — впервые кто‑то встал на её защиту. Аня пробормотала:

— Мы… мы не думали, что это так серьёзно.

Лиза кивнула и тихо добавила:

— Прости, Маша.`,
  },
  {
    number: "04",
    title: "Новая атмосфера",
    color: "text-sage",
    bg: "bg-sage/10",
    border: "border-sage/20",
    dot: "bg-sage",
    text: `Через неделю всё изменилось. На уроке труда ребята дружно помогали Маше склеить макет города. Петя предложил ей работать в паре, а Аня принесла цветные карандаши:

— Возьми, у меня лишние.

Класс оживился: теперь никто не шептался за спиной, а наоборот — звали Машу в игры на перемене, делились конфетами, спрашивали совета. Маша впервые за долгое время искренне улыбнулась. Ей больше не хотелось прятаться — она чувствовала поддержку.

Учитель, наблюдая за ребятами, удовлетворённо кивнул. Атмосфера в классе стала теплее: все поняли, что доброта и уважение создают пространство, где каждому комфортно быть собой.`,
  },
];

export function StorySlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + episodes.length) % episodes.length);
  const next = () => setCurrent((c) => (c + 1) % episodes.length);

  const ep = episodes[current];

  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">История</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Буллинг в школе
          </h2>
        </div>

        {/* Slide */}
        <div className={`rounded-2xl border ${ep.border} ${ep.bg} p-8 md:p-12 min-h-[420px] flex flex-col transition-all duration-500`}>
          <div className="flex items-center gap-4 mb-8">
            <span className={`font-serif text-5xl font-bold opacity-20 ${ep.color}`}>{ep.number}</span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Эпизод {parseInt(ep.number)}</p>
              <h3 className={`font-serif text-2xl md:text-3xl ${ep.color}`}>«{ep.title}»</h3>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-foreground leading-relaxed">
            {ep.text.split("\n\n").map((para, i) => (
              <p key={i} className={para.startsWith("—") ? "italic text-muted-foreground pl-4 border-l-2 border-border" : ""}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prev}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {episodes.map((e, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? `${e.dot} w-6` : "bg-border"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
          >
            Вперёд
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
