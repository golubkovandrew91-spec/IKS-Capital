"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: { href: string; label: string }[] = [
  { href: "/portfolio-management", label: "Портфельное управление" },
  { href: "/trading", label: "Трейдинг" },
  { href: "/innovations", label: "Инновационные направления" },
  { href: "/strategy", label: "Стратегия управления капиталом" },
  { href: "/security", label: "Безопасность" },
  { href: "/glossary", label: "Глоссарий" },
  { href: "/contact", label: "Связаться с нами" },
];

export default function Header(): React.ReactElement {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-[color:var(--card)]/70 ${
        scrolled ? "bg-[color:var(--card)]/70" : "bg-[color:var(--card)]/80"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* Left: Logo (IKS) */}
          <Link href="/" className="font-semibold text-lg tracking-tight shrink-0">IKS</Link>

          {/* Centered Title */}
          <div className="flex-1 text-center font-semibold text-lg sm:text-xl md:text-2xl tracking-wide md:tracking-widest">
            IKS Capital
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/contact" className="btn-primary">Начать инвестировать</Link>

            {/* Auth dropdown */}
            <div className="relative">
              <button
                onClick={() => setAuthMenuOpen((v) => !v)}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-[color:var(--accent)]/10"
                aria-haspopup="menu"
                aria-expanded={authMenuOpen}
                aria-controls="auth-menu"
              >
                Регистрация / Вход
              </button>
              {authMenuOpen && (
                <div
                  id="auth-menu"
                  role="menu"
                  className="absolute right-0 mt-2 w-48 rounded-md border bg-[color:var(--card)] p-1 shadow-lg"
                >
                  <button
                    className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-[color:var(--accent)]/10"
                    onClick={() => setAuthMenuOpen(false)}
                  >
                    Войти
                  </button>
                  <button
                    className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-[color:var(--accent)]/10"
                    onClick={() => setAuthMenuOpen(false)}
                  >
                    Регистрация
                  </button>
                </div>
              )}
            </div>

            {/* Pages burger dropdown */}
            <div className="relative">
              <button
                onClick={() => setPagesMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-[color:var(--accent)]/10"
                aria-label="Все страницы"
                aria-haspopup="menu"
                aria-expanded={pagesMenuOpen}
                aria-controls="pages-menu"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {pagesMenuOpen && (
                <div
                  id="pages-menu"
                  role="menu"
                  className="absolute right-0 mt-2 w-64 max-h-[70vh] overflow-auto rounded-md border bg-[color:var(--card)] p-1 shadow-lg"
                >
                  <ul className="max-h-[60vh] overflow-auto">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setPagesMenuOpen(false)}
                          className={`block rounded px-3 py-2 text-sm hover:bg-[color:var(--accent)]/10 ${
                            pathname === item.href ? "font-semibold" : "opacity-80"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
