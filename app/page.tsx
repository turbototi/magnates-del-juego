import { MagnatesApp } from '@/components/magnates-app'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Luz ambiental sutil de fondo (da profundidad y vida sin alterar componentes ni modales) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-gold/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Contenido principal intacto */}
      <div className="relative z-10">
        <MagnatesApp />
      </div>
    </div>
  )
}