import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export default function HeaderHomeUi() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="size-10 bg-contain" />
          <span className="text-xl font-bold text-foreground">Faunbi</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Funcionalidades
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Planos
          </a>
        </nav>

        {/* CTA Button */}
        <Link to="/checkout">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            Comece Agora
          </Button>
        </Link>
      </div>
    </header>
  )
}
