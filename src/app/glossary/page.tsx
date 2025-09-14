"use client";
import React, { useMemo, useState } from "react";

export default function GlossaryPage(): React.ReactElement {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const alphabet = Array.from({ length: 33 }, (_, i) => String.fromCharCode("А".charCodeAt(0) + i)).slice(0, 32);
  const categories = ["Торговля", "Инвестиции", "DeFi", "Безопасность", "Риск", "Прочее"];

  const terms = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({ key: `Термин ${i + 1}`, def: "Определение будет добавлено позже.", cat: categories[i % categories.length] })), []);
  const filtered = terms.filter((t) => (!filter || t.cat === filter) && (!query || t.key.toLowerCase().includes(query.toLowerCase())));

  return (
    <div className="py-8">
      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <h1 className="text-3xl font-semibold">Глоссарий</h1>
        <p>Hero секция. Контент позже.</p>
      </section>

      {/* Категории (карточки-фильтры) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Категории</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`rounded-md border px-3 py-1 text-sm ${filter === c ? "bg-black text-white" : ""}`}>
              {c}
            </button>
          ))}
          <button onClick={() => setFilter(null)} className="rounded-md border px-3 py-1 text-sm">Сброс</button>
        </div>
      </section>

      {/* Поиск с автодополнением + алфавитный указатель */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Поиск по терминам</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-md border px-3 py-2 text-sm"
          placeholder="Начните вводить термин..."
        />
        <div className="flex flex-wrap gap-1 text-xs">
          {alphabet.map((letter) => (
            <button key={letter} className="rounded border px-2 py-1">{letter}</button>
          ))}
        </div>
      </section>

      {/* Динамический список терминов + модальные окна для определений (упрощённо) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Список терминов</h2>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {filtered.map((t) => (
            <li key={t.key} className="rounded-md border p-3">
              <div className="font-medium">{t.key}</div>
              <div className="text-sm opacity-80">{t.def}</div>
              {/* Модальные окна будут добавлены позже при наличии контента */}
            </li>
          ))}
        </ul>
      </section>

      {/* Футер с формами предложений */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Предложить термин</h2>
        <form className="grid max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <input className="rounded-md border px-3 py-2 text-sm" placeholder="Термин" />
          <textarea className="rounded-md border px-3 py-2 text-sm" placeholder="Определение" rows={3} />
          <button className="btn-primary">Отправить</button>
        </form>
      </section>
    </div>
  );
}
