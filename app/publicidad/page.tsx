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
          
          <p className="mt-4 text-xl md:text-2xl font-light">Conectamos marcas con el <span className="text-[#FFD700] font-bold">público que toma decisiones.</span></p>
          <p className="mt-2 text-xs md:text-sm opacity-50">Finanzas deportivas, economía de clubes y negocios con alta llegada en Argentina</p>
        </div>

        {/* MÉTRICAS PRINCIPALES CON ÍCONOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          
          {/* Métrica IG 1 */}
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider opacity-70">Instagram</span>
              </div>
              <div className="text-3xl font-black text-[#FFD700]">597K</div>
              <div className="text-xs md:text-sm opacity-60 mt-1">Visualizaciones IG<br/>30 días - 98.6% No Seguidores</div>
            </div>
          </div>

          {/* Métrica YT 1 */}
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider opacity-70">YouTube</span>
              </div>
              <div className="text-3xl font-black text-[#FFD700]">92K</div>
              <div className="text-xs md:text-sm opacity-60 mt-1">Visualizaciones YT<br/>28 días - 62.2% Retención</div>
            </div>
          </div>

          {/* Métrica YT 2 */}
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider opacity-70">YouTube</span>
              </div>
              <div className="text-3xl font-black text-[#FFD700]">+51%</div>
              <div className="text-xs md:text-sm opacity-60 mt-1">Tiempo Visualización YT<br/>354hs - Crecimiento sostenido</div>
            </div>
          </div>

          {/* Métrica IG 2 */}
          <div className="bg-[#12121a] p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider opacity-70">Instagram</span>
              </div>
              <div className="text-3xl font-black text-[#FFD700]">284K</div>
              <div className="text-xs md:text-sm opacity-60 mt-1">Reel Top IG<br/>Colapinto $2M</div>
            </div>
          </div>

        </div>

        {/* AUDIENCIA Y DEMOGRAFÍA */}
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
        <p className="text-xs opacity-60 mb-6">Exclusivo para los primeros 10 sponsors - Rompemos el hielo sin riesgo</p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          
          {/* PACK TESTEO (GRATIS) */}
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="bg-white/10 text-[#FFD700] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">⚡ 100% Sin Cargo</span>
              <h3 className="font-bold text-lg mt-2">PACK TESTEO</h3>
              <div className="text-3xl font-black text-[#FFD700] mt-2">GRATIS</div>
              <div className="text-xs opacity-60 mb-4">Primeros 10 sponsors</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 1 Reel en IG + 1 Short en YT</li>
                <li>✓ Mención "Presentado por"</li>
                <li>✓ Link en bio durante 24hs</li>
              </ul>
            </div>
            <a 
              href="https://ig.me/m/magnatesdeljuego" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-white/10 text-white w-full py-3 rounded-xl font-bold block text-center text-xs tracking-wide hover:bg-white/20 transition-colors"
            >
              RESERVAR TESTEO GRATIS
            </a>
          </div>

          {/* PACK MAGNATE */}
          <div className="bg-[#FFD700] text-black p-6 rounded-2xl flex flex-col justify-between relative shadow-xl">
            <div>
              <span className="bg-black text-[#FFD700] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">★ Más Vendido</span>
              <h3 className="font-black text-xl mt-2">PACK MAGNATE</h3>
              <div className="text-3xl font-black mt-1">$45.000 ARS</div>
              <div className="text-xs font-bold mb-4">45 USD</div>
              <ul className="space-y-2 text-xs font-medium">
                <li>✓ 5 Reels en IG + 2 Shorts en YT</li>
                <li>✓ 2 Historias con link directo</li>
                <li>✓ Guion adaptado al ángulo de tu marca</li>
                <li>✓ Contenido fijado por 48hs</li>
              </ul>
            </div>
            <a 
              href="https://ig.me/m/magnatesdeljuego" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-black text-white w-full py-3 rounded-xl font-bold block text-center text-xs tracking-wide hover:bg-neutral-900 transition-colors"
            >
              HÁBLAME POR DM @magnatesdeljuego
            </a>
          </div>

          {/* PACK MES */}
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">💼 Alianzas a Largo Plazo</span>
              <h3 className="font-bold text-lg mt-2">PACK MES</h3>
              <div className="text-3xl font-black mt-2">$100.000 ARS</div>
              <div className="text-xs opacity-60 mb-4">100 USD</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 10 piezas de contenido al mes</li>
                <li>✓ Presencia constante en IG y YT</li>
                <li>✓ Informe mensual de rendimiento y métricas</li>
              </ul>
            </div>
            <a 
              href="https://ig.me/m/magnatesdeljuego" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-white/10 text-white w-full py-3 rounded-xl font-bold block text-center text-xs tracking-wide hover:bg-white/20 transition-colors"
            >
              QUIERO EL PACK MENSUAL
            </a>
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
