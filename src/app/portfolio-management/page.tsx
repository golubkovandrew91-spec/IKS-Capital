"use client";
import React from "react";

export default function PortfolioManagementPage(): React.ReactElement {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Портфельное управление</h1>
        <p>Hero секция. Контент будет добавлен позже.</p>
      </section>

      {/* Анимированные карточки (4 шт.) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Основной блок</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md border p-4 transition hover:-translate-y-1 hover:shadow-sm"
            >
              Карточка {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Комплексная инвестиционная стратегия (4 пункта) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Комплексная инвестиционная стратегия</h2>
        <ul className="list-disc list-inside space-y-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i}>Пункт {i + 1}</li>
          ))}
        </ul>
      </section>

      {/* Методы приобретения активов (2 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Методы приобретения активов</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Варианты взаимодействия с активами (2 анимированные карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Варианты взаимодействия с активами</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md border p-4 transition hover:scale-[1.02]"
            >
              Анимация {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Механизм работы DeFi-инструментов (3 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Механизм работы DeFi-инструментов</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Практический пример мультипликации прибыли (поэтапная анимация) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Пример мультипликации прибыли</h2>
        <ol className="list-decimal list-inside space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3 hover:bg-gray-50">Этап {i + 1}</li>
          ))}
        </ol>
      </section>

      {/* Заключение */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Заключение</h2>
        <p>Текст-заглушка. Контент будет добавлен позже.</p>
      </section>

      {/* Футер CTA (глобальный Footer содержит форму) */}
      <section className="space-y-2">
        <a href="/contact" className="btn-primary">Связаться с нами</a>
      </section>
    </div>
  );
}
