import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { Camera } from "lucide-react"

const serviceData = {
  icon: Camera,
  title: "IP Cameras",
  description: "High-resolution IP camera systems with advanced networking capabilities and smart features.",
  features: [
    "4K resolution",
    "Power over Ethernet",
    "Cloud storage options",
    "AI-powered detection",
    "Two-way audio"
  ],
  benefits: [
    "Crystal clear footage",
    "Easy network integration",
    "Remote accessibility",
    "Smart detection features",
    "Flexible storage options"
  ],
  image: "https://images.unsplash.com/photo-1557597774-9d475d5e8896?q=80&w=2070&auto=format&fit=crop"
}

export default function IpCamerasPage() {
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