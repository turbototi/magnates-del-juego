"use client"
export default function PublicidadPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#FFD700]/30 shadow-2xl bg-black">
            <img 
              src="/productos/logo-magnates-transparente.png" 
              alt="Magnates del Juego" 
              className="w-full h-full object-cover scale-105" 
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter">MAGNATES <span className="text-[#FFD700]">DEL JUEGO</span></h1>
          <p className="mt-3 text-sm md:text-xl tracking-[0.3em] opacity-60">DEPORTES • DINERO • ESTRATEGIA</p>
          <p className="mt-4 text-xl md:text-2xl font-light">Conectamos marcas con el <span className="text-[#FFD700] font-bold">público que toma decisiones.</span></p>
          <p className="mt-2 text-xs md:text-sm opacity-50">No contamos goles. Contamos cuánto valen.</p>
        </div>
        <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#12121a] p-6 md:p-8 rounded-2xl border border-[#FFD700]/40 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#FFD700] text-black text-[10px] font-black px-3 py-1 rounded-full">CASO DE ÉXITO VIRAL • 19 OCT</span>
            <span className="text-[#FFD700] text-xs font-bold">EN CRECIMIENTO</span>
          </div>
          <h3 className="text-xl font-black">No vendemos vistas. Vendemos gente que compra.</h3>
          <p className="text-xs opacity-60 mt-1 mb-4">Short "El punto más barato de la F1: 【entity-Colapinto¦canonical_name=Colapinto】"</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><b className="text-white text-2xl font-black">38,2K</b><br/><span className="text-xs opacity-60">Vistas (+35,1K vs media)</span></div>
            <div><b className="text-white text-2xl font-black">10,7K</b><br/><span className="text-xs opacity-60">Usuarios únicos x3,5 views c/u</span></div>
            <div><b className="text-white text-2xl font-black">68%</b><br/><span className="text-xs opacity-60">Retención • Pico 210%</span></div>
            <div><b className="text-white text-2xl font-black">80%</b><br/><span className="text-xs opacity-60">+45 años • 93,6% Hombres</span></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">Instagram</div>
            <div className="text-3xl font-black text-[#FFD700]">570K</div>
            <div className="text-xs opacity-60 mt-1">Visualizaciones 30d • 98,6% No Seguidores<br/>272.033 Espectadores</div>
          </div>
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">YouTube</div>
            <div className="text-3xl font-black text-[#FFD700]">92K</div>
            <div className="text-xs opacity-60 mt-1">Visualizaciones 28d • 62,2% Retención</div>
          </div>
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">Engagement</div>
            <div className="text-3xl font-black text-[#FFD700]">13.388</div>
            <div className="text-xs opacity-60 mt-1">Interacciones • 9.471 cuentas<br/>474 visitas perfil</div>
          </div>
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">Top Content</div>
            <div className="text-3xl font-black text-[#FFD700]">285K</div>
            <div className="text-xs opacity-60 mt-1">Reel Top 25 Sep<br/>106K 3 oct • 20,7K 19 oct</div>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-1">PACKS LANZAMIENTO</h2>
        <p className="text-xs opacity-60 mb-6">Exclusivo para los primeros 10 sponsors</p>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="bg-white/10 text-[#FFD700] text-[10px] font-black px-3 py-1 rounded-full">⚡ 100% Sin Cargo</span>
              <h3 className="font-bold text-lg mt-2">PACK TESTEO</h3>
              <div className="text-3xl font-black text-[#FFD700] mt-2">GRATIS</div>
              <div className="text-xs opacity-60 mb-4">Primeros 10 sponsors</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 1 Reel IG + 1 Short YT</li>
                <li>✓ Mención "Presentado por"</li>
                <li>✓ Link en bio 24hs</li>
              </ul>
            </div>
            <a href="https://ig.me/m/magnatesdeljuego" target="_blank" className="mt-6 bg-white/10 text-white w-full py-3 rounded-xl font-bold block text-center text-xs">POSTULAR MI MARCA</a>
          </div>
          <div className="bg-[#FFD700] text-black p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="bg-black text-[#FFD700] text-[10px] font-black px-3 py-1 rounded-full">★ Más Vendido</span>
              <h3 className="font-black text-xl mt-2">PACK MAGNATE</h3>
              <div className="text-3xl font-black mt-1">$45.000 ARS</div>
              <div className="text-xs font-bold mb-4">45 USD</div>
              <ul className="space-y-2 text-xs font-medium">
                <li>✓ 5 Reels IG + 2 Shorts YT</li>
                <li>✓ 2 Historias con link</li>
                <li>✓ Guion adaptado</li>
                <li>✓ Fijado 48hs</li>
              </ul>
            </div>
            <a href="https://ig.me/m/magnatesdeljuego" target="_blank" className="mt-6 bg-black text-white w-full py-3 rounded-xl font-bold block text-center text-xs">HÁBLAME POR DM</a>
          </div>
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full">💼 Mensual</span>
              <h3 className="font-bold text-lg mt-2">PACK MES</h3>
              <div className="text-3xl font-black text-[#FFD700] mt-2">$100.000 ARS</div>
              <div className="text-xs opacity-60 mb-4">100 USD</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 10 piezas al mes</li>
                <li>✓ Presencia constante</li>
                <li>✓ Informe mensual</li>
              </ul>
            </div>
            <a href="https://ig.me/m/magnatesdeljuego" target="_blank" className="mt-6 bg-white/10 text-white w-full py-3 rounded-xl font-bold block text-center text-xs">QUIERO EL PACK MENSUAL</a>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-white/10 opacity-40 text-xs">
          <p>Hombres +45 con poder adquisitivo | 80% Argentina | F1, Fútbol, Finanzas</p>
          <p>DM @magnatesdeljuego | Miramar, Buenos Aires</p>
        </div>
      </div>
    </div>
  )
}
