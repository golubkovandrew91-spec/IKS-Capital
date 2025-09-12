"use client";
import React, { useState } from "react";

function Dropdown({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md border">
      <button onClick={() => setOpen((v) => !v)} className="w-full px-4 py-2 text-left font-medium">
        {title}
      </button>
      {open && <div className="border-t px-4 py-3 text-sm opacity-80">Контент будет добавлен позже.</div>}
    </div>
  );
}

export default function TradingPage(): React.ReactElement {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Трейдинг</h1>
        <p>Hero секция. Контент будет добавлен позже.</p>
      </section>

      {/* Введение с поэтапным процессом */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Введение</h2>
        <ol className="list-decimal list-inside space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3 hover:bg-[color:var(--accent)]/10">Этап {i + 1}</li>
          ))}
        </ol>
      </section>

      {/* Как мы применяем этот инструмент (3 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Как мы применяем этот инструмент</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Преимущества трейдинга (выпадающий список) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Преимущества трейдинга</h2>
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Dropdown key={i} title={`Преимущество ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Комплексный подход (2 строки с расшифровкой при наведении) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Комплексный подход</h2>
        <ul className="space-y-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <li key={i} className="group rounded-md border p-3 text-sm">
              Строка {i + 1}
              <div className="mt-1 hidden opacity-80 group-hover:block">Расшифровка при наведении. Контент позже.</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Трёхуровневая система управления (3 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Трёхуровневая система управления</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Уровень {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Алготрейдинг 24/7 (выпадающий список) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Алготрейдинг 24/7</h2>
        <div className="space-y-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <Dropdown key={i} title={`Секция ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Система безопасности алгоритмов (4 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Система безопасности алгоритмов</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Диверсификация и защита (2 карточки) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Диверсификация и защита</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Prop IKS Capital (6 строк с подпунктами) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Prop IKS Capital</h2>
        <ul className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="rounded-md border p-3">
              Пункт {i + 1}
              <ul className="ml-5 list-disc text-sm text-gray-600">
                <li>Подпункт А</li>
                <li>Подпункт Б</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Академия IKS Capital (6 карточек) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Академия IKS Capital</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">Карточка {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Футер CTA */}
      <section>
        <a href="/contact" className="btn-primary">Связаться с нами</a>
      </section>
    </div>
  );
}
