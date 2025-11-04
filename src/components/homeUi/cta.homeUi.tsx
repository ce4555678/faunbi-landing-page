'use client'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export default function CTAHomeUi() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 border-t border-blue-900/30 overflow-hidden">
      {/* Iluminação dinâmica */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_70%)]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-800/40 border border-blue-500/40 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wide">
              IA e automação em um só lugar
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Leve seu negócio para o piloto automático
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-slate-300 mb-10">
            Simplifique agendamentos, controle financeiro e estoque com a
            Faunbi. Menos esforço, mais resultados — é assim que a nova gestão
            inteligente funciona.
          </p>

          {/* CTA principal */}
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-full px-12 py-6 text-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            Comece Agora
          </Button>

          {/* Linha de confiança */}
          <p className="text-sm text-slate-400 mt-8">
            Ative em minutos • Sem burocracia • Suporte humano + IA 24/7
          </p>
        </div>
      </div>
    </section>
  )
}
