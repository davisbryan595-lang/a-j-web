"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = `Service Request: ${formData.service}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}`

    window.location.href = `mailto:angelhinojosa2009@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Ready to give your car the care it deserves? Contact us today for a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Phone</h4>
                    <a href="tel:+19252146681" className="text-gray-300 hover:text-red-500 transition-colors">
                      (925) 214-6681
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email</h4>
                    <a
                      href="mailto:angelhinojosa2009@icloud.com"
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      angelhinojosa2009@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Service Areas</h4>
                    <p className="text-gray-300">Bay Area, Concord CA, Walnut Creek, Brentwood CA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Hours</h4>
                    <p className="text-gray-300">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600/5 p-6 rounded-lg border border-red-500/20">
              <h4 className="font-semibold mb-2 text-red-500">Owner: Angel Hinojosa</h4>
              <p className="text-gray-300 text-pretty">
                "Your satisfaction is my priority. I personally ensure every vehicle receives the highest quality care
                and attention to detail."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Basic Detail">Basic Detail</option>
                    <option value="Premium Detail">Premium Detail</option>
                    <option value="Full Detail">Full Detail</option>
                    <option value="Interior & Exterior Detail">Interior & Exterior Detail</option>
                    <option value="Buff & Wax">Buff & Wax</option>
                    <option value="Headlight Restoration">Headlight Restoration</option>
                    <option value="Engine Bay Cleaning">Engine Bay Cleaning</option>
                    <option value="Other">Other (specify in message)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vehicle, preferred date/time, and any specific concerns..."
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
