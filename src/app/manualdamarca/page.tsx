"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

type Color = "black" | "white";
type Format = "svg" | "png";

const logos = [
  {
    id: "hor",
    label: "Horizontal",
    black: { svg: "/black/full-hor-b.svg", png: "/black/full-hor-b.png" },
    white: { svg: "/white/full-hor-w.svg", png: "/white/full-hor-w.png" },
  },
  {
    id: "vert",
    label: "Vertical",
    black: { svg: "/black/full-vert-b.svg", png: "/black/full-vert-b.png" },
    white: { svg: "/white/full-vert-w.svg", png: "/white/full-vert-w.png" },
  },
  {
    id: "ret",
    label: "Retração",
    black: { svg: "/black/logo-ret-b.svg", png: "/black/logo-ret-b.png" },
    white: { svg: "/white/logo-ret-w.svg", png: "/white/logo-ret-w.png" },
  },
  {
    id: "stamp",
    label: "Stamp",
    black: { svg: "/black/logo-stamp-b.svg", png: "/black/logo-stamp-b.png" },
    white: { svg: "/white/logo-stamp-w.svg", png: "/white/logo-stamp-w.png" },
  },
];

export default function ManualDaMarca() {
  const [color, setColor] = useState<Color>("black");
  const [format, setFormat] = useState<Format>("svg");

  const handleDownload = (src: string, id: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `ambientha-logo-${id}-${color}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="max-w-4xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-lg text-slate-600">
        <h1 className="text-4xl font-semibold text-slate-800 mb-4">
          Manual da Marca
        </h1>
        <p>
          Diretrizes visuais da Ambientha. Use este guia para garantir
          consistência em todas as peças e canais de comunicação.
        </p>
      </div>
      {/* Logo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          Uso do logo
        </h2>

        {/* Filtros */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-slate-500 ">Cor</span>
          {(["black", "white"] as Color[]).map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all cursor-pointer ${
                color === c
                  ? "bg-slate-800 text-white border-slate-800"
                  : "text-slate-500 border-slate-200 hover:border-slate-400"
              }`}
            >
              {c === "black" ? "Preto" : "Branco"}
            </button>
          ))}

          <span className="text-sm text-slate-500 ml-4">Formato</span>
          {(["svg", "png"] as Format[]).map((f) => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all cursor-pointer ${
                format === f
                  ? "bg-slate-800 text-white border-slate-800"
                  : "text-slate-500 border-slate-200 hover:border-slate-400"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 gap-4">
          {logos.map((logo) => {
            const src =
              color === "black" ? logo.black[format] : logo.white[format];
            return (
              <button
                key={logo.id}
                onClick={() => handleDownload(src, logo.id)}
                className={`rounded-xl p-8 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md ${
                  color === "black"
                    ? "bg-white border border-slate-200"
                    : "bg-black"
                }`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "160px",
                }}
              >
                <Image
                  src={src}
                  alt={logo.label}
                  width={240}
                  height={0}
                  style={{
                    height: "80px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
          <p className="text-amber-800 text-sm font-medium">
            ⚠️ Nunca distorça, rotacione ou altere as cores do logo fora das
            variações aprovadas.
          </p>
        </div>
      </section>
      {/* Tipografia*/}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          Tipografia
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <p
              className="text-4xl text-slate-800 mb-2"
              style={{ fontFamily: geistSans.style.fontFamily }}
            >
              Geist Sans
            </p>
            <p className="text-slate-500 text-sm mb-6">Títulos e destaques</p>
            <div
              className="space-y-2 text-slate-700 "
              style={{ fontFamily: geistSans.style.fontFamily }}
            >
              <p className="font-light">Light — Aa Bb Cc</p>
              <p className="font-normal">Regular — Aa Bb Cc</p>
              <p className="font-medium">Medium — Aa Bb Cc</p>
              <p className="font-semibold">SemiBold — Aa Bb Cc</p>
              <p className="font-bold">Bold — Aa Bb Cc</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <p
              className="text-4xl text-slate-800 mb-2"
              style={{ fontFamily: geistMono.style.fontFamily }}
            >
              Geist Mono
            </p>
            <p className="text-slate-500 text-sm mb-6">Corpo de texto e UI</p>
            <div
              className="space-y-2 text-slate-700"
              style={{ fontFamily: geistMono.style.fontFamily }}
            >
              <p className="font-light">Light — Aa Bb Cc</p>
              <p className="font-normal">Regular — Aa Bb Cc</p>
              <p className="font-medium">Medium — Aa Bb Cc</p>
              <p className="font-semibold">SemiBold — Aa Bb Cc</p>
              <p className="font-bold">Bold — Aa Bb Cc</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-slate-100 rounded-lg">
          <p className="text-slate-600 text-sm">
            💡 Para stories do Instagram, use <strong>Poster</strong> para
            títulos e <strong>Deco</strong> para texto corrido.
          </p>
        </div>
      </section>
      {/* Stories*/}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          Guia de Stories
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Frequência</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Conteúdo autoral: seg, qua, sex</li>
              <li>Bastidores do ateliê: 1 a 2x por semana</li>
              <li>Interação com o público: 1x por semana</li>
              <li>Promoções ou novidades: quando houver</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4">
              Regras de repost
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-emerald-500">✓</span> Nunca em tela cheia
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500">✓</span> Fundo{" "}
                <code className="text-xs bg-slate-100 px-1 rounded">
                  #DCD8CD
                </code>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500">✓</span> Texto{" "}
                <code className="text-xs bg-slate-100 px-1 rounded">
                  #3B3E37
                </code>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500">✕</span> Nunca iniciar o dia com
                repost
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="font-semibold text-slate-800 mb-2">📸 Produtos</h4>
            <p className="text-sm text-slate-600">
              Produtos instalados em espaços reais. Antes e depois sempre que
              possível.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="font-semibold text-slate-800 mb-2">🧵 Bastidores</h4>
            <p className="text-sm text-slate-600">
              Processo de confecção, tecidos sendo escolhidos, peças prontas do
              ateliê.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="font-semibold text-slate-800 mb-2">💬 Interação</h4>
            <p className="text-sm text-slate-600">
              Enquetes, caixinha de perguntas. Aumentam o alcance dos stories.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
