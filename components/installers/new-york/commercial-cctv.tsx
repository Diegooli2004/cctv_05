"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, MapPin, Building2, Shield, DollarSign, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { nyInstallers, faqs } from "@/data/ny-installers"

export function NewYorkCommercialCCTV() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { label: "Installers", href: "/installers" },
              { label: "New York", href: "/installers/new-york" },
              { label: "Commercial CCTV", href: "/installers/new-york/commercial-cctv" },
            ]}
          />
        </div>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Commercial CCTV Services in New York, NY
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Protect your business with top-rated CCTV installation services in the Big Apple
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Top Commercial CCTV Installers in New York</h2>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Why Choose Commercial CCTV in New York?</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Business Protection</h3>
                  <p className="text-muted-foreground">Safeguard your assets, employees, and customers with state-of-the-art surveillance systems.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Crime Deterrent</h3>
                  <p className="text-muted-foreground">Visible CCTV systems act as a powerful deterrent against theft, vandalism, and other criminal activities.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <DollarSign className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Insurance Benefits</h3>
                  <p className="text-muted-foreground">Many insurance companies offer reduced premiums for businesses with professional CCTV systems installed.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New York City CCTV Regulations</h2>
                <p className="text-muted-foreground">
                  New York City has specific regulations regarding CCTV installation and usage. Our certified installers ensure your system complies with all local laws, including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>Maximum retention periods for footage</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span>Restrictions on camera placement in certain areas</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    <span>Data protection and privacy requirements</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=2070&auto=format&fit=crop"
                  alt="New York City skyline"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
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

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Secure Your Business?</h2>
            <p className="text-muted-foreground mb-8">Get in touch with our top-rated New York CCTV installers today for a free consultation</p>
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