"use client";
import React from "react";

export default function InnovationsPage(): React.ReactElement {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Инновационные направления</h1>
        <p>Hero секция. Контент будет добавлен позже.</p>
      </section>

      {/* Стратегическая роль */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Стратегическая роль</h2>
        <p>Текст-заглушка.</p>
      </section>

      {/* Определения и классификация (6 карточек) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Определения и классификация</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Ключевые особенности (3 строки с подпунктами) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Ключевые особенности</h2>
        <ul className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3">
              Особенность {i + 1}
              <ul className="ml-5 list-disc text-sm opacity-80">
                <li>Подпункт А</li>
                <li>Подпункт Б</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Практический пример распределения бюджета (6 карточек) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Пример распределения бюджета</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Сектор {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Процесс пилотирования (3 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Процесс пилотирования</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Этап {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Порядок анализа и отчётности (4 строки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Порядок анализа и отчётности</h2>
        <ul className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3">Шаг {i + 1}</li>
          ))}
        </ul>
      </section>

      {/* Футер CTA */}
      <section>
        <a href="/contact" className="btn-primary">Связаться с нами</a>
      </section>
    </div>
  );
}
