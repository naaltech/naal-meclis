"use client"

import dynamic from "next/dynamic"
import { MapPin } from "lucide-react"

const LocationMap = dynamic(() => import("@/components/location-map").then((mod) => mod.LocationMap), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-200 flex items-center justify-center rounded-t-lg" style={{ minHeight: "400px" }}>
      <MapPin className="h-16 w-16 text-primary animate-pulse" />
    </div>
  ),
})

export function LocationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Lokasyon</h2>

        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-primary/30 overflow-hidden rounded-lg bg-white">
            <div className="h-[300px] w-full relative z-0">
              <LocationMap />
            </div>
            <div className="p-6 relative z-10 bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left: Address */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Adres
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-900 font-semibold text-sm">Nevzat Ayaz Anadolu Lisesi</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      İnkılap Mah. Yelkenciler Sok. No: 1<br />
                      Ümraniye, İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                {/* Right: Transportation */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ulaşım Seçenekleri</h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">Metro:</p>
                      <p className="text-gray-700 mb-1">M5 Hattı - Çarşı Durağı</p>
                      <p className="text-gray-600 text-[11px]">Metrobüs hattının Altunizade durağından ve M8 metro hattının Dudullu durağından M5 metro hattına aktarma yapılabilmektedir.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">Otobüs:</p>
                      <p className="text-gray-700">11P, 131T, 131YS, 320, 522, 14YE, 139A, 11ÜS <span className="text-gray-600">(Ümraniye Çarşı Metro Durağı)</span></p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">Otobüs:</p>
                      <p className="text-gray-700">11D, 11H, 14DK, 15TY <span className="text-gray-600">(Ümraniye Telekom Durağı)</span></p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">Otobüs:</p>
                      <p className="text-gray-700">10, 10G, 11K, 11ÇB, 13H, 14K, 20, 20K <span className="text-gray-600">(Ümraniye Devlet Hastanesi Durağı)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
