"use client";
import React from "react";

export default function StrategyPage(): React.ReactElement {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Стратегия управления капиталом</h1>
        <p>Hero секция. Контент будет добавлен позже.</p>
      </section>

      {/* Принцип синергии (распределение капитала) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Принцип синергии</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Сегмент {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Механизм взаимодействия (4 строки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Механизм взаимодействия</h2>
        <ul className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3">Строка {i + 1}</li>
          ))}
        </ul>
      </section>

      {/* Взаимосвязь стратегий (3 сценария-карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Взаимосвязь стратегий</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Сценарий {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Практический пример расчёта (3 строки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Практический пример расчёта</h2>
        <ul className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3">Шаг {i + 1}</li>
          ))}
        </ul>
      </section>

      {/* Заключение */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Заключение</h2>
        <p>Текст-заглушка. Контент будет добавлен позже.</p>
      </section>

      {/* Футер CTA */}
      <section>
        <a href="/contact" className="btn-primary">Связаться с нами</a>
      </section>
    </div>
  );
}
