import { Link } from '@tanstack/react-router'

const steps = [
  {
    number: '1',
    title: 'Cadastre seu negócio',
    description:
      'Em poucos minutos, sua empresa está configurada. Nada de formulários infinitos — a Faunbi te guia passo a passo.',
  },
  {
    number: '2',
    title: 'Conecte serviços e estoque',
    description:
      'Adicione produtos, defina serviços e personalize seu chatbot de IA. Ele começa a automatizar tarefas no mesmo dia.',
  },
  {
    number: '3',
    title: 'Acompanhe tudo em tempo real',
    description:
      'Relatórios claros, insights automáticos e uma visão completa das finanças — tudo funcionando no piloto automático.',
  },
]

export default function HowItWorksHomeUi() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6 backdrop-blur-sm">
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wide">
              3 passos para automatizar tudo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sua operação rodando sozinha começa aqui
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Da configuração inicial aos relatórios em tempo real — a Faunbi faz
            o trabalho pesado por você.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative group transition-all duration-500 hover:-translate-y-1"
            >
              {/* Step Card */}
              <div className="relative z-10 p-10 rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900/80 to-slate-950/70 hover:border-blue-400/60 backdrop-blur-xl shadow-lg hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)] transition-all">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-blue-950 font-extrabold text-lg mb-6 shadow-md">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[3.5rem] right-[-2rem] w-8 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Tudo pronto em menos de 5 minutos — sem precisar de suporte técnico.
          </p>
          <Link
            to="/checkout"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-blue-500/20"
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </section>
  )
}
