import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"

interface LegalLayoutProps {
  children: React.ReactNode
  title: string
  breadcrumbLabel: string
}

export function LegalLayout({ children, title, breadcrumbLabel }: LegalLayoutProps) {
  const breadcrumbItems = [
    { label: "Legal", href: "/legal" },
    { label: breadcrumbLabel, href: `/legal/${breadcrumbLabel.toLowerCase()}` },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className="container py-8 md:py-12">
          <h1 className="text-3xl font-bold mb-8">{title}</h1>
          <div className="prose prose-neutral max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
