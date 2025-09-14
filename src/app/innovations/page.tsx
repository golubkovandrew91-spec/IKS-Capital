"use client";
import React from "react";

export default function InnovationsPage(): React.ReactElement {
  return (
    <div className="py-8">
      {/* 1. Hero секция — ИННОВАЦИОННЫЕ НАПРАВЛЕНИЯ */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-2xl">
        <div className="relative z-10 mx-auto w-full px-6 text-white space-y-4">
          <div className="text-sm uppercase tracking-wider opacity-80">ИННОВАЦИОННЫЕ НАПРАВЛЕНИЯ</div>
          <h1 className="text-3xl md:text-5xl font-semibold">Инновационные направления</h1>
          <p className="max-w-4xl text-base md:text-lg text-gray-200">
            Исследование перспективных блокчейн‑технологий для диверсификации источников дохода и подготовки к масштабированию успешных решений
          </p>
          <div className="pt-2">
            <a href="#strategic-role" className="btn-primary">
              Откройте для себя инновационные возможности с IKS Capital
            </a>
          </div>
        </div>
      </section>

      {/* 2. Стратегическая роль инновационных направлений */}
      <section id="strategic-role" className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Стратегическая роль инновационных направлений</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Инновационные направления IKS Capital представляют собой стратегически важный компонент нашей инвестиционной экосистемы, направленный на исследование и тестирование передовых блокчейн‑технологий с целью выявления новых возможностей генерации доходности. Выделяя до 10% от общего капитала на данное направление, мы обеспечиваем баланс между консервативными подходами основных продуктов и инновационным потенциалом развивающихся технологий.
          </p>
          <p>
            Ограничение доли капитала в 10% позволяет нам исследовать высокорискованные, но потенциально высокодоходные возможности без угрозы для основной стратегии компании. Данный подход создаёт ценность как для компании через расширение продуктовой линейки и технологических компетенций, так и для инвесторов через доступ к инновационным инструментам, которые могут существенно превысить доходность традиционных активов.
          </p>
        </div>
      </section>

      {/* 3. Определения и классификация ключевых инструментов */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Определения и классификация ключевых инструментов</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Майнинг",
            "Участие в ICO/IDO/IEO/Public sale",
            "Airdrop‑стратегии",
            "NFT‑инвестиции",
            "Токенизация реальных активов (RWA)",
            "Внедрение искусственного интеллекта",
          ].map((title, i) => (
            <div key={i} className="rounded-xl border p-6 bg-white">
              <div className="text-lg font-semibold">{title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ключевые особенности и возможности направления */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ключевые особенности и возможности направления</h2>
        <div className="text-gray-700">Системный подход к управлению инновационными инвестициями с контролем рисков</div>
        <ul className="space-y-4">
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Ограничения по доле капитала</div>
            <p className="mt-2 text-gray-700">
              Жёсткий лимит в 10% от общего управляемого капитала обеспечивает баланс между инновационным потенциалом и консервативным подходом IKS Capital. Это позволяет:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Исследовать высокорискованные возможности без угрозы основному капиталу</li>
              <li>Тестировать новые инструменты в контролируемой среде</li>
              <li>Постепенно масштабировать успешные стратегии в основные продукты</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Многоэтапная методология отбора</div>
            <div className="mt-2 text-gray-700">Четырёхуровневый процесс оценки проектов:</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Технический аудит: Анализ кода, архитектуры, безопасности смарт‑контрактов</li>
              <li>Фундаментальный анализ: Оценка команды, бизнес‑модели, конкурентных преимуществ</li>
              <li>Рыночный анализ: Изучение TAM, конкуренции, потенциала роста</li>
              <li>Риск‑оценка: Количественная оценка максимальной просадки и сценарного анализа</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Интеграция успешных кейсов в основные продукты</div>
            <div className="mt-2 text-gray-700">Механизм масштабирования включает:</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Тестирование новых инструментов в течение 6–12 месяцев</li>
              <li>При достижении стабильной доходности более 15% годовых — перевод в основной портфель</li>
              <li>Создание отдельных продуктовых линеек для клиентов с высокой толерантностью к риску</li>
              <li>Образовательные программы для клиентов по новым возможностям</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 5. Практический пример распределения инновационного бюджета */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Практический пример распределения инновационного бюджета в размере $100,000</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Карточка 1 — RWA */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Токенизация RWA</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Бюджет: $25,000 (25%)</li>
              <li>Ожидаемая доходность: 8–15% годовых</li>
              <li>Риск потерь: до 15%</li>
              <li>Стратегия: $10,000 в токенизированные акции, $5,000 в казначейские облигации через Ondo Finance, $5,000 в коммерческую недвижимость, $5,000 в сырьевые товары</li>
              <li>Горизонт: 12–36 месяцев</li>
            </ul>
          </div>
          {/* Карточка 2 — ICO */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">ICO/IEO/IDO участие</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Бюджет: $20,000 (20%)</li>
              <li>Ожидаемая доходность: 50–200% годовых</li>
              <li>Риск потерь: до 80%</li>
              <li>Стратегия: участие в 3–5 проектах по $4,000–6,000, предпочтение IEO на ведущих биржах</li>
              <li>Горизонт: 6–18 месяцев</li>
            </ul>
          </div>
          {/* Карточка 3 — Майнинг */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Майнинг криптовалют</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Бюджет: $15,000 (15%)</li>
              <li>Ожидаемая доходность: 12–18% годовых</li>
              <li>Риск потерь: до 25%</li>
              <li>Стратегия: покупка ASIC‑оборудования для облачного майнинга с дешёвой электроэнергией</li>
              <li>Горизонт: 24–48 месяцев</li>
            </ul>
          </div>
          {/* Карточка 4 — NFT */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">NFT‑инвестиции</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Бюджет: $15,000 (10%)</li>
              <li>Ожидаемая доходность: от –20% до +150%</li>
              <li>Риск потерь: до 70%</li>
              <li>Стратегия: $4,000 в Telegram‑стикеры, $3,000 в blue‑chip коллекции, $3,000 в игровые NFT и метавселенные</li>
              <li>Горизонт: 6–24 месяца</li>
            </ul>
          </div>
          {/* Карточка 5 — AI */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Внедрение искусственного интеллекта</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Бюджет: $15,000 (10%)</li>
              <li>Ожидаемая доходность: от –10% до +120%</li>
              <li>Риск потерь: до 60%</li>
              <li>Стратегия: AI/ML‑алгоритмы для оптимизации доходности и управления рисками</li>
              <li>Горизонт: 12–36 месяцев</li>
            </ul>
          </div>
          {/* Карточка 6 — Airdrop */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Airdrop‑стратегии</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Бюджет: $10,000 (10%)</li>
              <li>Ожидаемая доходность: 100–300% годовых</li>
              <li>Риск потерь: до 50%</li>
              <li>Стратегия: участие в 5–10 проектах L2 и DeFi для максимизации количества распределений</li>
              <li>Горизонт: 6–18 месяцев</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Процесс пилотирования и масштабирования */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Процесс пилотирования и масштабирования</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Фаза 1: Пилотное тестирование (3–6 месяцев)</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Запуск с 5% от планируемого бюджета ($5,000)</li>
              <li>Тестирование каждого инструмента в минимальном объёме</li>
              <li>Сбор метрик производительности и анализ рисков</li>
              <li>Создание операционных процедур и чек‑листов</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Фаза 2: Постепенное масштабирование (6–12 месяцев)</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Увеличение бюджета до полных 10% при положительных результатах</li>
              <li>Автоматизация рутинных операций через API и боты</li>
              <li>Найм специализированного персонала для управления инновационными направлениями</li>
              <li>Интеграция с основными системами риск‑менеджмента</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Фаза 3: Полномасштабные операции (12+ месяцев)</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Запуск отдельных продуктовых линеек для клиентов</li>
              <li>Создание собственных аналитических инструментов</li>
              <li>Развитие партнёрских отношений с ведущими проектами</li>
              <li>Исследование возможностей выхода на институциональный рынок</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Порядок регулярного анализа и отчётности */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Порядок регулярного анализа и отчётности</h2>
        <ul className="space-y-4">
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Еженедельная отчётность</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Мониторинг всех активных позиций и их performance</li>
              <li>Обновление списка потенциальных возможностей (deal flow)</li>
              <li>Анализ новых трендов и технологических разработок</li>
              <li>Оценка соблюдения риск‑лимитов и процедур</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Ежемесячная аналитика</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Детальный анализ доходности по каждому направлению</li>
              <li>Ребалансировка портфеля согласно изменившимся условиям</li>
              <li>Обновление прогнозов и сценариев развития</li>
              <li>Подготовка рекомендаций по корректировке стратегии</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Квартальные стратегические обзоры</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Комплексная оценка эффективности всего направления</li>
              <li>Анализ успешных и неуспешных кейсов с извлечением уроков</li>
              <li>Обновление методологии отбора и оценки проектов</li>
              <li>Планирование развития на следующий квартал</li>
            </ul>
          </li>
          <li className="rounded-xl border p-5 bg-white">
            <div className="font-semibold">Годовая стратегическая сессия</div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Полный пересмотр стратегии инновационных направлений</li>
              <li>Анализ возможностей интеграции успешных инструментов в основные продукты</li>
              <li>Планирование масштабирования и развития команды</li>
              <li>Обновление технологической архитектуры и операционных процессов</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-800">
          Инновационные направления IKS Capital представляют собой системный подход к исследованию и внедрению передовых блокчейн‑технологий, обеспечивающий компании конкурентные преимущества и дополнительные источники доходности при строгом контроле рисков и соблюдении принципов Invest — Keep — Secure.
        </p>
      </section>

      {/* 8. Футер CTA */}
      <section className="mx-auto w-full px-6">
        <div className="rounded-2xl border p-6 md:p-8 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="text-lg md:text-xl font-semibold">Откройте для себя новые возможности инвестирования с IKS Capital</div>
            <p className="text-gray-700">Мы поможем вам использовать потенциал передовых технологий для роста вашего капитала.</p>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">
            Записаться на консультацию
          </a>
        </div>
      </section>
    </div>
  );
}

