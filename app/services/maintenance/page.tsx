import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { Wrench } from "lucide-react"

const serviceData = {
  icon: Wrench,
  title: "Maintenance & Repair",
  description: "Professional maintenance and repair services to keep your CCTV system running optimally.",
  features: [
    "Regular maintenance",
    "Emergency repairs",
    "System upgrades",
    "Performance optimization",
    "Preventive care"
  ],
  benefits: [
    "Consistent performance",
    "Extended system life",
    "Reduced downtime",
    "Cost savings",
    "Peace of mind"
  ],
  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
}

export default function MaintenancePage() {
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