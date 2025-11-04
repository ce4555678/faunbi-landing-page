'use client'

import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: 'R$ 14,90',
    period: '/mês',
    description: 'Perfeito para começar',
    popular: false,
    features: [
      '20 automações IA/mês',
      'Cadastro de clientes e serviços',
      'Controle financeiro básico',
      'Controle de estoque básico',
      'Chatbot/IA limitado',
      '1 usuário',
      'Suporte via email',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 59,90',
    period: '/mês',
    description: 'Para negócios em crescimento',
    popular: true,
    features: [
      'Automação ilimitada com IA',
      'Clientes e serviços ilimitados',
      'Controle financeiro completo',
      'Controle de estoque completo',
      'Relatórios simples',
      'Chatbot/IA ilimitado',
      '1 usuário',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Premium',
    price: 'R$ 129,90',
    period: '/mês',
    description: 'Para empresas estabelecidas',
    popular: false,
    features: [
      'Tudo do Pro sem limites',
      'Relatórios avançados e gráficos',
      'Suporte prioritário 24/7',
      'Chatbot/IA ilimitado',
      'Até 3 usuários acessando',
      'Em breve: Emissão de NFe',
      'Integrações avançadas',
      'SLA garantido',
    ],
  },
]

export default function PricingHomeUi() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700/30 border border-blue-400/50 mb-6">
            <Zap className="w-4 h-4 text-blue-100" />
            <span className="text-sm font-bold text-blue-50">
              Planos e Preços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Escolha seu plano perfeito
          </h2>
          <p className="text-lg text-slate-300">
            Sem surpresas, sem compromissos. Cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group transition-all duration-500 ${
                plan.popular ? 'md:scale-105 md:-mt-6' : ''
              }`}
            >
              <div
                className={`relative rounded-3xl overflow-hidden backdrop-blur-xl shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-blue-500/50 bg-gradient-to-br from-slate-800/90 to-slate-900/70 hover:border-blue-400/70'
                    : 'border border-blue-400/30 bg-gradient-to-br from-slate-900/80 to-slate-950/70 hover:border-blue-400/50 hover:from-slate-900/90 hover:to-slate-950/80'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 bg-blue-700/60 text-blue-50 py-3 px-6 text-sm font-semibold backdrop-blur-sm">
                      <Zap className="w-4 h-4" />
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-300 mb-8">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-10 pb-10 border-b border-blue-500/20">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full rounded-full mb-10 font-semibold py-6 text-base transition-all ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                        : 'bg-blue-700/70 hover:bg-blue-700 text-white border border-blue-500/30'
                    }`}
                  >
                    {plan.popular ? 'Assine Agora' : 'Comece Agora'}
                  </Button>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 shadow-sm">
                            <Check className="w-3 h-3 text-blue-950" />
                          </div>
                        </div>
                        <span className="text-sm text-slate-100 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
