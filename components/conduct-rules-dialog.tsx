"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText } from "lucide-react"

export function ConductRulesDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5">
          <FileText className="h-4 w-4 mr-2" />
          Davranış Kurallarını Oku
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Etkinlik Davranış Kuralları</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(85vh-120px)] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="font-bold text-lg mb-3">KISACA</h3>
              <p className="text-gray-700 mb-3">
                Bu etkinlikte herkesin kendini güvende ve rahat hissetmesi esastır. Taciz ve istismara hiçbir şekilde izin verilmez. 
                Başkalarını rahatsız eden davranışlarda bulunmak kabul edilmez ve bu tür durumlarda katılımcıların etkinlikten çıkarılması mümkündür. 
                Eğer bir sorun yaşarsanız ya da güvende hissetmezseniz, organizasyon ekibiyle iletişime geçmeniz yeterlidir.
              </p>
              <p className="text-gray-700 mb-3">
                Taciz; cinsiyet, yaş, cinsel yönelim, engellilik, fiziksel görünüm, beden ölçüsü, ırk, din, sosyal ya da ekonomik durum 
                üzerinden yapılan kırıcı sözler veya davranışlar olabilir. Bunun dışında cinsel içerikli görseller paylaşmak, şiddet tasvirleri 
                göstermek, kaba dil kullanmak, kişisel bilgileri izinsiz paylaşmak, izinsiz fotoğraf veya video çekmek, uygunsuz fiziksel temas 
                kurmak veya istenmeyen yakınlık göstermek de taciz sayılır.
              </p>
              <p className="text-gray-700 mb-3">
                Etkinlik sırasında kimse cinselleştirilmiş kıyafetler ya da materyaller kullanmamalıdır. Yaptığınız bir şey başkasını rahatsız 
                ediyorsa, bu taciz olarak kabul edilir ve hemen durdurmanız gerekir.
              </p>
              <p className="text-gray-700 mb-3">
                Bu kurallar yalnızca etkinlik alanında değil, etkinlikle ilgili sosyal buluşmalarda, ulaşım sırasında ve çevrim içi iletişimlerde 
                de geçerlidir. Organizasyonda yer alan herkes – katılımcılar, gönüllüler, mentorlar, jüri üyeleri, sponsorlar ve organizatörler – 
                bu kurallara uymakla yükümlüdür.
              </p>
              <p className="text-gray-700 font-semibold">
                Kuralları ihlal eden katılımcılar organizasyon ekibi tarafından uyarılabilir veya etkinlikten çıkarılabilir. Bu durumda herhangi 
                bir geri ödeme yapılmaz.
              </p>
            </section>

            <section className="border-t pt-6">
              <h3 className="font-bold text-lg mb-3">RAPORLAMA</h3>
              <p className="text-gray-700 mb-4">
                Eğer tacize uğrarsanız, bir başkasının tacize uğradığını fark ederseniz ya da güvenli olmadığınızı düşünürseniz, hemen etkinlik 
                denetmeni, etkinlik danışman öğretmeni veya Nevzat Ayaz Anadolu Lisesi Müdürlüğü ile iletişime geçin. Bize başvururken isminizi 
                paylaşmak zorunda değilsiniz. Organizasyon ekibi gerekirse güvenlik veya kolluk kuvvetleriyle iletişim kurmanıza yardımcı olur ve 
                kendinizi güvende hissetmeniz için size destek olur.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">İletişim Bilgileri</h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Etkinlik Sorumlusu:</span> Ömer Tarhan (Danışman Öğretmen)
                    <br />
                    <a href="tel:+905317807284" className="text-primary hover:underline">+90 (531) 780-7284</a>
                  </p>
                  <p>
                    <span className="font-semibold">Nevzat Ayaz Anadolu Lisesi Müdürlüğü</span>
                    <br />
                    <a href="tel:+902166317644" className="text-primary hover:underline">+90 (216) 631-7644</a>
                    <br />
                    <a href="mailto:iletisim@nevzatayazal.k12.tr" className="text-primary hover:underline">iletisim@nevzatayazal.k12.tr</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
