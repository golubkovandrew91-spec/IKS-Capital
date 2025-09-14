"use client";
import React from "react";

export default function PortfolioManagementPage(): React.ReactElement {
  return (
    <div className="py-8">
      {/* 1. Hero секция */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-2xl">
        {/* Фоновая заставка больше не нужна — используем глобальные градиенты */}
        {/* Контент */}
        <div className="relative z-10 mx-auto w-full px-6 text-white space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold">Портфельное управление IKS Capital</h1>
          <p className="max-w-3xl text-base md:text-lg text-gray-200">
            Прямое владение цифровыми активами. Максимальный контроль и безопасность
          </p>
          <div className="pt-2">
            <a href="#how-we-manage" className="btn-primary">
              Узнайте, как мы управляем портфелями клиентов
            </a>
          </div>
        </div>
      </section>

      {/* 2. Портфельное управление: текст + 4 карточки */}
      <section id="how-we-manage" className="mx-auto w-full space-y-8 px-6">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Портфельное управление</h2>
          <p className="text-gray-700">
            Спотовое инвестирование — это стратегия приобретения реальных цифровых активов на спотовом рынке с целью их долгосрочного удержания и роста стоимости. Она предполагает прямое владение активами без использования кредитного плеча, что обеспечивает высокий уровень контроля и безопасности вложенных средств.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Полноценное распоряжение активами",
              text: "переводить их на другие кошельки, использовать в качестве обеспечения, продавать",
            },
            {
              title: "Максимальная защита от взлома",
              text: "за счёт офлайн‑хранения",
            },
            {
              title: "Полный контроль инвестора",
              text: "над активами с доступом только у владельца",
            },
            {
              title: "Дополнительный доход через DeFi",
              text: "участие в DeFi‑протоколах",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-xl border p-5 transition hover:-translate-y-1 hover:shadow-md bg-white"
            >
              <div className="text-base font-semibold">{c.title}</div>
              <p className="mt-1 text-sm text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Комплексная инвестиционная стратегия */}
      <section className="mx-auto w-full space-y-6 px-6">
        <div className="space-y-2">
          <div className="text-sm uppercase tracking-wider text-gray-500">2.1 Комплексная инвестиционная стратегия</div>
          <h3 className="text-2xl md:text-3xl font-semibold">Системный подход к формированию спотового портфеля</h3>
          <p className="text-gray-700">
            IKS Capital использует комплексный подход к формированию и управлению спотовым портфелем, который включает четыре ключевых компонента:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Фундаментальный анализ */}
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-lg font-semibold">Фундаментальный анализ</div>
            <div className="mt-1 text-sm text-gray-600">Оценка ключевых параметров актива:</div>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
              <li>Оценка команды разработчиков и их опыта</li>
              <li>Анализ технологических решений и инноваций</li>
              <li>Исследование рыночного потенциала и конкурентных преимуществ</li>
              <li>Изучение токеномики и экономической модели проекта</li>
            </ul>
          </div>
          {/* Секторальная диверсификация */}
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-lg font-semibold">Секторальная диверсификация</div>
            <p className="mt-2 text-gray-700">
              Распределение капитала между различными сегментами крипторынка (инфраструктурные проекты, DeFi, Layer 1 и Layer 2, стейблкоины и др.) для снижения рисков и повышения устойчивости портфеля.
            </p>
          </div>
          {/* Ребалансировка портфеля */}
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-lg font-semibold">Ребалансировка портфеля</div>
            <p className="mt-2 text-gray-700">
              Периодический пересмотр и корректировка долей активов в зависимости от рыночной конъюнктуры, чтобы поддерживать оптимальную структуру, максимизировать доходность и снизить риски.
            </p>
          </div>
          {/* Хеджирование */}
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-lg font-semibold">Хеджирование</div>
            <p className="mt-2 text-gray-700">
              Использование инструментов защиты капитала, включая покупку пут‑опционов и другие стратегии, позволяющие минимизировать убытки при падении рынка.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Методы приобретения активов */}
      <section className="mx-auto w-full space-y-6 px-6">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-semibold">Методы приобретения активов</h3>
          <p className="text-gray-700">Оптимизация точек входа для максимальной эффективности</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Карточка 1 */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Покупка по ключевым ценовым уровням</div>
            <p className="mt-2 text-gray-700">
              Вход в актив при достижении заранее определённых зон стоимости, что помогает оптимизировать точку входа и снизить риск переплаты.
            </p>
            <div className="mt-3 text-sm font-medium">Технический анализ включает:</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Проведение технического и фундаментального анализа</li>
              <li>Определение ключевых уровней</li>
              <li>Анализ исторических данных о ценах</li>
              <li>Ожидание коррекций для оптимальных точек входа</li>
            </ul>
          </div>
          {/* Карточка 2 */}
          <div className="rounded-xl border p-6 bg-white">
            <div className="text-lg font-semibold">Стратегия усреднения стоимости (DCA)</div>
            <p className="mt-2 text-gray-700">
              Равномерное распределение покупок во времени для сглаживания влияния краткосрочной волатильности и снижения средней цены входа.
            </p>
            <div className="mt-3 text-sm font-medium">Преимущества DCA стратегии:</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Снижение влияния краткосрочной волатильности</li>
              <li>Усреднение цены входа в позицию</li>
              <li>Постепенное наращивание позиций в перспективных активах</li>
              <li>Психологическая комфортность для инвестора</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-800">
          Такой подход обеспечивает сбалансированный рост капитала с контролем рисков и высокой степенью защиты инвестиций.
        </p>
      </section>

      {/* 5. Варианты взаимодействия с активами */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">
          В рамках портфельного управления IKS Capital предлагает инвесторам два варианта взаимодействия с активами:
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Карточка 1 */}
          <div className="rounded-xl border p-6 bg-white transition hover:-translate-y-1 hover:shadow-md">
            <div className="text-lg font-semibold">Хранение на собственном кошельке инвестора</div>
            <div className="mt-1 text-sm text-gray-600">Максимальная защита и полный контроль</div>
            <p className="mt-3 text-gray-700">
              Инвестор получает криптоактивы напрямую на свой личный холодный кошелёк — это может быть аппаратное устройство или специализированное ПО, которое хранит приватные ключи в режиме офлайн. Такой способ обеспечивает максимальную защиту от взлома, так как кошелёк не подключён к интернету. Доступ к средствам есть только у владельца. При таком подходе инвестор сохраняет полный контроль над активами и может распоряжаться ими по своему усмотрению, получая при этом консультации и рекомендации от команды IKS Capital.
            </p>
            <div className="mt-3 text-sm font-medium">Преимущества:</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Максимальная защита от взломов бирж</li>
              <li>Полный контроль инвестора над активами</li>
              <li>Консультационная поддержка от IKS Capital</li>
            </ul>
          </div>
          {/* Карточка 2 */}
          <div className="rounded-xl border p-6 bg-white transition hover:-translate-y-1 hover:shadow-md">
            <div className="text-lg font-semibold">Управление активами командой IKS Capital для увеличения доходности</div>
            <div className="mt-1 text-sm text-gray-600">Активное увеличение прибыли через DeFi</div>
            <p className="mt-3 text-gray-700">
              Второй вариант позволяет увеличить прибыль за счёт активного использования DeFi‑инструментов, однако стоит учесть, что увеличиваются и риски. Ключевое преимущество — доход генерируется в любых рыночных условиях: при падении, росте или боковом движении.
            </p>
            <div className="mt-3 text-sm font-medium">Преимущества активного управления:</div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
              <li>Генерация дополнительного дохода в любых рыночных условиях</li>
              <li>Профессиональное управление и мониторинг</li>
              <li>Возможность кратного увеличения прибыли</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Механизм работы DeFi‑инструментов */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Механизм работы DeFi‑инструментов</h3>
        <div className="space-y-3">
          <div className="text-sm text-gray-600">Как генерируется дополнительная доходность</div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>При размещении активов в DeFi‑инструментах инвестор получает вознаграждение в виде базового актива или токенов наград</li>
            <li>Со временем увеличивается количество монет на балансе инвестора</li>
            <li>Когда рынок переходит в фазу роста, инвестор владеет уже большим объёмом токенов, чем изначально купил, и рост их цены умножает прибыль в несколько раз</li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm text-gray-600">Основные DeFi‑инструменты, используемые командой:</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Карточка 1 — Ликвидный стейкинг, рестейкинг */}
            <div className="rounded-xl border p-5 bg-white">
              <div className="text-base font-semibold">Ликвидный стейкинг, рестейкинг — 2,7‑10% годовых</div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Получение производных токенов (stETH, bbSOl)</li>
                <li>Возможность использования в других протоколах</li>
                <li>Непрерывная генерация дохода</li>
              </ul>
            </div>
            {/* Карточка 2 — Пулы ликвидности */}
            <div className="rounded-xl border p-5 bg-white">
              <div className="text-base font-semibold">Пулы ликвидности — 4‑30% годовых</div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Предоставление пар токенов в DEX</li>
                <li>Получение комиссий от торговли</li>
                <li>Дополнительные вознаграждения в токенах протокола</li>
              </ul>
            </div>
            {/* Карточка 3 — Лендинг */}
            <div className="rounded-xl border p-5 bg-white">
              <div className="text-base font-semibold">Лендинг — 4‑6% годовых</div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Размещение активов на платформах кредитования</li>
                <li>Получение процентов от заёмщиков</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Практический пример мультипликации прибыли */}
      <section className="mx-auto w-full space-y-6 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Практический пример мультипликации прибыли</h3>
        <div className="text-gray-700">Увеличение доходности на 30-50% через DeFi</div>
        <div className="space-y-4">
          <div className="rounded-xl border p-5 bg-white">
            <div className="font-medium">Базовый сценарий</div>
            <p className="mt-1 text-gray-700">
              Допустим, инвестор разместил $100,000 в ETH. При простом хранении он получает только рост цены актива.
            </p>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <div className="font-medium">При использовании DeFi-стратегий</div>
            <ol className="mt-2 list-decimal list-inside space-y-2 text-gray-700">
              <li>Шаг 1: Ликвидный стейкинг ETH → получение stETH + 2,7% годовых в ETH</li>
              <li>Шаг 2: Использование stETH в пуле ликвидности → дополнительно 5-15% годовых в токенах вознаграждения</li>
              <li>Шаг 3: Стейкинг полученных токенов вознаграждения → еще 6-15% годовых в зависимости от протокола</li>
            </ol>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <div className="font-medium">Итоговый результат</div>
            <p className="mt-1 text-gray-700">
              Вместо 1,000 ETH инвестор через год имеет 1,150-1,250 ETH. Когда ETH вырастет в цене на 100%, прибыль составит не $100,000, а $130,000-150,000+, то есть на 30-50% больше.
            </p>
            <div className="mt-3 text-sm text-gray-600">Математика мультипликации:</div>
            <p className="text-gray-700">1,197 ETH через год вместо 1,000 ETH. При росте ETH на 100% прибыль составит $139,400 вместо $100,000.</p>
          </div>
        </div>
      </section>

      {/* 8. Заключение по портфельному управлению */}
      <section className="mx-auto w-full space-y-4 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Заключение по портфельному управлению</h3>
        <p className="text-gray-700">
          Портфельное управление в IKS Capital — это сочетание стратегического подхода, институциональных стандартов и современных инструментов для максимизации доходности при контроле рисков. Мы предоставляем инвесторам прозрачные условия, гибкость в выборе способов взаимодействия с активами и доступ к передовым DeFi‑решениям. Такой подход позволяет не только сохранять капитал, но и приумножать его в условиях динамично развивающегося рынка цифровых активов.
        </p>
      </section>

      {/* 9. Футер — заключительный CTA */}
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

