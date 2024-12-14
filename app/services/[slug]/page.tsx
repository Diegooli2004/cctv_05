import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { constructMetadata } from "@/components/seo/metadata"
import { services } from "@/data/services/service-data"

interface ServicePageProps {
  params: {
    slug: string
  }
}

// Generate static params for all service slugs
export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services[params.slug]
  
  if (!service) {
    return constructMetadata({})
  }
  return constructMetadata({
    title: `${service.title} - Professional CCTV Installation Services`,
    description: service.description,
    image: service.image,
    type: "article",
  })
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.slug]
  if (!service) {
    notFound()
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </div>
  )
}
