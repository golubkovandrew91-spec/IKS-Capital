"use client";
import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-lg font-semibold">Связаться с нами</h2>
            <p className="mb-4 text-sm">Оставьте заявку — мы свяжемся с вами.</p>
            <form
              className="grid gap-3 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Форма отправки демо. Контент будет добавлен позже.");
              }}
            >
              <input className="rounded-md border px-3 py-2 text-sm" placeholder="Ваше имя" />
              <input className="rounded-md border px-3 py-2 text-sm" placeholder="Email" type="email" />
              <textarea className="rounded-md border px-3 py-2 text-sm" placeholder="Сообщение" rows={4} />
              <button className="w-full btn-primary">
                Отправить
              </button>
            </form>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Контакты</h2>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@ikscapital.example</li>
              <li>Телефон: +0 000 000 00 00</li>
              <li>Адрес: Будет добавлено позже</li>
            </ul>
            <div className="mt-6 text-xs opacity-70">© {new Date().getFullYear()} IKS Capital</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
