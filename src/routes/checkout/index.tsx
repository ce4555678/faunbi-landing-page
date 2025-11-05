import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod/v3'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Link } from '@tanstack/react-router'
import supabase from '@/supabaseClient'

export const Route = createFileRoute('/checkout/')({
  component: CheckoutPage,
})

const plans = [
  {
    name: 'Starter',
    price: 'R$ 14,90',
    period: '/mês',
    description: 'Perfeito para começar',
    highlight: 'Ideal para autônomos',
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
    highlight: 'Mais popular',
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
    highlight: 'Recursos avançados',
    popular: false,
    features: [
      'Tudo do Pro sem limites',
      'Relatórios avançados e gráficos',
      'Suporte prioritário 24/7',
      'Chatbot/IA ilimitado',
      'Até 3 usuários',
      'Em breve: Emissão de NFe',
      'Integrações avançadas',
      'SLA garantido',
    ],
  },
]

// Zod validation schema
const formSchema = z.object({
  email: z.string().email('Email inválido'),
  plan: z.string().min(1, 'Selecione um plano'),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      plan: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    const { data: isData } = await supabase.auth.signInAnonymously()

    if (isData) {
      await supabase.from('leads').insert({
        plano: data.plan,
        email: data.email,
        msg: data.message,
      })
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        form.reset()
      }, 3000)
    }

    setTimeout(() => {
      setSubmitted(false)
      form.reset()
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-blue-100/50 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" className="size-10 bg-contain" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Faunbi
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Status Message */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 mb-6 border border-blue-200">
                <span className="text-3xl">✨</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                O Futuro da Gestão de Negócios Chegou
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Faunbi está sendo desenvolvida com tecnologia de IA de ponta
                para revolucionar a forma como você gerencia seu negócio.
                Reserve seu lugar agora e aproveite acesso especial ao
                lançamento.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-blue-100 rounded-2xl p-8 md:p-12 shadow-lg shadow-blue-100/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Garanta Seu Acesso Antecipado
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha seus dados e seja um dos primeiros a ter acesso quando
                Faunbi lançar. Ofertas exclusivas aguardam.
              </p>

              {submitted ? (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 text-center">
                  <p className="text-blue-900 font-semibold mb-2 text-lg">
                    Perfeito! 🎉
                  </p>
                  <p className="text-blue-800">
                    Você já está na lista VIP. Entraremos em contato em breve
                    com as novidades exclusivas sobre o lançamento de Faunbi.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seu.email@exemplo.com"
                              className="bg-gray-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Plan Select */}
                    <FormField
                      control={form.control}
                      name="plan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">
                            Qual plano mais se encaixa?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-gray-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                                <SelectValue placeholder="Escolha seu plano ideal" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {plans.map((plan) => (
                                <SelectItem key={plan.name} value={plan.name}>
                                  {plan.name} - {plan.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">
                            Conte-nos mais (opcional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Qual é o seu maior desafio no negócio? Como podemos ajudar?"
                              className="bg-gray-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500 min-h-24 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-semibold py-3 text-lg shadow-lg shadow-blue-600/30 transition-all"
                    >
                      🚀 Quero Acesso Exclusivo
                    </Button>

                    {/* Back Link */}
                    <div className="text-center">
                      <Link
                        to="/"
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      >
                        ← Voltar à página inicial
                      </Link>
                    </div>
                  </form>
                </Form>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-100/50 transition-shadow">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Lançamento Próximo
                </h3>
                <p className="text-sm text-gray-600">
                  Prepare-se para uma transformação digital completa nos
                  próximos meses
                </p>
              </div>
              <div className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-100/50 transition-shadow">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Inteligência Artificial
                </h3>
                <p className="text-sm text-gray-600">
                  Automações inteligentes que economizam tempo e aumentam a
                  produtividade
                </p>
              </div>
              <div className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-100/50 transition-shadow">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Benefícios VIP
                </h3>
                <p className="text-sm text-gray-600">
                  Acesso antecipado, descontos exclusivos e suporte prioritário
                  para pioneiros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-gradient-to-r from-blue-50 to-white mt-16">
        <div className="container mx-auto px-4 md:px-6 py-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Faunbi. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
