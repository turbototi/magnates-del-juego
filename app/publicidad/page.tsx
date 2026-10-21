"use client"
import { useState } from 'react'

export default function PublicidadPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            MAGNATES <span className="text-[#FFD700]">DEL JUEGO</span>
          </h1>
          <p className="mt-4 text-xl tracking-[0.3em] opacity-60">DEPORTES • DINERO • ESTRATEGIA</p>
          <p className="mt-6 text-2xl font-light">No contamos goles. Contamos <span className="text-[#FFD700] font-bold">cuánto valen.</span></p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black text-[#FFD700]">597K</div>
            <div className="text-sm opacity-60 mt-1">Visualizaciones IG<br/>30 días - 98.6% No Seguidores</div>
          </div>
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black text-[#FFD700]">92K</div>
            <div className="text-sm opacity-60 mt-1">Visualizaciones YT<br/>28 días - 98.8% Shorts</div>
          </div>
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black">+51%</div>
            <div className="text-sm opacity-60 mt-1">Tiempo Visualización<br/>354hs - Retención en alza</div>
          </div>
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black">284K</div>
            <div className="text-sm opacity-60 mt-1">Reel Top<br/>【entity-COLAPINTO¦canonical_name=COLAPINTO】 $2M</div>
          </div>
        </div>

        {/* TOP CONTENT */}
        <div className="bg-[#12121a] p-8 rounded-2xl border border-[#FFD700]/20 mb-12">
          <h3 className="text-[#FFD700] font-bold tracking-widest mb-4">CONTENIDO QUE EXPLOTA</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Remontada Posible Sepang P21→P15</span><span className="text-[#FFD700]">15.8K YT + 106K IG</span></div>
            <div className="flex justify-between"><span>Le costó $960K a Alpine en Bakú</span><span className="text-[#FFD700]">14.4K YT</span></div>
            <div className="flex justify-between"><span>El punto más barato F1: $28K vs $600K</span><span className="text-[#FFD700]">14.1K YT</span></div>
            <div className="flex justify-between"><span>De €0 a Héroe - 【entity-Enner Valencia¦canonical_name=Enner Valencia】 【entity-Boca¦canonical_name=Boca】</span><span className="text-[#FFD700]">19K IG</span></div>
          </div>
        </div>

        {/* PACKS */}
        <h2 className="text-3xl font-black mb-6">PACKS PARA MARCAS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#12121a] p-8 rounded-2xl border border-white/10">
            <h3 className="font-bold text-lg">PACK TESTEO</h3>
            <div className="text-4xl font-black mt-2">$40 USD</div>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>✓ 1 Reel IG + 1 Short YT</li>
              <li>✓ Mención "Presentado por"</li>
              <li>✓ Link en bio 24hs</li>
            </ul>
          </div>
          <div className="bg-[#FFD700] text-black p-8 rounded-2xl">
            <h3 className="font-black text-lg">PACK MAGNATE ★ MAS VENDIDO</h3>
            <div className="text-4xl font-black mt-2">$120 USD</div>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>✓ 2 Reels IG + 2 Shorts YT</li>
              <li>✓ 1 Historia con swipe link</li>
              <li>✓ Guion con tu ángulo de negocio</li>
              <li>✓ Fijado en comentarios 48hs</li>
            </ul>
            <a href="https://www.instagram.com/magnatesdeljuego" target="_blank" className="mt-6 bg-black text-white w-full py-3 rounded-xl font-bold block text-center">HABLAME POR DM →</a>
          </div>
        </div>

        <div className="text-center mt-12 opacity-40 text-sm">
          Audiencia: 18-34 años | Argentina 85% | Interés: F1, Fútbol Argentino, Negocios del Deporte<br/>
          Contacto: DM @magnatesdeljuego | Respuesta en &lt; 6hs
        </div>
      </div>
    </div>
  )
}
