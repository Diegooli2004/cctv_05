import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Wifi, Camera, Wrench, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
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
    href: "/services/residential"
  },
  {
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
    href: "/services/commercial"
  },
  {
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
    href: "/services/ip-cameras"
  },
  {
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
    href: "/services/wireless"
  },
  {
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
    href: "/services/maintenance"
  }
]

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={service.href}>
                      Learn More <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}