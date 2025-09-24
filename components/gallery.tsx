"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    before: "/dirty-car-exterior-before-detailing--muddy-and-dus.jpg",
    after: "/same-car-after-professional-detailing--shiny-and-c.jpg",
    title: "Exterior Detail Transformation",
  },
  {
    before: "/dirty-car-interior-with-stains-and-pet-hair--autom.jpg",
    after: "/same-interior-after-deep-cleaning--spotless-and-fr.jpg",
    title: "Interior Deep Clean",
  },
  {
    before: "/cloudy-oxidized-headlights-before-restoration--aut.jpg",
    after: "/crystal-clear-headlights-after-restoration--automo.jpg",
    title: "Headlight Restoration",
  },
  {
    before: "/dirty-engine-bay-before-cleaning--greasy-and-dusty.jpg",
    after: "/clean-engine-bay-after-detailing--shiny-components.jpg",
    title: "Engine Bay Cleaning",
  },
  {
    before: "/leather-seats-with-stains-and-wear--automotive-int.jpg",
    after: "/restored-leather-seats--conditioned-and-clean--aut.jpg",
    title: "Leather Restoration",
  },
  {
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    title: "Paint Correction",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showBefore, setShowBefore] = useState(true)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setShowBefore(true)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
      setShowBefore(true)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
      setShowBefore(true)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Before & <span className="text-red-500">After</span> Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            See the incredible transformations we achieve with our professional detailing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-800 border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.before || "/placeholder.svg"}
                      alt={`${image.title} - Before`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={image.after || "/placeholder.svg"}
                      alt={`${image.title} - After`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
                    <div className="absolute bottom-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-center group-hover:text-red-500 transition-colors text-white">
                  {image.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-red-500 z-10"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 z-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image container */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={showBefore ? galleryImages[selectedImage].before : galleryImages[selectedImage].after}
                    alt={`${galleryImages[selectedImage].title} - ${showBefore ? "Before" : "After"}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center text-white">
                    {galleryImages[selectedImage].title}
                  </h3>

                  <div className="flex gap-2 justify-center">
                    <Button
                      variant={showBefore ? "default" : "outline"}
                      onClick={() => setShowBefore(true)}
                      className={showBefore ? "bg-red-600 text-white" : "border-gray-600 text-gray-300"}
                    >
                      Before
                    </Button>
                    <Button
                      variant={!showBefore ? "default" : "outline"}
                      onClick={() => setShowBefore(false)}
                      className={!showBefore ? "bg-red-600 text-white" : "border-gray-600 text-gray-300"}
                    >
                      After
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
