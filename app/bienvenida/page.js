export default function BienvenidaPage() {
  return (
    <div className="relative min-h-[100dvh] bg-black text-foreground flex flex-col items-center justify-between py-4 px-4 overflow-x-hidden">
      
      {/* Resplandor ambiental dorado optimizado para móviles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-yellow-600/15 via-emerald-600/5 to-transparent rounded-full blur-[90px] pointer-events-none" />

      {/* Contenedor flexible que se adapta perfectamente a la pantalla del celular */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-sm flex flex-col items-center justify-between h-full my-auto space-y-3">
        
        {/* Bitácora y texto principal */}
        <div className="space-y-1.5 text-center w-full">
          <div className="flex items-center justify-center gap-2 opacity-60">
            <div className="h-[1px] w-6 bg-yellow-500/50" />
            <span className="text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-yellow-500 font-semibold">
              Bitácora
            </span>
            <div className="h-[1px] w-6 bg-yellow-500/50" />
          </div>

          <h1 className="text-lg sm:text-xl font-bold tracking-wider text-yellow-400">
            BUSCA TU RUMBO
          </h1>
          <p className="text-[11px] sm:text-xs text-zinc-400 leading-snug px-1">
            Si estás acá, ya sabés que los vientos no siempre soplan como uno quiere. Lo importante es cómo uno busca su rumbo.
          </p>
        </div>

        {/* Video directo levantado desde tu carpeta public */}
        <div className="relative w-full aspect-[9/16] max-h-[40vh] sm:max-h-[440px] bg-zinc-950 rounded-2xl overflow-hidden border border-yellow-500/30 shadow-[0_0_25px_rgba(234,179,8,0.15)] flex items-center justify-center my-1">
          <video 
            src="/0902 (1)(1).mp4"
            className="absolute inset-0 w-full h-full object-cover"
            controls
            playsInline
            preload="auto"
          />
        </div>

        {/* Logo oficial inferior adaptativo */}
        <div className="pt-1 flex flex-col items-center w-full">
          <div className="w-20 sm:w-24 opacity-90 hover:opacity-100 transition-opacity">
            <img 
              src="/productos/LOgodtf.png" 
              alt="Magnates del Juego" 
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
