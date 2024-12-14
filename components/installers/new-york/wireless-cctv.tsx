"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, MapPin, Wifi, Shield, Zap, Battery, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const nyWirelessCctvInstallers = [
  {
    name: "SecureWave Solutions",
    website: "https://securewavesolutions.com",
    googleMaps: "https://maps.google.com/?cid=1234567890",
    rating: 4.9,
    reviews: 178,
    description: "Specializing in cutting-edge wireless CCTV systems for homes and businesses in New York City.",
    specialties: ["4K Wireless Cameras", "Long-Range Transmission", "Solar-Powered Options"]
  },
  {
    name: "NYC Wireless Security",
    website: "https://nycwirelesssecurity.com",
    googleMaps: "https://maps.google.com/?cid=0987654321",
    rating: 4.8,
    reviews: 145,
    description: "Expert installation of wireless CCTV systems with smart home integration for New York properties.",
    specialties: ["Smart Home Integration", "Night Vision Cameras", "Mobile App Control"]
  },
  {
    name: "Metro Wireless Surveillance",
    website: "https://metrowirelesssurveillance.com",
    googleMaps: "https://maps.google.com/?cid=1357924680",
    rating: 4.7,
    reviews: 112,
    description: "Comprehensive wireless CCTV solutions for residential and commercial properties across New York.",
    specialties: ["PTZ Wireless Cameras", "Cloud Storage", "AI-Powered Analytics"]
  },
  {
    name: "Empire State Wireless Security",
    website: "https://empirewirelesssecurity.com",
    googleMaps: "https://maps.google.com/?cid=2468013579",
    rating: 4.6,
    reviews: 98,
    description: "Tailored wireless CCTV installations for various property types in the New York metropolitan area.",
    specialties: ["Mesh Network Systems", "Battery-Powered Cameras", "Remote Monitoring"]
  },
  {
    name: "Big Apple Wireless CCTV",
    website: "https://bigapplewirelesscctv.com",
    googleMaps: "https://maps.google.com/?cid=9876543210",
    rating: 4.8,
    reviews: 132,
    description: "Innovative wireless CCTV solutions with expert installation and support for New York City clients.",
    specialties: ["5G-Enabled Cameras", "Two-Way Audio", "License Plate Recognition"]
  },
  {
    name: "Gotham Wireless Monitoring",
    website: "https://gothamwirelessmonitoring.com",
    googleMaps: "https://maps.google.com/?cid=5432109876",
    rating: 4.7,
    reviews: 105,
    description: "Specialized in wireless CCTV systems for urban environments and challenging locations in New York.",
    specialties: ["High-Rise Installation", "Weatherproof Systems", "Cellular Backup"]
  }
]

const faqs = [
  {
    question: "What are the advantages of wireless CCTV systems?",
    answer: "Wireless CCTV systems offer several advantages: 1) Easier and less intrusive installation with no need for extensive wiring. 2) Flexibility in camera placement and system expansion. 3) Remote access and control via smartphone apps. 4) Often more cost-effective than wired systems. 5) Easier to move or relocate cameras as needed. 6) Can be integrated with other smart home devices. 7) Some systems can operate on battery power, allowing for truly wire-free operation."
  },
  {
    question: "How much does wireless CCTV installation typically cost in New York?",
    answer: "The cost of wireless CCTV installation in New York can vary depending on factors such as the number of cameras, system features, and installation complexity. A basic residential system might start around $500 to $1,500, while more advanced systems for larger properties or businesses can range from $2,000 to $5,000 or more. Factors that influence cost include camera quality, storage options, additional features like night vision or motion detection, and the need for any signal boosters or repeaters."
  },
  {
    question: "Are wireless CCTV systems reliable in urban environments like New York City?",
    answer: "Wireless CCTV systems can be very reliable in urban environments like New York City when properly installed. Modern systems use advanced encryption and mesh network technology to ensure stable connections. Professional installers can help design a system that overcomes potential challenges like signal interference and ensures reliable performance."
  },
  {
    question: "What maintenance do wireless CCTV systems require?",
    answer: "Wireless CCTV systems require regular maintenance including: cleaning camera lenses, updating firmware and software, checking and replacing batteries in battery-powered cameras, reviewing camera angles and positions, testing system functionality, and managing stored footage. Most professional installers offer maintenance plans to keep your system running optimally."
  }
]

export function NewYorkWirelessCCTV() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { label: "Installers", href: "/installers" },
              { label: "New York", href: "/installers/new-york" },
              { label: "Wireless CCTV", href: "/installers/new-york/wireless-cctv" },
            ]}
          />
        </div>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Wireless CCTV Installation in New York, NY
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Flexible and powerful security solutions with expert wireless CCTV installation for New York properties
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Top Wireless CCTV Installers in New York</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {nyWirelessCctvInstallers.map((installer, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{installer.name}</span>
                      <div className="flex space-x-2">
                        <Link href={installer.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 text-muted-foreground" />
                        </Link>
                        <Link href={installer.googleMaps} target="_blank" rel="noopener noreferrer">
                          <MapPin className="w-5 h-5 text-muted-foreground" />
                        </Link>
                      </div>
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 fill-primary text-primary" />
                      <span className="font-medium">{installer.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground">({installer.reviews} reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{installer.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {installer.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary">{specialty}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Benefits of Wireless CCTV for New York Properties</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <Wifi className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Flexible Installation</h3>
                  <p className="text-muted-foreground">Easy to install and relocate without the need for extensive wiring.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Remote Access</h3>
                  <p className="text-muted-foreground">Monitor your property from anywhere using your smartphone or tablet.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Battery className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Scalable System</h3>
                  <p className="text-muted-foreground">Easily add or remove cameras as your security needs change.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Secure Your Property?</h2>
            <p className="text-muted-foreground mb-8">Get in touch with our top-rated New York wireless CCTV installers today for a free consultation</p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Quotes</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}