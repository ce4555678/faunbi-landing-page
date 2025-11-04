'use client'

import { Button } from '@/components/ui/button'

export default function CTAHomeUi() {
  return (
    <section className="relative py-24 md:py-32 bg-linear-to-b from-slate-950 via-blue-950 to-slate-900 border-t border-blue-900/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Está pronto para revolucionar sua gestão?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-white/70 mb-8">
            Junte-se a centenas de empresas que já estão economizando tempo e
            aumentando produtividade com a Faunbi. Sua transformação digital
            começa agora.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-full px-10 py-6 shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            Comece Agora
          </Button>

          <p className="text-sm text-white/60 mt-8">
            Cancele a qualquer momento — sem compromissos.
          </p>
        </div>
      </div>
    </section>
  )
}
