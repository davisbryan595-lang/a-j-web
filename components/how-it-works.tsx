import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Sparkles, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Schedule your service online or call us. Choose your preferred time and location.",
    icon: Calendar,
    color: "text-red-500",
  },
  {
    number: "02",
    title: "We Arrive",
    description: "Our professional team arrives at your location with all equipment and supplies.",
    icon: MapPin,
    color: "text-red-500",
  },
  {
    number: "03",
    title: "Detailing",
    description: "We perform comprehensive detailing using premium products and techniques.",
    icon: Sparkles,
    color: "text-red-500",
  },
  {
    number: "04",
    title: "Drive Clean",
    description: "Enjoy your freshly detailed vehicle. Satisfaction guaranteed or we return.",
    icon: CheckCircle,
    color: "text-red-500",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            How It <span className="text-red-500">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Simple, convenient, and professional. Get your car detailed without leaving home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={step.number}
                className="relative bg-gray-800 border-gray-700 hover:border-red-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="bg-red-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600/20 transition-colors">
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-pretty">{step.description}</p>
                </CardContent>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-700 transform -translate-y-1/2" />
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
