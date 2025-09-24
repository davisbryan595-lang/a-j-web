import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Concord, CA",
    rating: 5,
    text: "Absolutely amazing service! Angel and his team transformed my car from a disaster to showroom quality. The convenience of mobile service is unbeatable.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mike Rodriguez",
    location: "Walnut Creek, CA",
    rating: 5,
    text: "Best detailing service in the Bay Area! They removed pet hair that I thought was impossible to get out. Highly recommend A&J Mobile Detailing.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Jennifer Chen",
    location: "Brentwood, CA",
    rating: 5,
    text: "Professional, punctual, and perfectionist! My car looks better than when I bought it. The headlight restoration was incredible.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Thompson",
    location: "Bay Area, CA",
    rating: 5,
    text: "Outstanding attention to detail and customer service. They went above and beyond to make sure I was completely satisfied. Will definitely use again!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="text-red-500">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 text-pretty">"{testimonial.text}"</p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
