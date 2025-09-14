"use client";
import React from "react";

export default function SecurityPage(): React.ReactElement {
  return (
    <div className="py-8">
      {/* 1. Hero — Приоритет номер 1 */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-2xl">
        {/* Фоновая заставка больше не нужна — используем глобальные градиенты */}
        <div className="relative z-10 mx-auto w-full px-6 text-white space-y-3">
          <div className="text-sm uppercase tracking-wider opacity-80">Приоритет номер 1</div>
          <h1 className="text-3xl md:text-5xl font-semibold">Приоритет N 1</h1>
          <p className="max-w-3xl text-base md:text-lg text-gray-200">Сохранность капитала инвесторов превыше всего</p>
        </div>
      </section>

      {/* 2. Диверсификация хранения средств */}
      <section className="mx-auto w-full space-y-6 px-6">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-semibold">Диверсификация хранения средств</h2>
          <div className="text-gray-700">Распределение по биржам</div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {["Binance", "Bybit", "Bitget"].map((ex, i) => (
            <div key={i} className="rounded-xl border p-6 bg-white text-center">
              <div className="text-lg font-semibold">{ex}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border p-6 bg-white">
          <div className="font-semibold">Критерии выбора бирж:</div>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            <li>Лицензирование в уважаемых юрисдикциях</li>
            <li>Наличие фондов страхования пользователей</li>
            <li>Многолетняя репутация без крупных инцидентов</li>
          </ul>
        </div>
      </section>

      {/* 3. Пример устойчивости биржи при кризисных событиях */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Пример устойчивости биржи при кризисных событиях</h2>
        <p className="text-gray-700">
          В 2024 году Bybit стала мишенью хакерской атаки: злоумышленники получили доступ к одному из горячих кошельков биржи. Несмотря на это, баланс пользователей остался полностью неизменным — ни один аккаунт не понёс потерь. Такое устойчивое положение обеспечивается следующими механизмами:
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Страховой фонд</div>
            <p className="mt-2 text-gray-700 text-sm">
              Bybit формирует страховой резерв, пополняемый за счёт части комиссий от торгов. При любых внештатных списаниях из горячих кошельков компенсации покрываются именно из этого фонда, а не из средств клиентов.
            </p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Разделение активов (segregated reserves)</div>
            <p className="mt-2 text-gray-700 text-sm">
              Большая часть криптовалют хранится в мультиподписных холодных кошельках, доступ к которым возможен лишь после одобрения нескольких ключевых держателей. Только незначительный объём средств (не более 5%) держится в горячих кошельках для обеспечения быстрой обработки клиентских ордеров.
            </p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Резервное покрытие 1:1</div>
            <p className="mt-2 text-gray-700 text-sm">
              Bybit регулярно публикует результаты внешнего аудита, подтверждающие, что суммарные активы биржи на 100% покрывают обязательства перед пользователями. Это означает, что даже при полной потере горячих кошельков платформа способна восстановить баланс за счёт резервов в холодных хранилищах.
            </p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Надёжная система контроля рисков</div>
            <p className="mt-2 text-gray-700 text-sm">
              Автоматизированные мониторинговые системы отслеживают аномалии в движении средств и незамедлительно инициируют аварийные протоколы (временная заморозка транзакций, переход на ручной пересмотр операций).
            </p>
          </div>
        </div>
        <p className="text-gray-800">
          В совокупности эти меры позволяют Bybit оставаться работоспособной и гарантировать сохранность средств клиентов даже при серьёзных инцидентах, что делает её надёжным звеном в схеме диверсификации хранения.
        </p>
      </section>

      {/* 4. Ключевые элементы безопасности (заполняются позже) */}
      <section className="mx-auto w-full space-y-4 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Ключевые элементы безопасности</h2>
        <ul className="space-y-2">
          <li className="rounded-xl border p-4 bg-white">Строка 1: (наполнение будет добавлено позже)</li>
          <li className="rounded-xl border p-4 bg-white">Строка 2: (наполнение будет добавлено позже)</li>
          <li className="rounded-xl border p-4 bg-white">Строка 3: (наполнение будет добавлено позже)</li>
        </ul>
      </section>

      {/* 5. Комплексная система минимизации рисков */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Комплексная система минимизации рисков</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Рыночные риски */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Рыночные риски</div>
            <div className="mt-3 text-sm font-medium">Риск: Общее падение криптовалютного рынка</div>
            <ul className="mt-1 list-disc list-inside text-gray-700 text-sm">
              <li>Хеджирование через пут‑опционы</li>
              <li>Диверсификация в стейблкоины</li>
              <li>Активное использование коротких позиций</li>
            </ul>
            <div className="mt-3 text-sm font-medium">Риск: Низкая корреляция между активами</div>
            <ul className="mt-1 list-disc list-inside text-gray-700 text-sm">
              <li>Регулярный анализ корреляций</li>
              <li>Ребалансировка портфеля</li>
              <li>Использование различных типов активов</li>
            </ul>
          </div>
          {/* Технологические риски */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Технологические риски</div>
            <div className="mt-3 text-sm font-medium">Риск: Взлом DeFi‑протоколов</div>
            <ul className="mt-1 list-disc list-inside text-gray-700 text-sm">
              <li>Использование только проверенных протоколов</li>
              <li>Лимитирование экспозиции на протокол</li>
              <li>Страхование через Nexus Mutual</li>
            </ul>
            <div className="mt-3 text-sm font-medium">Риск: Ошибки в смарт‑контрактах</div>
            <ul className="mt-1 list-disc list-inside text-gray-700 text-sm">
              <li>Тщательный анализ кода перед использованием</li>
              <li>Постепенное увеличение экспозиции</li>
              <li>Мониторинг сообщества и экспертных мнений</li>
            </ul>
          </div>
          {/* Операционные риски */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Операционные риски</div>
            <div className="mt-3 text-sm font-medium">Риск: Человеческий фактор в трейдинге</div>
            <ul className="mt-1 list-disc list-inside text-gray-700 text-sm">
              <li>Строгие риск‑менеджмент процедуры</li>
              <li>Автоматизация через алгоритмы</li>
              <li>Постоянное обучение персонала</li>
            </ul>
            <div className="mt-3 text-sm font-medium">Риск: Регуляторные изменения</div>
            <ul className="mt-1 list-disc list-inside text-gray-700 text-sm">
              <li>Мониторинг правовых изменений</li>
              <li>Диверсификация по юрисдикциям</li>
              <li>Готовность к быстрой адаптации</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Отчётность и прозрачность */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Полная прозрачность перед инвесторами</h2>
        <div className="text-gray-700">Регулярная отчётность</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Ежемесячные отчёты</div>
            <ul className="mt-2 list-disc list-inside text-gray-700 text-sm">
              <li>Результаты по каждому направлению</li>
              <li>Анализ рыночных условий и принятых решений</li>
              <li>Планы на следующий месяц</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Квартальные отчёты</div>
            <ul className="mt-2 list-disc list-inside text-gray-700 text-sm">
              <li>Комплексный анализ результатов</li>
              <li>Корректировка стратегий на основе результатов</li>
              <li>Выплата процентов инвесторам</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Прозрачность операций</div>
            <div className="mt-1 text-sm text-gray-600">Доступ к информации:</div>
            <ul className="mt-1 list-disc list-inside text-gray-700 text-sm">
              <li>Онлайн‑дашборд с текущим состоянием портфеля</li>
              <li>История всех транзакций и операций</li>
              <li>Реальный P&L по всем стратегиям</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Заключение */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">IKS Capital — Ваш надёжный партнёр в децентрализованной экономике</h2>
        <p className="text-gray-700">
          Комплексная стратегия IKS Capital представляет собой сбалансированный подход к управлению криптоактивами, который сочетает в себе:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Безопасность превыше всего — многоуровневая защита средств инвесторов</li>
          <li>Диверсификацию рисков — распределение между различными стратегиями и активами</li>
          <li>Синергию направлений — взаимодополнение трейдинга, портфельного управления и инноваций</li>
          <li>Постоянную адаптацию — готовность к изменяющимся рыночным условиям</li>
          <li>Прозрачность операций — полная отчётность перед инвесторами</li>
        </ul>
        <p className="text-gray-800">
          Наша цель — не просто сохранить капитал инвесторов, но и обеспечить его устойчивый рост в долгосрочной перспективе через применение передовых решений и институциональных стандартов управления.
        </p>
      </section>

      {/* 8. Футер CTA */}
      <section className="mx-auto w-full px-6">
        <div className="rounded-2xl border p-6 md:p-8 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="text-lg md:text-xl font-semibold">IKS Capital — ваш щит и проводник в мире цифровых активов</div>
            <p className="text-gray-700">Мы обеспечим сохранность капитала и создадим условия для его роста.</p>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">
            Записаться на консультацию
          </a>
        </div>
      </section>
    </div>
  );
}

