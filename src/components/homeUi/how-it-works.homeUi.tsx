'use client'

const steps = [
  {
    number: '1',
    title: 'Cadastre seu negócio',
    description:
      'Configure sua empresa em poucos minutos com nosso assistente intuitivo.',
  },
  {
    number: '2',
    title: 'Configure serviços e estoque',
    description:
      'Adicione serviços, produtos e personalize seu chatbot de IA para automatizar rotinas.',
  },
  {
    number: '3',
    title: 'Acompanhe relatórios financeiros',
    description:
      'Visualize insights detalhados e acompanhe o desempenho do seu negócio em tempo real.',
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
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-slate-300">
            Começar é simples — apenas 3 passos para sua operação automática.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative group transition-all duration-500">
              {/* Step Card */}
              <div className="relative z-10 p-10 rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900/80 to-slate-950/70 hover:border-blue-400/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-blue-950 font-extrabold text-lg mb-6 shadow-md">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[3.5rem] right-[-2rem] w-8 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
