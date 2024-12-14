import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const installers = [
  {
    name: "SecureTech Solutions",
    rating: 5,
    reviews: 48,
    description: "Specializing in high-end residential and commercial CCTV installations."
  },
  {
    name: "Guardian Systems",
    rating: 4.8,
    reviews: 36,
    description: "Expert installation of smart security systems and remote monitoring solutions."
  },
  {
    name: "Elite Security",
    rating: 4.9,
    reviews: 52,
    description: "Professional CCTV installation with 24/7 support and maintenance services."
  }
]

export function FeaturedInstallers() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured CCTV Installers</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {installers.map((installer) => (
            <Card key={installer.name}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-muted" />
                  <div>
                    <h3 className="font-semibold">{installer.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < installer.rating
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({installer.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {installer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}