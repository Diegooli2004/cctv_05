import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceCard } from "@/components/services/service-card"
import { services } from "@/data/services/service-data"

const serviceCards = Object.entries(services).map(([slug, service]) => ({
  title: service.title,
  description: service.description,
  icon: service.icon,
  href: `/services/${slug}`
}))

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Our CCTV Installation Services
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Professional CCTV installation services tailored to your security needs
            </p>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}