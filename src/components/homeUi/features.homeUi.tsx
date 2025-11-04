'use client'

import {
  Calendar,
  CheckCircle,
  MessageCircle,
  Package,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Agenda Inteligente',
    description:
      'Agende seus compromissos com sincronização perfeita entre dispositivos',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Cadastro Rápido',
    description:
      'Gerencie clientes e serviços em segundos com interface intuitiva',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Controle Financeiro',
    description: 'DRE simplificado com relatórios em tempo real do seu negócio',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Package,
    title: 'Controle de Estoque',
    description: 'Rastreie inventário com alertas automáticos para reposição',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    icon: MessageCircle,
    title: 'Chatbot com IA',
    description: 'Tenha um assistente 24h por dia te ajudando no seu negócio',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CheckCircle,
    title: 'Em Breve: NFe',
    description: 'Emissão de Nota Fiscal Eletrônica (Premium em breve)',
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 mb-6">
            <Zap className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-200">
              Recursos Completos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-slate-300">
            Funcionalidades poderosas desenvolvidas para o crescimento acelerado
            do seu negócio
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="group relative">
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 transition-opacity duration-500`}
                ></div>

                {/* Card */}
                <div
                // className="relative p-8 md:p-10 rounded-2xl border border-blue-400/50 bg-gradient-to-br from-blue-800/80 to-blue-700/50 hover:border-blue-300/70 backdrop-blur-xl transition-all duration-300 group-hover:shadow-2xl h-full"
                >
                  {/* Icon container */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Accent line */}
                  {/* <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}
                  ></div> */}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-200">
              Novos recursos em desenvolvimento
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
