"use client";
import { useState } from "react";

export default function StyleGuide() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const brandColors = [
    { hex: "#3B3D37" },
    { hex: "#57554C" },
    { hex: "#BFB7A3" },
    { hex: "#D9D5C7" },
    { hex: "#DFDCD0" },
  ];

  const complementaryColors = [
    { hex: "#1D3C36" },
    { hex: "#946761" },
    { hex: "#4E648B" },
    { hex: "#BBCDB9" },
    { hex: "#EDCBB2" },
    { hex: "#C6AA73" },
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8 md:mb-12 text-base md:text-lg text-slate-600">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-3 md:mb-4">
          Style Guide
        </h1>
        <p>Referências visuais que guiam nossa comunicação. Use como inspiração para manter a consistência em todas as peças.</p>
      </div>

      {/* Brand Colors */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
          Cores da Marca
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-4">
          Estas são as cores primárias da Ambientha, presentes em todas as peças
          de comunicação.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {brandColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => handleCopyColor(color.hex)}
              className="text-left cursor-pointer group"
            >
              <div
                className="aspect-square rounded-lg mb-2 md:mb-3 transition-transform group-hover:scale-105 border-2 border-transparent group-hover:border-[#3B3D37]/20"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-[10px] md:text-xs text-[#57554C] font-mono ml-1 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
                {copiedHex === color.hex ? "Copiado!" : color.hex}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Complementary Colors */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
          Cores Complementares
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-4">
          As demais cores funcionam como complemento, aparecendo com menos
          frequência, mas sempre em harmonia com as principais.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {complementaryColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => handleCopyColor(color.hex)}
              className="text-left cursor-pointer group"
            >
              <div
                className="aspect-square rounded-lg mb-2 md:mb-3 transition-transform group-hover:scale-105 border-2 border-transparent group-hover:border-[#3B3D37]/20"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-[10px] md:text-xs text-[#57554C] font-mono ml-1 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
                {copiedHex === color.hex ? "Copiado!" : color.hex}
              </p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
