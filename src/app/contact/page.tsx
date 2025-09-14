"use client";
import React, { useState } from "react";

export default function ContactPage(): React.ReactElement {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="py-8">
      {/* Форма обратной связи + контактная информация */}
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold">Связаться с нами</h1>
          <form
            className="mt-4 grid max-w-md gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input className="rounded-md border px-3 py-2 text-sm" placeholder="Ваше имя" />
            <input className="rounded-md border px-3 py-2 text-sm" placeholder="Email" type="email" />
            <textarea className="rounded-md border px-3 py-2 text-sm" placeholder="Сообщение" rows={4} />
            <button className="btn-primary">Отправить</button>
            {submitted && (
              <p className="text-xs opacity-80">Заявка отправлена (демо). API будет подключено позже.</p>
            )}
          </form>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold">Контактная информация</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@ikscapital.example</li>
            <li>Телефон: +0 000 000 00 00</li>
            <li>Адрес: Будет добавлено позже</li>
          </ul>
        </div>
      </section>

      {/* Как мы можем помочь (текст позже) */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Как мы можем помочь</h2>
        <p>Текст будет добавлен позже.</p>
      </section>

      {/* Часто задаваемые вопросы (текст позже) */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Часто задаваемые вопросы</h2>
        <p>Текст будет добавлен позже.</p>
      </section>
    </div>
  );
}
