import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { InstallerContent } from "@/components/installers/installer-content"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { notFound } from "next/navigation"

interface InstallerPageProps {
  params: {
    city: string
    service: string
  }
}

// Valid cities and services for route validation
const validCities = ["new-york", "los-angeles", "chicago", "houston", "phoenix", "philadelphia", "san-antonio", "san-diego", "dallas"]
const validServices = ["residential-cctv", "commercial-cctv", "ip-cameras", "wireless-cctv", "maintenance-repair"]

export function generateStaticParams() {
  const paths = []
  for (const city of validCities) {
    for (const service of validServices) {
      paths.push({ city, service })
    }
  }
  return paths
}

export default function InstallerPage({ params }: InstallerPageProps) {
  // Validate route parameters
  if (!validCities.includes(params.city) || !validServices.includes(params.service)) {
    notFound()
  }

  // Convert slug to display format
  const cityDisplay = params.city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const serviceDisplay = params.service
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const breadcrumbItems = [
    { label: "Installers", href: "/installers" },
    { label: cityDisplay, href: `/installers/${params.city}` },
    { label: serviceDisplay, href: `/installers/${params.city}/${params.service}` },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <InstallerContent city={params.city} service={params.service} />
      </main>
      <Footer />
    </div>
  )
}