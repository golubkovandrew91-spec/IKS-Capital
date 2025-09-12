"use client";
import React from "react";

export default function SecurityPage(): React.ReactElement {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Безопасность — Приоритет № 1</h1>
        <p>Hero секция. Контент будет добавлен позже.</p>
      </section>

      {/* Диверсификация хранения (3 карточки бирж) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Диверсификация хранения</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Биржа {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Пример устойчивости биржи (4 карточки + текст) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Пример устойчивости биржи</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
        <p className="text-sm opacity-80">Текст пояснения будет добавлен позже.</p>
      </section>

      {/* Ключевые элементы безопасности (3 строки - заполнить позже) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Ключевые элементы безопасности</h2>
        <ul className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3">Элемент {i + 1}</li>
          ))}
        </ul>
      </section>

      {/* Комплексная система рисков (3 карточки с рисками) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Комплексная система рисков</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Риск {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Отчётность и прозрачность (3 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Отчётность и прозрачность</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Заключение (5 строк) */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Заключение</h2>
        <ul className="space-y-2 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>Строка {i + 1}</li>
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
