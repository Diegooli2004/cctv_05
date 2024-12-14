import { Building2, Camera, Wifi, Wrench, Network, Home } from "lucide-react"
import { ServiceConfig } from "@/types/services"

export const services: Record<string, ServiceConfig> = {
  "residential": {
    icon: Home,
    title: "Residential CCTV",
    description: "Protect your home with state-of-the-art surveillance systems designed for residential properties.",
    features: [
      "HD cameras with night vision",
      "Mobile app monitoring",
      "Motion detection alerts",
      "24/7 recording capabilities",
      "Easy-to-use interface"
    ],
    benefits: [
      "Deter potential intruders",
      "Monitor your property remotely",
      "Protect your family and assets",
      "Evidence collection if needed",
      "Peace of mind while away"
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
  },
  "commercial": {
    icon: Building2,
    title: "Commercial CCTV",
    description: "Comprehensive security solutions for businesses of all sizes.",
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
  },
  "ip-cameras": {
    icon: Network,
    title: "IP Cameras",
    description: "High-resolution IP camera systems with advanced networking capabilities.",
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
  },
  "wireless": {
    icon: Wifi,
    title: "Wireless CCTV",
    description: "Flexible wireless security solutions for modern properties.",
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
  },
  "maintenance": {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Professional maintenance services for optimal system performance.",
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
}