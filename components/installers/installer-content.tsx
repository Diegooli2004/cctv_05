import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, MapPin, Building2, Shield, DollarSign, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface InstallerContentProps {
  city: string
  service: string
}

const nyInstallers = [
  {
    name: "Mammoth Security Inc. New Britain",
    website: "https://mammothsecurity.com",
    googleMaps: "https://maps.google.com/?cid=2701631714044828384",
    rating: 4.5,
    reviews: 156,
    description: "Expert commercial and residential CCTV installation with 24/7 monitoring services.",
    specialties: ["Commercial CCTV", "Access Control", "Remote Monitoring"]
  },
  {
    name: "Security Camera NY",
    website: "https://securitycamerany.com",
    googleMaps: "https://maps.google.com/?cid=1062317036370432016",
    rating: 4.9,
    reviews: 203,
    description: "Professional security camera installation for businesses and homes across NYC.",
    specialties: ["HD Surveillance", "Wireless Systems", "Night Vision Cameras"]
  },
  // Add more installers as needed
]

const faqs = [
  {
    question: "How much does CCTV installation cost in New York?",
    answer: "The cost of CCTV installation in New York varies depending on factors such as the number of cameras, type of system, and complexity of the setup. On average, residential systems can range from $500 to $2,500, while commercial systems can cost anywhere from $2,000 to $10,000 or more."
  },
  {
    question: "What are the benefits of professional CCTV installation?",
    answer: "Professional CCTV installation offers several benefits, including expert system design, optimal camera placement, proper wiring and configuration, compliance with local regulations, and ongoing support and maintenance."
  },
  // Add more FAQs as needed
]

export function InstallerContent({ city, service }: InstallerContentProps) {
  const cityDisplay = city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const serviceDisplay = service
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <>
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {serviceDisplay} in {cityDisplay}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find and compare top-rated CCTV installers in your area
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Top {serviceDisplay} Installers in {cityDisplay}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nyInstallers.map((installer, index) => (
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Frequently Asked Questions
          </h2>
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

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get in touch with our top-rated installers today for a free consultation
          </p>
          <Button size="lg">Get Free Quotes</Button>
        </div>
      </section>
    </>
  )
}