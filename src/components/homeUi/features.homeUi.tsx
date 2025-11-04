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
      'Nunca perca um cliente: sua agenda trabalha sozinha, integrada a todos os dispositivos.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Cadastro Rápido',
    description:
      'Adicione clientes e serviços em segundos — sem planilhas, sem fricção.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Controle Financeiro Inteligente',
    description:
      'Acompanhe lucros e custos em tempo real — e entenda seu negócio de verdade.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Package,
    title: 'Estoque Automatizado',
    description:
      'Reabasteça antes de faltar. Alertas e relatórios automáticos garantem controle total.',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    icon: MessageCircle,
    title: 'Chatbot com IA Integrada',
    description:
      'Um assistente que conversa com seus clientes e executa tarefas pra você.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CheckCircle,
    title: 'Emissão de NFe (em breve)',
    description:
      'A Faunbi cuidará da burocracia — emissão automática direto do sistema.',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wide">
              Feito para quem quer crescer sem travar
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O poder da automação em cada detalhe
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            De agendamentos a finanças, a Faunbi integra tudo — pra que seu
            negócio funcione no piloto automático.
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
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Card */}
                <div
                  className={`relative p-8 md:p-10 rounded-2xl border border-blue-400/30 bg-gradient-to-br from-slate-900/80 to-blue-900/40 hover:border-blue-300/50 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)] backdrop-blur-xl transition-all duration-300 group h-full`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 backdrop-blur-md">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-200">
              Novos recursos em desenvolvimento
            </span>
          </div>

          <p className="text-slate-400 text-sm">
            A Faunbi evolui junto com você — novas automações a cada
            atualização.
          </p>
        </div>
      </div>
    </section>
  )
}
