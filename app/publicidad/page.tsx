"use client"
export default function PublicidadPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO Y LOGO */}
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

        {/* MÉTRICAS PRINCIPALES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black text-[#FFD700]">597K</div>
            <div className="text-xs md:text-sm opacity-60 mt-1">Visualizaciones IG<br/>30 días - 98.6% No Seguidores</div>
          </div>
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black text-[#FFD700]">92K</div>
            <div className="text-xs md:text-sm opacity-60 mt-1">Visualizaciones YT<br/>28 días - 62.2% Retención</div>
          </div>
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black">+51%</div>
            <div className="text-xs md:text-sm opacity-60 mt-1">Tiempo Visualización YT<br/>354hs - Crecimiento sostenido</div>
          </div>
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-black">284K</div>
            <div className="text-xs md:text-sm opacity-60 mt-1">Reel Top IG<br/>Colapinto $2M</div>
          </div>
        </div>

        {/* AUDIENCIA Y DEMografía */}
        <div className="bg-[#12121a] p-6 md:p-8 rounded-2xl border border-[#FFD700]/20 mb-10">
          <h3 className="text-[#FFD700] font-bold tracking-widest mb-2">¿QUIÉN NOS MIRA? - El público que compra</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm my-4">
            <div><b className="text-white text-lg">80.15%</b><br/>Argentina<br/><span className="opacity-60">Público comprador local</span></div>
            <div><b className="text-white text-lg">88.23%</b><br/>Hombres<br/><span className="opacity-60">Audiencia principal</span></div>
            <div><b className="text-white text-lg">74%</b><br/>+45 años<br/><span className="opacity-60">Con poder adquisitivo</span></div>
            <div><b className="text-white text-lg">98.89%</b><br/>No suscritos (YT)<br/><span className="opacity-60">Alto potencial viral</span></div>
          </div>
          <p className="text-xs opacity-60 border-t border-white/5 pt-3 mt-3">Distribución etaria clave: 55-64 (25.13%) | 65+ (24.57%) | 45-54 (24.42%) • Pico de actividad: 21:00 a 00:00 hs</p>
        </div>

        {/* PACKS DE LANZAMIENTO */}
        <h2 className="text-2xl md:text-3xl font-black mb-1">PACKS LANZAMIENTO</h2>
        <p className="text-xs opacity-60 mb-6">Exclusivo para los primeros 10 sponsors - Inversión accesible</p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg">PACK TESTEO</h3>
              <div className="text-3xl font-black mt-2">$18.000 ARS</div>
              <div className="text-xs opacity-60 mb-4">$18 USD</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 1 Reel en IG + 1 Short en YT</li>
                <li>✓ Mención "Presentado por"</li>
                <li>✓ Link en bio durante 24hs</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#FFD700] text-black p-6 rounded-2xl flex flex-col justify-between relative shadow-xl">
            <div>
              <span className="bg-black text-[#FFD700] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">★ Más Vendido</span>
              <h3 className="font-black text-xl mt-2">PACK MAGNATE</h3>
              <div className="text-3xl font-black mt-1">$45.000 ARS</div>
              <div className="text-xs font-bold mb-4">45 USD</div>
              <ul className="space-y-2 text-xs font-medium">
                <li>✓ 2 Reels en IG + 2 Shorts en YT</li>
                <li>✓ 1 Historia con link directo</li>
                <li>✓ Guion adaptado al ángulo de tu marca</li>
                <li>✓ Contenido fijado por 48hs</li>
              </ul>
            </div>
            <a 
              href="https://instagram.com/magnatesdeljuego" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-black text-white w-full py-3 rounded-xl font-bold block text-center text-xs tracking-wide hover:bg-neutral-900 transition-colors"
            >
              HÁBLAME POR DM @magnatesdeljuego
            </a>
          </div>

          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg">PACK MES</h3>
              <div className="text-3xl font-black mt-2">$120.000 ARS</div>
              <div className="text-xs opacity-60 mb-4">$120 USD</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 8 piezas de contenido al mes (2 por semana)</li>
                <li>✓ Presencia constante en IG y YT</li>
                <li>✓ Informe mensual de rendimiento y métricas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PIE DE PÁGINA */}
        <div className="text-center pt-6 border-t border-white/10 opacity-40 text-xs space-y-1">
          <p>Audiencia principal: Hombres +45 con poder adquisitivo | 80% Argentina | F1, Fútbol Argentino y Negocios del Deporte</p>
          <p>Contacto directo: DM @magnatesdeljuego | Respuesta estimada &lt; 6 hs | Miramar, Buenos Aires</p>
        </div>

      </div>
    </div>
  )
}
