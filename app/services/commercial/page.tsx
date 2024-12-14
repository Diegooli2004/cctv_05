import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { Building2 } from "lucide-react"

const serviceData = {
  icon: Building2,
  title: "Commercial CCTV",
  description: "Comprehensive security solutions for businesses of all sizes, from small offices to large facilities.",
  features: [
    "Multi-camera systems",
    "Advanced analytics",
    "Access control integration",
    "Remote monitoring",
    "Scalable solutions"
  ],
  benefits: [
    "Enhanced security coverage",
    "Employee and asset protection",
    "Liability protection",
    "Operational insights",
    "Regulatory compliance"
  ],
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
}

export default function CommercialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServiceDetail service={serviceData} />
      </main>
      <Footer />
    </div>
  )
}