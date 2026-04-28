"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/styleguide", label: "Style Guide" },
    { href: "/manualdamarca", label: "Manual da Marca" },
    { href: "/tom-de-voz", label: "Tom de Voz" },
  ];

  return (
    <header className="border-b border-slate-200/60 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between p-10">
        {/* Logo e título */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Ambientha"
              width={36}
              height={44}
            />
          </Link>

          <div>
            <h1 className="font-sans text-2xl font-semibold text-slate-800">
              Brand Hub
            </h1>
            <p className="text-sm text-slate-500">Ambientha · Uso interno</p>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-8">
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
    </header>
  );
}
