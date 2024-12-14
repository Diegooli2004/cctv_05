import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { PlusCircle, MinusCircle } from "lucide-react"

const faqs = [
  {
    question: "What factors should I consider when choosing a CCTV installer?",
    answer: "When choosing a CCTV installer, consider their experience, certifications, customer reviews, pricing, warranty offerings, and after-installation support. It's also important to ensure they comply with local regulations and can provide a customized solution for your specific needs."
  },
  {
    question: "How much does CCTV installation typically cost?",
    answer: "The cost of CCTV installation can vary widely depending on factors such as the number of cameras, type of system (wired or wireless), storage requirements, and complexity of the installation. On average, residential systems can range from $500 to $2,500, while commercial systems can cost anywhere from $2,000 to $10,000 or more."
  },
  {
    question: "What are the benefits of professional CCTV installation over DIY?",
    answer: "Professional CCTV installation offers several benefits over DIY, including expert system design, proper camera placement for optimal coverage, professional wiring and configuration, compliance with local laws and regulations, and ongoing support and maintenance. Professionals can also recommend the best equipment for your specific needs and budget."
  },
  {
    question: "How long does CCTV installation usually take?",
    answer: "The duration of CCTV installation depends on the size and complexity of the system. A basic residential installation might take 4-8 hours, while a more complex commercial system could take several days. Factors that affect installation time include the number of cameras, wiring requirements, and any necessary structural modifications."
  },
  {
    question: "What maintenance does a CCTV system require?",
    answer: "CCTV systems require regular maintenance to ensure optimal performance. This typically includes cleaning camera lenses, checking and updating software, ensuring proper focus and angle of cameras, testing motion detection features, and verifying storage and backup systems are functioning correctly. It's recommended to have a professional perform a thorough check at least once a year."
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white mb-4 rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <PlusCircle className="w-6 h-6 mr-2 text-primary flex-shrink-0 group-data-[state=open]:hidden" />
                    <MinusCircle className="w-6 h-6 mr-2 text-primary flex-shrink-0 hidden group-data-[state=open]:block" />
                    <span className="text-left font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}