import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const locations = [
  {
    name: "New York, NY",
    slug: "new-york"
  },
  {
    name: "Los Angeles, CA",
    slug: "los-angeles"
  },
  {
    name: "Chicago, IL",
    slug: "chicago"
  },
  {
    name: "Houston, TX",
    slug: "houston"
  },
  {
    name: "Phoenix, AZ",
    slug: "phoenix"
  },
  {
    name: "Philadelphia, PA",
    slug: "philadelphia"
  },
  {
    name: "San Antonio, TX",
    slug: "san-antonio"
  },
  {
    name: "San Diego, CA",
    slug: "san-diego"
  },
  {
    name: "Dallas, TX",
    slug: "dallas"
  }
]

const services = [
  {
    name: "Residential CCTV",
    slug: "residential-cctv"
  },
  {
    name: "Commercial CCTV",
    slug: "commercial-cctv"
  },
  {
    name: "IP Cameras",
    slug: "ip-cameras"
  },
  {
    name: "Wireless CCTV",
    slug: "wireless-cctv"
  },
  {
    name: "Maintenance & Repair",
    slug: "maintenance-repair"
  }
]

export function LocationServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          CCTV Installation Services Across the US
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Card key={location.name}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">{location.name}</h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={`/installers/${location.slug}/${service.slug}`}
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        {service.name} in {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}