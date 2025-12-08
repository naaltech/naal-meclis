"use client"

import { Footer } from "@/components/footer"

export default function KayitPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Tally Form Container */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Başvuru Formu</h2>
              <p className="text-gray-600">
                Lütfen formu eksiksiz doldurunuz. Başvurunuz değerlendirildikten sonra e-posta ile bilgilendirileceksiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
