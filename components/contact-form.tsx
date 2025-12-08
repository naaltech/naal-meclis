"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="iletisim" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">İletişim</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Sorularınız ve kayıt işlemleri için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                    <a href="mailto:meclis@naal.org.tr" className="text-gray-600 hover:text-primary transition-colors">meclis@naal.org.tr</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <a href="tel:+902166317644" className="text-gray-600 hover:text-primary transition-colors">+90 (216) 631-7644</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                    <p className="text-gray-600">
                      Nevzat Ayaz Anadolu Lisesi<br />
                      İnkılap Mah. Yelkenciler Sok. No: 1<br />
                      Ümraniye, İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Bize Yazın</h3>
              
              <div className="bg-white border-2 border-primary/20 rounded-lg p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                {/* Web3Forms Access Key */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Ad Soyad
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder=""
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      E-posta
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder=""
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                    Konu
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder=""
                    className="border-gray-300 focus:border-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Mesaj
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder=""
                    className="border-gray-300 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 rounded-md"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-center text-green-600 font-medium">
                    ✓ Mesajınız başarıyla gönderildi!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-red-600 font-medium">
                    ✗ Bir hata oluştu. Lütfen tekrar deneyin.
                  </p>
                )}
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
