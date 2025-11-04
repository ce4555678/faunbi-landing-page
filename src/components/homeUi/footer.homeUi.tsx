'use client'

import { Link } from '@tanstack/react-router'

export default function FooterHomeUi() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-blue-900/40 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 py-20">
      {/* Fundo com iluminação sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none" />

      <div className="container relative mx-auto px-6 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-2">
            {/* <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-lg font-bold text-white">⚡</span>
            </div> */}
            <img src="/logo.svg" className="size-10 bg-contain" />

            <span className="text-2xl font-bold text-white tracking-tight">
              Faunbi
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link
              to="#features"
              className="text-white/70 hover:text-cyan-400 transition-colors"
            >
              Funcionalidades
            </Link>
            <Link
              to="#pricing"
              className="text-white/70 hover:text-cyan-400 transition-colors"
            >
              Planos
            </Link>
          </nav>
        </div>

        {/* Divider / Bottom Bar */}
        <div className="border-t border-blue-900/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {currentYear}{' '}
            <span className="font-medium text-white/70">Faunbi</span>. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
