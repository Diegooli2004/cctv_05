import { Users, Star, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Choose",
    description: "Select your location and required CCTV service"
  },
  {
    icon: Star,
    title: "Compare",
    description: "Read reviews and compare quotes from top installers"
  },
  {
    icon: CheckCircle,
    title: "Hire",
    description: "Choose the best installer for your needs and budget"
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}