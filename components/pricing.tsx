import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Basic Detail",
    price: "$89",
    description: "Perfect for regular maintenance",
    features: [
      "Exterior wash & dry",
      "Interior vacuum",
      "Dashboard cleaning",
      "Window cleaning",
      "Tire shine",
      "Basic protection",
    ],
    popular: false,
  },
  {
    name: "Premium Detail",
    price: "$149",
    description: "Our most popular package",
    features: [
      "Everything in Basic",
      "Clay bar treatment",
      "Wax application",
      "Leather conditioning",
      "Engine bay cleaning",
      "Headlight restoration",
      "Pet hair removal",
    ],
    popular: true,
  },
  {
    name: "Full Detail",
    price: "$229",
    description: "Complete transformation",
    features: [
      "Everything in Premium",
      "Paint correction",
      "Ceramic coating prep",
      "Deep stain removal",
      "Seat shampooing",
      "Odor elimination",
      "Full protection package",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Transparent <span className="text-red-500">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Choose the perfect package for your vehicle. All prices include mobile service to your location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-gray-800 border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105 ${
                plan.popular ? "ring-2 ring-red-500 shadow-2xl shadow-red-500/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2 text-white">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-red-500">{plan.price}</span>
                  <span className="text-gray-300 ml-1">starting</span>
                </div>
                <p className="text-gray-300 text-pretty">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white"
                  }`}
                  asChild
                >
                  <a href="#contact">Choose Plan</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            * Prices may vary based on vehicle size and condition. Contact us for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}
