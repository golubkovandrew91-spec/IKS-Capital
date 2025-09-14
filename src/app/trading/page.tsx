"use client";
import React, { useState } from "react";

function Dropdown({ title, children }: { title: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md border bg-white">
      <button onClick={() => setOpen((v) => !v)} className="w-full px-4 py-2 text-left font-medium">
        {title}
      </button>
      {open && <div className="border-t px-4 py-3 text-sm opacity-90">{children}</div>}
    </div>
  );
}

export default function TradingPage(): React.ReactElement {
  return (
    <div className="py-8">
      {/* 1. Hero секция — ТРЕЙДИНГ */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-2xl">
        <div className="relative z-10 mx-auto w-full px-6 text-white space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">Трейдинг</h1>
          <p className="max-w-3xl text-base md:text-lg text-gray-200">
            Процесс покупки и продажи финансовых инструментов с целью получения прибыли за счёт краткосрочного колебания цены
          </p>
          <div className="pt-2">
            <a href="#intro" className="btn-primary">
              Узнайте, как мы используем трейдинг для увеличения доходности клиентов
            </a>
          </div>
        </div>
      </section>

      {/* 2. Введение */}
      <section id="intro" className="mx-auto w-full space-y-6 px-6">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Введение</h2>
          <p className="text-gray-700">
            Фьючерсная торговля — это торговля с использованием кредитного плеча фьючерсными контрактами, отражающих цену актива, без его фактической покупки или поставки. Это даёт возможность управлять позициями большего объёма, чем собственный капитал, зарабатывать как на росте, при устойчивом восходящем движении, так и на падении цен и хеджировать инвестиционный спотовый портфель от просадок.
          </p>
          <div className="text-sm text-gray-600">Принцип работы трейдинг‑направления:</div>
        </div>
        <ol className="list-decimal list-inside space-y-2">
          <li className="rounded-md border p-3 bg-white">Инвестор передаёт средства в управление</li>
          <li className="rounded-md border p-3 bg-white">Капитал используется для фьючерсной торговли</li>
          <li className="rounded-md border p-3 bg-white">Генерируется ежемесячный доход</li>
          <li className="rounded-md border p-3 bg-white">Выплаты производятся ежеквартально или реинвестируются по выбору инвестора</li>
        </ol>
      </section>

      {/* 3. Как мы применяем этот инструмент */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Как мы применяем этот инструмент:</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">При падении рынка</div>
            <p className="mt-2 text-gray-700">Открываем позиции, которые компенсируют просадку спотового портфеля</p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">При устойчивом росте</div>
            <p className="mt-2 text-gray-700">Увеличиваем объём сделок для усиления прибыли</p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">С жёстким риск‑менеджментом</div>
            <p className="mt-2 text-gray-700">Система защиты капитала: заранее ограничен возможный убыток на сделку и день, тейк‑профит и стоп‑лосс сохраняют доход и предотвращают крупные потери</p>
          </div>
        </div>
      </section>

      {/* 4. Преимущества трейдинга для инвестора */}
      <section className="mx-auto w-full space-y-4 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Преимущества трейдинга для инвестора</h3>
        <div className="text-gray-700">Пассивный доход и защита капитала</div>
        <Dropdown title="Ключевые преимущества">
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Гибкость — возможность адаптироваться к любой фазе рынка</li>
            <li>Снижение общей волатильности портфеля за счёт хеджирующих сделок</li>
            <li>Потенциал повышенной доходности при контролируемом уровне риска</li>
            <li>Получение дохода в краткосрочной перспективе</li>
          </ul>
        </Dropdown>
      </section>

      {/* 5. Комплексный подход к трейдингу */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Баланс опыта и технологий</h3>
        <p className="text-gray-700">
          IKS Capital — комплексный подход к трейдингу и управлению рисками. В IKS Capital мы используем два подхода к трейдингу — работу трейдеров и автоматизированные алгоритмы. Каждый из них имеет свои сильные стороны, и вместе они создают сбалансированную и безопасную систему.
        </p>
        <ul className="space-y-3">
          <li className="group rounded-xl border p-5 bg-white">
            <div className="text-lg font-semibold">Классический трейдинг</div>
            <div className="mt-2 text-gray-700">
              Это торговля, основанная на принятии торговых решений человеком — трейдером, учитывая его опыт, гибкость и умение быстро адаптироваться к неожиданным событиям на рынке. Профессиональный трейдер может учесть нюансы, которые не всегда видны в цифрах: новости, настроение рынка, поведение крупных игроков. Такой подход особенно ценен в нестандартных ситуациях, когда важно принять решение, опираясь не только на статистику, но и на здравый смысл. При этом у каждого трейдера есть чёткие лимиты по суммам и допустимым потерям, а все сделки проходят под контролем риск‑менеджера.
            </div>
          </li>
          <li className="group rounded-xl border p-5 bg-white">
            <div className="text-lg font-semibold">Алгоритмическая торговля</div>
            <div className="mt-2 text-gray-700">
              Это скорость, дисциплина и отсутствие эмоций. Алгоритмы работают по заранее заданным правилам и реагируют на изменения рынка за доли секунды. Они идеально подходят для стабильных условий, где важна точность исполнения и мгновенная реакция. Алгоритмы не устают, не поддаются панике и строго соблюдают установленные ограничения. Их работа круглосуточно контролируется, а при малейших отклонениях система автоматически останавливает торговлю.
            </div>
          </li>
        </ul>
        <p className="text-gray-800">
          Ключевое преимущество в том, что мы не полагаемся на один метод. Классический трейдинг даёт гибкость и умение работать в сложных ситуациях, а алгоритмы обеспечивают скорость и дисциплину. Эти подходы дополняют друг друга, а строгая система лимитов, постоянный мониторинг и распределение капитала между разными стратегиями делают процесс максимально безопасным для вложенных средств.
        </p>
      </section>

      {/* 6. Трёхуровневая система управления */}
      <section className="mx-auto w-full space-y-6 px-6">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-semibold">Трёхуровневая система управления</h3>
          <div className="text-gray-700">Штатные трейдеры + Алгоритмы + Prop IKS Capital</div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Штатные трейдеры — 60%</div>
            <p className="mt-2 text-gray-700">Это ядро нашей команды. Профессионалы с многолетним опытом и стабильными результатами в разных рыночных условиях. Их задача — надёжный, предсказуемый результат и пример дисциплины для всей команды.</p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Алгоритмическая торговля — 25%</div>
            <p className="mt-2 text-gray-700">Forex, Crypto алгоритмы — автоматизированные системы для валютных рынков и криптовалют, обеспечивающие круглосуточную торговлю без эмоций и усталости.</p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Prop IKS Capital — 15%</div>
            <p className="mt-2 text-gray-700">Направление для перспективных трейдеров из Академии IKS Capital. Обучение стратегиям фонда и отбор талантов с дисциплиной, умением работать с рисками и стремлением к результату.</p>
          </div>
        </div>
        <p className="text-gray-800">
          Благодаря этой системе мы масштабируемся без потери качества и безопасности управления средствами. Инвесторы получают уверенность, что рост компании сопровождается сохранением высокого уровня контроля и эффективности.
        </p>
      </section>

      {/* 7. Алготрейдинг 24/7 */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Алготрейдинг 24/7</h3>
        <div className="text-gray-700">Скорость, дисциплина и контроль</div>
        <p className="text-gray-700">
          Алгоритмический трейдинг в IKS Capital — это торговля, которую ведут не люди, а специально разработанные программы. Они работают по чётким правилам и математическим моделям, реагируя на изменения рынка за доли секунды. Такой подход исключает эмоции, усталость и субъективные решения, а значит — делает процесс максимально дисциплинированным.
        </p>
        <Dropdown title="Почему мы используем алготрейдинг:">
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Скорость и точность — алгоритм реагирует на рыночные изменения мгновенно</li>
            <li>Дисциплина — программа строго следует заданной стратегии</li>
            <li>Круглосуточная работа — алгоритмы могут торговать 24/7</li>
          </ul>
          <div className="mt-3 text-sm text-gray-600">Диверсификация внутри алготрейдинга:</div>
          <ul className="mt-1 list-disc list-inside space-y-1 text-gray-800">
            <li>Forex‑алго — валютные пары и золото</li>
            <li>Crypto‑алго — крупные криптовалюты (Ethereum, Bitcoin)</li>
          </ul>
        </Dropdown>
        <p className="text-gray-800">
          Такое распределение снижает зависимость от одного инструмента или рыночного сценария. Если на одном рынке ситуация неблагоприятная, другие стратегии могут приносить прибыль или компенсировать просадку.
        </p>
      </section>

      {/* 8. Система безопасности алгоритмов */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Система безопасности алгоритмов</h3>
        <div className="text-gray-700">Многоуровневая защита и контроль рисков</div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Жёсткие лимиты по рискам — каждый алгоритм имеет ограничение по максимальной просадке и объёму сделки",
            "Автоматическая остановка — при достижении лимита алгоритм прекращает торговлю до анализа ситуации",
            "Постоянный мониторинг — работа алгоритмов отслеживается в реальном времени, подключается команда риск‑менеджеров",
            "Регулярное обновление стратегий — алгоритмы адаптируются к изменениям рынка",
          ].map((t, i) => (
            <div key={i} className="rounded-xl border p-5 bg-white">
              <p className="text-gray-700 text-sm">{t}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-800">
          Алготрейдинг — это надёжный инструмент, который работает быстро, чётко и без эмоций. Он дополняет работу трейдеров‑людей, создавая баланс между гибкостью и скоростью. А система контроля и диверсификации делает этот процесс максимально безопасным для капитала.
        </p>
      </section>

      {/* 9. Диверсификация и многоуровневая защита */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Диверсификация и многоуровневая защита</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Системная безопасность, диверсификация и защита капитала</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Разные рынки — валюты, золото, криптовалюты</li>
              <li>Разные стратегии — от краткосрочных сделок до среднесрочных трендовых систем</li>
              <li>Разные инструменты управления рисками — стоп‑лоссы, лимиты по просадке, автоматическая приостановка торговли</li>
            </ul>
            <p className="mt-2 text-gray-800">Такое распределение снижает зависимость от одного инструмента или сценария и помогает сглаживать колебания доходности.</p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Безопасность на каждом этапе</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Многоуровневый риск‑контроль — лимиты на сделку, дневные и недельные ограничения по убыткам</li>
              <li>Постоянный мониторинг — команда риск‑менеджеров следит за работой алгоритмов и действиями трейдеров в реальном времени</li>
              <li>Адаптация стратегий — регулярный пересмотр и оптимизация алгоритмов и торговых планов</li>
            </ul>
            <p className="mt-2 text-gray-800">💡 Для инвестора: система, где человеческий опыт и машинная точность работают вместе — это комплексная стратегия, сочетающая скорость, гибкость и высокий уровень защиты капитала.</p>
          </div>
        </div>
      </section>

      {/* 10. Prop IKS Capital */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Prop IKS Capital</h3>
        <p className="text-gray-700">
          Prop IKS Capital — это специализированное подразделение в рамках направления «Трейдинг», создающее «проп‑среду» для перспективных трейдеров. Задача отдела — отбор, развитие и масштабирование талантливых специалистов, способных стабильно генерировать прибыль и эффективно управлять рисками, используя капитал компании.
        </p>
        <div className="text-sm text-gray-600">Описание процесса:</div>
        <ul className="space-y-3">
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Строка 1 — Отбор кандидатов и обучение</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>
                Внутренняя академия трейдинга: претенденты проходят курс (фундаментальный и технический анализ, риск‑менеджмент, психология)
              </li>
              <li>
                Соревновательные испытания: симуляции и «проп‑челленджи». Отсев по требованиям к максимальной просадке (обычно 5‑10%) и безубыточности за тестовый период
              </li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Строка 2 — Начальная капитализация</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Стартовый капитал $1 000–$10 000</li>
              <li>Дневной лимит убытка — до 1,5%</li>
              <li>Максимальная просадка — до 5% за неделю</li>
              <li>Объём на одну сделку — не более 10% капитала</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Строка 3 — Мониторинг и оценка результатов</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Доходность (% прибыли)</li>
              <li>Коэффициент Шарпа</li>
              <li>Среднее соотношение «прибыль/риск»</li>
              <li>Стабильность ежедневного P&L (выплаты и убытки)</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Строка 4 — Пошаговое масштабирование</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>При выполнении целей (≥5% месячной доходности при соблюдении риск‑параметров) капитал увеличивается на 25–50%</li>
              <li>Последующие раунды роста до $50 000–$100 000</li>
              <li>Уменьшение ограничений по позиции (до 15% от капитала)</li>
              <li>Повышение дневного лимита убытка (до 2%) и более гибкие маржинальные требования</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Строка 5 — Компенсация и мотивация</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Доля от прибыли: 50‑80%, повышается с ростом капитала под управлением</li>
              <li>Бонусы за просадку ниже 5% в течение трёх подряд месяцев</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Строка 6 — Риск‑контроль и культура дисциплины</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Ежедневные отчёты и авто‑остановки при достижении лимитов</li>
              <li>Регулярные ревью стратегий со старшими менеджерами</li>
              <li>Менторская поддержка и доступ к аналитическим инструментам</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-800">Такой многоэтапный подход обеспечивает сбалансированное сочетание возможностей роста для трейдеров и гарантии защиты капитала IKS Capital.</p>
      </section>

      {/* 11. Академия IKS Capital */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Академия IKS Capital — это центр развития профессиональных навыков для сотрудников и клиентов компании.</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Цели и задачи академии</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Формировать единые стандарты знаний и навыков внутри команды Prop IKS Capital</li>
              <li>Повышать финансовую грамотность клиентов для обоснованных инвестиционных решений</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">База знаний и контент‑платформа</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>IKS Knowledge Hub: онлайн‑библиотека стратегий, материалов, методичек и видеолекций</li>
              <li>Обновляемые каталоги: алгоритмы, обзоры рынка, инструкции по DeFi и чек‑листы риск‑менеджмента</li>
              <li>Лаборатория кейсов: разборы реальных сделок, анализ ошибок и удачных подходов</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Программа подготовки трейдеров</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Базовый курс «Мир криптовалют»</li>
              <li>Технический и фундаментальный анализ</li>
              <li>Управление рисками и психология</li>
              <li>Практические симуляции и аттестация</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Образовательный курс для инвесторов</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Трек «Финансовая грамотность»</li>
              <li>Путеводитель по портфелю: формирование, ребалансировка и хеджирование</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Методика создания и обновления материалов</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Квартальные ревизии контента</li>
              <li>Мультимедиа‑формат: видео, стримы, инфографика</li>
              <li>Менторская поддержка: персональные встречи и онлайн‑сессии</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Оценка эффективности</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>KPI по успеваемости и доходности на демо‑счетах</li>
              <li>Аналитика обратной связи и корректировка программы</li>
              <li>Пост‑челлендж мониторинг выпускников в Prop‑подразделении</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12. Футер CTA */}
      <section className="mx-auto w-full px-6">
        <div className="rounded-2xl border p-6 md:p-8 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="text-lg md:text-xl font-semibold">Готовы начать инвестировать?</div>
            <p className="text-gray-700">
              IKS Capital поможет вам достичь ваших финансовых целей через профессиональное управление цифровыми активами.
            </p>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">
            Записаться на консультацию
          </a>
        </div>
      </section>
    </div>
  );
}

