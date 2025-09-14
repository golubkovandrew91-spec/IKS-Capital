"use client";
import React from "react";

export default function StrategyPage(): React.ReactElement {
  return (
    <div className="py-8">
      {/* 1. Hero секция — Стратегия управления капиталом */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-2xl">
        <div className="relative z-10 mx-auto w-full px-6 text-white space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">Стратегия управления капиталом IKS Capital</h1>
          <div className="pt-2">
            <a href="#synergy" className="btn-primary">
              Узнайте, как наша стратегия помогает инвесторам достигать стабильной доходности при контролируемых рисках
            </a>
          </div>
        </div>
      </section>

      {/* 2. Принцип синергии всех направлений */}
      <section id="synergy" className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Принцип синергии всех направлений</h2>
        <p className="text-gray-700">
          Модель IKS Capital предполагает инвестирование средств не в отдельные направления, а в единый капитал компании для максимизации эффективности и минимизации рисков.
        </p>
        <div className="rounded-xl border p-6 bg-white">
          <div className="text-lg font-semibold">Распределение капитала:</div>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            <li>40% — Трейдинг (фьючерсные операции)</li>
            <li>50% — Портфельное управление (спотовые активы + DeFi)</li>
            <li>10% — Инновационные технологии (исследования и тестирование)</li>
          </ul>
        </div>
      </section>

      {/* 3. Механизм взаимодействия стратегий */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Механизм взаимодействия стратегий</h2>
        <ul className="space-y-4">
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Компенсация просадок</div>
            <p className="mt-1 text-gray-700">
              Когда спотовый портфель показывает временную просадку, трейдинговое подразделение открывает короткие позиции по фьючерсам, компенсируя убытки прибылью от падающих цен.
            </p>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Оптимизация точек входа</div>
            <p className="mt-1 text-gray-700">
              Прибыль от трейдинга используется для дополнительной покупки активов в спотовый портфель по более выгодным ценам, чем первоначальная покупка.
            </p>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">DeFi как дополнительный источник дохода</div>
            <p className="mt-1 text-gray-700">
              Активы спотового портфеля размещаются в DeFi‑протоколах для получения yield независимо от направления рынка.
            </p>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Инновационные направления как инструмент диверсификации</div>
            <p className="mt-1 text-gray-700">
              Средства направляются в майнинг криптовалют с доходностью 5–20% годовых, вне зависимости от фазы рынка. Прибыль направляется в трейдинг и спотовый портфель, повышая общую эффективность стратегии.
            </p>
          </li>
        </ul>
      </section>

      {/* 4. Взаимосвязь стратегий и синергетические эффекты (сценарии) */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Взаимосвязь стратегий и синергетические эффекты</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Сценарий 1: Падение крипторынка</div>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              <li>Спотовый портфель показывает просадку</li>
              <li>Трейдинг переходит в короткие позиции по фьючерсам</li>
              <li>Прибыль от фьючерсов компенсирует спотовые убытки</li>
              <li>DeFi продолжает генерировать доход от процентов</li>
              <li>Airdrop: продажа полученных токенов направляется на увеличение активов в спотовом портфеле</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Сценарий 2: Рост крипторынка</div>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              <li>Спотовый портфель показывает значительную прибыль</li>
              <li>Трейдинг использует длинные позиции для усиления эффекта</li>
              <li>DeFi максимизирует доходность через ликвидный стейкинг</li>
              <li>Часть прибыли фиксируется для новых инвестиций</li>
              <li>Доход от продажи полученных на IEO токенов значительно превышает изначальные расходы</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Сценарий 3: Боковое движение</div>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              <li>Спотовый портфель остаётся стабильным</li>
              <li>Трейдинг зарабатывает на локальных колебаниях</li>
              <li>DeFi обеспечивает стабильный процентный доход</li>
              <li>Накопление позиции в ожидании следующего трендового движения</li>
              <li>Инвестиции в токенизированные акции на фондовом рынке США приносят доход, несмотря на боковое движение крипторынка</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Практический пример расчёта */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Практический пример расчёта</h2>
        <ul className="space-y-3">
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Пример 1</div>
            <p className="mt-1 text-gray-700">Распределение капитала при агрессивной стратегии с упором на трейдинг и DeFi.</p>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Пример 2</div>
            <p className="mt-1 text-gray-700">Сбалансированная стратегия с равномерным распределением между направлениями.</p>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Пример 3</div>
            <p className="mt-1 text-gray-700">Консервативная стратегия с приоритетом портфельного управления и минимальной долей инноваций.</p>
          </li>
        </ul>
      </section>

      {/* 6. Заключение */}
      <section className="mx-auto w-full space-y-4 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Заключение</h2>
        <p className="text-gray-700">
          Стратегия управления капиталом IKS Capital — это комплексная модель, объединяющая трейдинг, портфельное управление и инновационные направления в единую экосистему. Такой подход позволяет нам эффективно использовать сильные стороны каждого направления, компенсировать риски и обеспечивать стабильную доходность в различных рыночных условиях. Благодаря синергии стратегий и строгому риск‑менеджменту мы создаём для инвесторов прозрачную, предсказуемую и устойчивую модель роста капитала.
        </p>
      </section>

      {/* 7. Футер CTA */}
      <section className="mx-auto w-full px-6">
        <div className="rounded-2xl border p-6 md:p-8 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="text-lg md:text-xl font-semibold">Начните путь к финансовой стабильности и росту с IKS Capital</div>
            <p className="text-gray-700">Мы поможем вам реализовать потенциал вашего капитала с максимальной эффективностью.</p>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">
            Записаться на консультацию
          </a>
        </div>
      </section>
    </div>
  );
}

