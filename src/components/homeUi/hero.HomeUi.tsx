import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroHomeUi() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge with animation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/15 transition-colors">
              {/* <Zap className="w-4 h-4 text-blue-400" /> */}
              <p className="text-sm font-semibold text-blue-300">
                ✨ Automação Inteligente com IA
              </p>
            </div>
          </div>

          {/* Headline with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold text-center text-balance leading-tight mb-6">
            <span className="text-white">Automatize seu negócio</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              com IA Inteligente
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 text-center text-balance mb-10 max-w-2xl mx-auto leading-relaxed">
            Agendamento, estoque, serviços e finanças, tudo em um só lugar.
            Simplifique suas operações e cresça mais rápido com automação
            inteligente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-6 text-base font-semibold group"
            >
              Comece Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 rounded-full px-8 py-6 text-base font-semibold transition-all"
            >
              Ver Demo
            </Button>
          </div>

          {/* Enhanced Hero Image */}

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Segurança em primeiro lugar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Integração rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
