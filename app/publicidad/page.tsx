"use client"
import { useEffect, useState } from "react"

const DEFAULT = {
  actualizado: "6 Nov 2026",
  instagram_vistas_90d: "1.035.404",
  instagram_espectadores: "437.211",
  instagram_no_seguidores: "98,2%",
  instagram_interacciones: "24.000",
  instagram_cuentas: "15.802",
  instagram_seguidores: "1.598",
  youtube_vistas: "452K",
  youtube_subs: "521",
  top_reel: "294K",
  top_reel_texto: "Reel Top NO ES PILOTO DE PAGO, ES NEGOCIO - 25 Sep",
  caso_viral_vistas: "38,2K",
  caso_viral_texto: "Short El punto más barato de la 【entity-F1¦canonical_name=F1】: 【entity-Colapinto¦canonical_name=Colapinto】"
}

export default function PublicidadPage() {
  const [m, setM] = useState(DEFAULT)
  useEffect(() => {
    fetch("/metrics.json", { cache: "no-store" })
      .then(r => r.json()).then(d => setM(d)).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-[#08080a] text-white px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#FFD700]/30 shadow-2xl bg-black">
            <img src="/logo-magnates.webp" alt="Magnates del Juego" className="w-full h-full object-cover scale-105" />
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter">MAGNATES <span className="text-[#FFD700]">DEL JUEGO</span></h1>
          <p className="mt-3 text-sm md:text-xl tracking-[0.3em] opacity-60">DEPORTES • DINERO • ESTRATEGIA</p>
          <p className="mt-4 text-xl md:text-2xl font-light">Conectamos marcas con el <span className="text-[#FFD700] font-bold">público que toma decisiones.</span></p>
          <p className="mt-2 text-xs md:text-sm opacity-50">Convertimos la pasión por el deporte en clientes para tu marca. • Actualizado: {m.actualizado}</p>
        </div>

        <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#12121a] p-6 md:p-8 rounded-2xl border border-[#FFD700]/40 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#FFD700] text-black text-xs font-black px-3 py-1 rounded-full">CASO DE ÉXITO VIRAL • ACTUALIZADO {m.actualizado.toUpperCase()}</span>
            <span className="text-[#FFD700] text-xs font-bold">EN CRECIMIENTO</span>
          </div>
          <h3 className="text-xl font-black">No vendemos vistas. Vendemos gente que compra.</h3>
          <p className="text-xs opacity-60 mt-1 mb-4">{m.caso_viral_texto}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><b className="text-white text-2xl font-black">{m.caso_viral_vistas}</b><br/><span className="text-xs opacity-60">Vistas (+35,1K vs media)</span></div>
            <div><b className="text-white text-2xl font-black">10,7K</b><br/><span className="text-xs opacity-60">Usuarios únicos x3,5 views c/u</span></div>
            <div><b className="text-white text-2xl font-black">68%</b><br/><span className="text-xs opacity-60">Retención • Pico 210%</span></div>
            <div><b className="text-white text-2xl font-black">80%</b><br/><span className="text-xs opacity-60">+45 años • 93,6% Hombres</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">{"【entity-Insta¦canonical_name=Insta】" + "gram"}</div>
            <div className="text-3xl font-black text-[#FFD700]">{m.instagram_vistas_90d}</div>
            <div className="text-xs opacity-60 mt-1">Visualizaciones 90d • {m.instagram_no_seguidores} No Seguidores<br/>{m.instagram_espectadores} Espectadores • {m.instagram_seguidores} seguidores</div>
          </div>
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">YouTube</div>
            <div className="text-3xl font-black text-[#FFD700]">{m.youtube_vistas}</div>
            <div className="text-xs opacity-60 mt-1">Visualizaciones totales • {m.youtube_subs} suscriptores</div>
          </div>
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">Engagement</div>
            <div className="text-3xl font-black text-[#FFD700]">{m.instagram_interacciones}</div>
            <div className="text-xs opacity-60 mt-1">Interacciones • {m.instagram_cuentas} cuentas<br/>1.008 visitas perfil</div>
          </div>
          <div className="bg-[#12121a] p-5 rounded-2xl border border-white/10">
            <div className="text-xs font-bold uppercase opacity-70 mb-2">Top Content</div>
            <div className="text-3xl font-black text-[#FFD700]">{m.top_reel}</div>
            <div className="text-xs opacity-60 mt-1">{m.top_reel_texto}<br/>106K 3 oct • REMONTADA POSIBLE</div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black mb-1">PACKS LANZAMIENTO</h2>
        <p className="text-xs opacity-60 mb-6">Exclusivo para los primeros 10 sponsors</p>
        <div className="grid md:grid-cols-3 gap-4 mb-6 items-stretch">
          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="h- flex items-start">
                <span className="bg-white/10 text-[#FFD700] text-xs font-black px-3 py-1 rounded-full">⚡ 100% Sin Cargo</span>
              </div>
              <h3 className="font-bold text-lg mt-2">PACK TESTEO</h3>
              <div className="text-3xl font-black text-[#FFD700] mt-2">GRATIS</div>
              <div className="text-xs opacity-60 mb-4 h-">Primeros 10 sponsors</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 1 Reel {"【entity-Insta¦canonical_name=Insta】" + "gram"} + 1 Short YouTube</li>
                <li>✓ Mención "Presentado por"</li>
                <li>✓ Link en bio 24hs</li>
                <li>✓ Acceso prioritario de prueba</li>
              </ul>
            </div>
            <a href="https://wa.me/5492235621810?text=Hola%20Magnates%2C%20soy%20de%20la%20marca%20___%2C%20rubro%20___%2C%20quiero%20postularme%20al%20Pack%20Testeo%20Gratis" target="_blank" className="mt-6 bg-white/10 text-white w-full py-3 rounded-xl font-bold block text-center text-xs">ELEGIR ESTE PACK</a>
          </div>

          <div className="bg-[#FFD700] text-black p-6 rounded-2xl flex flex-col justify-between border-2 border-[#FFD700]">
            <div>
              <div className="h- flex items-start">
                <span className="bg-black text-[#FFD700] text-xs font-black px-3 py-1 rounded-full">★ Más Vendido</span>
              </div>
              <h3 className="font-black text-xl mt-2">PACK MAGNATE</h3>
              <div className="text-3xl font-black mt-1">$45.000 ARS</div>
              <div className="text-xs font-bold mb-4 h-">45 USD</div>
              <ul className="space-y-2 text-xs font-medium">
                <li>✓ 5 Reels {"Insta" + "gram"} + 2 Shorts YouTube</li>
                <li>✓ 2 Historias con link</li>
                <li>✓ Guion adaptado</li>
                <li>✓ Fijado 48hs + Presencia destacada</li>
              </ul>
            </div>
            <a href="https://ig.me/m/magnatesdeljuego" target="_blank" className="mt-6 bg-black text-white w-full py-3 rounded-xl font-bold block text-center text-xs">ELEGIR ESTE PACK</a>
          </div>

          <div className="bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="h- flex items-start">
                <span className="bg-white/10 text-white text-xs font-black px-3 py-1 rounded-full">💼 Mensual</span>
              </div>
              <h3 className="font-bold text-lg mt-2">PACK MES</h3>
              <div className="text-3xl font-black text-[#FFD700] mt-2">$100.000 ARS</div>
              <div className="text-xs font-bold mb-4 h-">100 USD</div>
              <ul className="space-y-2 text-xs opacity-80">
                <li>✓ 6 Reels {"【entity-Insta¦canonical_name=Insta】" + "gram"} + 2 Shorts YouTube</li>
                <li>✓ 2 Historias con link</li>
                <li>✓ Presencia constante</li>
                <li>✓ Informe mensual de resultados</li>
              </ul>
            </div>
            <a href="https://ig.me/m/magnatesdeljuego" target="_blank" className="mt-6 bg-white/10 text-white w-full py-3 rounded-xl font-bold block text-center text-xs">ELEGIR ESTE PACK</a>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-xs opacity-60 mb-3">¿Preferís cerrar por WhatsApp? Más rápido que por DM.</p>
          <a href="https://wa.me/5492235621810?text=Hola%20Magnates%2C%20quiero%20info%20de%20packs%20de%20sponsor" target="_blank" className="inline-block bg-[#25D366] text-black font-bold px-6 py-3 rounded-xl text-sm">HABLAR POR WHATSAPP →</a>
        </div>

        <div className="text-center pt-6 border-t border-white/10 opacity-40 text-xs">
          <p>Hombres +45 con poder adquisitivo | 80% Argentina | F1, Fútbol, Finanzas</p>
          <p>DM @magnatesdeljuego | Miramar, Buenos Aires</p>
        </div>
      </div>
    </div>
  )
}
