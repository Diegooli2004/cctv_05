import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { Wifi } from "lucide-react"

const serviceData = {
  icon: Wifi,
  title: "Wireless CCTV",
  description: "Flexible wireless security solutions that eliminate the need for extensive cable installation.",
  features: [
    "Easy installation",
    "No cable requirements",
    "Encrypted transmission",
    "Battery backup options",
    "Expandable systems"
  ],
  benefits: [
    "Quick setup",
    "Flexible camera placement",
    "Cost-effective installation",
    "Easy system expansion",
    "Minimal structural impact"
  ],
  image: "https://images.unsplash.com/photo-1580981433573-c5604cb7c564?q=80&w=2070&auto=format&fit=crop"
}

export default function WirelessPage() {
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