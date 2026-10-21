"use client"
export default function PublicidadPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <img 
            src="/productos/logo-magnates-aca-esta.jpg" 
            alt="Magnates del Juego" 
            className="w-32 h-32 md:w-40 md:h-40 object-cover mx-auto mb-6 drop-shadow-2xl rounded-full border-2 border-[#FFD700]/30" 
          />
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter">MAGNATES <span className="text-[#FFD700]">DEL JUEGO</span></h1>
          <p className="mt-3 text-sm md:text-xl tracking-[0.3em] opacity-60">DEPORTES • DINERO • ESTRATEGIA</p>
          <p className="mt-4 text-xl md:text-2xl font-light">No contamos goles. Contamos <span className="text-[#FFD700] font-bold">cuánto valen.</span></p>
          <p className="mt-2 text-xs md:text-sm opacity-50">Economía, Negocios y Finanzas en el Deporte de Alta Competición</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10"><div className="text-3xl font-black text-[#FFD700]">597K</div><div className="text-xs md:text-sm opacity-60 mt-1">Visualizaciones IG<br/>30 días - 98.6% No Seguidores</div></div>
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10"><div className="text-3xl font-black text-[#FFD700]">92K</div><div className="text-xs md:text-sm opacity-60 mt-1">Visualizaciones YT<br/>28 días - 98.8% Shorts</div></div>
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10"><div className="text-3xl font-black">+51%</div><div className="text-xs md:text-sm opacity-60 mt-1">Tiempo Visualización<br/>354hs - Retención en alza</div></div>
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10"><div className="text-3xl font-black">284K</div><div className="text-xs md:text-sm opacity-60 mt-1">Reel Top<br/>Colapinto $2M</div></div>
        </div>

        <div className="bg-[#12121a] p-6 md:p-8 rounded-2xl border border-[#FFD700]/20 mb-10">
          <h3 className="text-[#FFD700] font-bold tracking-widest mb-2">¿QUIÉN NOS MIRA? - El público que compra</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm my-4">
            <div><b className="text-white text-lg">80.15%</b><br/>Argentina<br/><span className="opacity-60">73,843 views</span></div>
            <div><b className="text-white text-lg">88.23%</b><br/>Hombres</div>
            <div><b className="text-white text-lg">74%</b><br/>+45 años con poder adquisitivo</div>
            <div><b className="text-white text-lg">98.89%</b><br/>No suscritos = viral</div>
          </div>
          <p className="text-xs opacity-60">55-64:25.13% | 65+:24.57% | 45-54:24.42% | Pico: 21:00-00:00hs</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black mb-4">PACKS LANZAMIENTO</h2>
        <p className="text-xs opacity-60 mb-6">Primeros 10 sponsors - Precios accesibles</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10">
            <h3 className="font-bold">PACK TESTEO</h3><div className="text-3xl font-black mt-2">$18.000 ARS</div><div className="text-xs opacity-60">$18 USD</div>
            <ul className="mt-4 space-y-1 text-xs opacity-80"><li>✓ 1 Reel IG + 1 Short YT</li><li>✓ Mención "Presentado por"</li><li>✓ Link en bio 24hs</li></ul>
          </div>
          <div className="bg-[#FFD700] text-black p-6 rounded-2xl">
            <h3 className="font-black">PACK MAGNATE ★ MAS VENDIDO</h3><div className="text-3xl font-black mt-2">$45.000 ARS</div><div className="text-xs font-bold">45 USD</div>
            <ul className="mt-4 space-y-1 text-xs font-medium"><li>✓ 2 Reels IG + 2 Shorts YT</li><li>✓ 1 Historia con link</li><li>✓ Guion con tu ángulo</li><li>✓ Fijado 48hs</li></ul>
            <div className="mt-5 bg-black text-white w-full py-3 rounded-xl font-bold block text-center text-sm">HABLAME POR DM @magnatesdeljuego</div>
          </div>
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10">
            <h3 className="font-bold">PACK MES</h3><div className="text-3xl font-black mt-2">$120.000 ARS</div><div className="text-xs opacity-60">$120 USD</div>
            <ul className="mt-4 space-y-1 text-xs opacity-80"><li>✓ 8 piezas al mes</li><li>✓ 2 por semana</li><li>✓ Informe mensual</li></ul>
          </div>
        </div>

        <div className="text-center mt-10 opacity-40 text-xs">Audiencia: Hombres +45 | Argentina 80% | F1, Fútbol Argentino, Negocios del Deporte<br/>Contacto: DM @magnatesdeljuego | Respuesta &lt;6hs | Miramar, BA</div>
      </div>
    </div>
  )
}
