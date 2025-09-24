import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const services = [
    "Interior & Exterior Detail",
    "Buff & Wax",
    "Headlight Restoration",
    "Engine Bay Cleaning",
    "Clay & Seal",
    "Pet Hair Removal",
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="A&J Mobile Detailing Services"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 text-pretty">
              Professional mobile car detailing services in Concord, CA and the Bay Area. Your Car, Our Care – Anytime,
              Anywhere.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">Owner: Angel Hinojosa</p>
              <p>Established 2023</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-300 hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <a href="tel:+19252146681" className="text-gray-300 hover:text-red-500 transition-colors">
                  (925) 214-6681
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                <a
                  href="mailto:angelhinojosa2009@icloud.com"
                  className="text-gray-300 hover:text-red-500 transition-colors break-all"
                >
                  angelhinojosa2009@icloud.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Serving Bay Area, Concord CA, Walnut Creek, Brentwood CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} A&J Mobile Detailing Services. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Professional mobile car detailing in Concord, CA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
