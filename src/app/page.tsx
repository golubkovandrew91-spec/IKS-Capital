"use client";
import React, { useState } from "react";
import Link from "next/link";
import HeroTitle from "@/components/HeroTitle";

export default function Home(): React.ReactElement {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  return (
    <div className="py-8 sm:py-10">
      {/* 1. Hero секция */}
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-4">
        {/* Заставка (интерактивная, на весь экран) — дизайн добавим позже */}
        <div className="pointer-events-none absolute inset-0 -z-10 select-none" aria-hidden="true" />
        <div className="space-y-3 text-center -translate-y-[10vh]">
          <HeroTitle />
          <p className="max-w-3xl">
            Дисциплинированный доступ к доходности цифровых активов с приоритетом сохранения капитала и институциональной безопасностью.
          </p>
          <div>
            <Link href="/contact" className="btn-primary">
              Начните инвестировать с IKS Capital уже сегодня
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Ключевые цифры */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Ключевые цифры</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-md border p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="text-2xl font-bold">5 лет на рынке</div>
          </div>
          <div className="rounded-md border p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="text-2xl font-bold">Доходность трейдинга &gt; 50%</div>
          </div>
          <div className="rounded-md border p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="text-2xl font-bold">Доходность портфельного управления &gt; 100%</div>
          </div>
        </div>
        <button onClick={() => setDisclaimerOpen((v) => !v)} className="text-xs underline underline-offset-4">
          Показать дисклеймер
        </button>
        {disclaimerOpen && (
          <p className="text-xs text-gray-500">
            Важное уведомление: представленные показатели за 2024 год. Историческая доходность не гарантирует будущие результаты.
          </p>
        )}
      </section>

      {/* 3. Как мы появились */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Как мы появились</h2>
        <p className="max-w-4xl">
          IKS Capital возник в 2020 году как ответ на ключевой запрос инвесторов в цифровых активах: как участвовать в росте динамично развивающегося рынка, сохраняя строгий контроль над рисками. Более четырёх лет мы формировали комплексный подход, объединив трейдинг и портфельное управление с институциональными практиками — от процедур KYC/AML до операционного контроля и регулярной отчётности.
        </p>
      </section>

      {/* 4. Философия */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Философия</h2>
        <div className="space-y-3">
          <p>
            <strong>Миссия:</strong> Сделать инвестиции в цифровые активы доступными, понятными и результативными: управляем капиталом прозрачно, дисциплинированно и с предсказуемыми процессами.
          </p>
          <p>
            <strong>Видение:</strong> Стать эталоном доверительного управления в сфере цифровых активов: продуктовые стандарты, прозрачная отчётность по запросу, безупречный риск‑менеджмент и клиентский сервис уровня Private Banking.
          </p>
          <p>
            <strong>Обязательство бренда:</strong> Мы принимаем на себя сложность криптовалютного рынка — вы получаете чёткие правила, защищённые процессы и прозрачный результат.
          </p>
        </div>
      </section>

      {/* 5. Куда направляемся */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Куда направляемся</h2>
        <p className="max-w-4xl">
          Мы системно развиваем продуктовую линейку, внедряя инновационные направления для диверсификации источников дохода и укрепления конкурентных преимуществ. Усиливаем аналитические инструменты и автоматизацию процессов, а также совершенствуем клиентский сервис через личный кабинет, уведомления, реферальную программу и отчёты в Telegram‑боте.
        </p>
        <details className="rounded-md border p-4">
          <summary className="cursor-pointer select-none font-medium">Интерактивный Roadmap на 3 года</summary>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded border p-3 text-sm">Ключевая цель/этап {i + 1}</div>
            ))}
          </div>
        </details>
      </section>

      {/* 6. Основные направления */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Основные направления</h2>
        <p className="max-w-4xl">
          Стратегия IKS Capital заключается в комплексном подходе к работе с крипто активами, объединяющий два основных направления — портфельное управление и трейдинг, которые уже доказали свою эффективность в обеспечении стабильного роста капитала и регулярного пассивного дохода, а также дополнительное - инновационные направления для технологического развития, создания долгосрочных конкурентных преимуществ и расширения возможностей получения доходности.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-md border p-4">
            <h3 className="font-medium">Портфельное управление</h3>
            <p className="mt-1 text-sm">Долгосрочная стратегия направленная на прямое владение активами с целью увеличения капитала.</p>
            <Link href="/portfolio-management" className="mt-2 inline-block text-sm underline">
              Подробнее
            </Link>
          </div>
          <div className="rounded-md border p-4">
            <h3 className="font-medium">Трейдинг</h3>
            <p className="mt-1 text-sm">Среднесрочная стратегия основанная на торговле производными инструментами для получения пассивного дохода.</p>
            <Link href="/trading" className="mt-2 inline-block text-sm underline">
              Подробнее
            </Link>
          </div>
          <div className="rounded-md border p-4">
            <h3 className="font-medium">Инновационные направления</h3>
            <p className="mt-1 text-sm">Изучение новых блокчейн‑технологий обеспечивает стратегический рост компании и формирует дополнительный поток доходов.</p>
            <Link href="/innovations" className="mt-2 inline-block text-sm underline">
              Подробнее
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Футер: заключительный CTA перед глобальным футером */}
      <section className="space-y-2">
        <p>Готовы начать инвестировать с IKS Capital? Свяжитесь с нами для получения персональной консультации.</p>
        <Link href="/contact" className="btn-primary">Связаться с нами</Link>
      </section>
    </div>
  );
}
