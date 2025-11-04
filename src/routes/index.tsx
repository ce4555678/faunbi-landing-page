import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import HomeUi from '@/components/homeUi'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="min-h-screen bg-background">
      <HomeUi.header />
      <HomeUi.hero />
      <HomeUi.features />
      <HomeUi.howItWorks />
      <HomeUi.pricing />
      <HomeUi.cta />
      <HomeUi.footer />
      {/* <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer /> */}
    </main>
  )
}
