"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/styleguide", label: "Style Guide" },
    { href: "/manualdamarca", label: "Manual da Marca" },
    { href: "/tom-de-voz", label: "Tom de Voz" },
  ];

  return (
    <header className="border-b border-slate-200/60 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 md:p-10">
        {/* Logo e título */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Ambientha"
              width={36}
              height={44}
              className="w-7 h-auto md:w-9"
            />
          </Link>

          <div>
            <h1 className="font-sans text-lg md:text-2xl font-semibold text-slate-800">
              Brand Hub
            </h1>
            <p className="text-xs md:text-sm text-slate-500">
              Ambientha · Uso interno
            </p>
          </div>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 cursor-pointer"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6 text-slate-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-none ${
                  isActive
                    ? "text-slate-900 border-b-2 border-beige pb-1"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-4 text-sm font-medium border-b border-slate-100 ${
                  isActive
                    ? "text-slate-900 bg-slate-50"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
