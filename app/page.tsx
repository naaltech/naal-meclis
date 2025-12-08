import Link from "next/link"
import { Users, Building, School, MapPin, ChevronRight, Scale, GraduationCap, Globe, Home, Church, Coins, History } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LocationSection } from "@/components/location-section"
import { ContactForm } from "@/components/contact-form"
import { ConductRulesDialog } from "@/components/conduct-rules-dialog"
import { Footer } from "@/components/footer"

export default function HomePage() {
  // Etkinlik planı durumu - true: Açıklandı, false: Yakında açıklanacak
  const isTimelineAnnounced = false

  const stats = [
    { label: "Toplam Katılımcı", value: "150", icon: Users },
    { label: "Komisyon Sayısı", value: "7", icon: Building },
    { label: "Katılan Okul", value: "12", icon: School },
  ]

  const timeline = {
    day1: [
      { title: "Açılış Konuşması", time: "09:00 - 09:30" },
      { title: "Komite Oturumları I", time: "09:45 - 12:30" },
      { title: "Öğle Yemeği", time: "12:30 - 13:30" },
      { title: "Komite Oturumları II", time: "13:45 - 15:30" },
      { title: "Sosyal Etkinlik", time: "15:45 - 17:00" },
    ],
    day2: [
      { title: "Komite Oturumları III", time: "09:00 - 11:00" },
      { title: "Genel Kurul Hazırlık", time: "11:15 - 12:00" },
      { title: "Öğle Yemeği", time: "12:00 - 13:00" },
      { title: "Genel Kurul", time: "13:00 - 15:30" },
      { title: "Kapanış Töreni", time: "15:45 - 16:30" },
    ],
  }

  const committees = [
    { id: "adalet", name: "Adalet Komisyonu", delegates: 24, icon: Scale },
    { id: "milli-egitim", name: "Milli Eğitim Komisyonu", delegates: 22, icon: GraduationCap },
    { id: "dis-isleri", name: "Dış İşleri Komisyonu", delegates: 20, icon: Globe },
    { id: "ic-isleri", name: "İç İşleri Komisyonu", delegates: 21, icon: Home },
    { id: "din-isleri", name: "Din İşleri Komisyonu", delegates: 19, icon: Church },
    { id: "hazine-maliye", name: "Hazine ve Maliye Komisyonu", delegates: 22, icon: Coins },
    { id: "turk-dunyasi", name: "Türk Dünyasında Siyaset Tarihi Komisyonu", delegates: 22, icon: History },
  ]

  const team = [
    { role: "Koordinatör 1", name: "Ad Soyad", photo: "" },
    { role: "Koordinatör 2", name: "Ad Soyad", photo: "" },
    { role: "Koordinatör 3", name: "Ad Soyad", photo: "" },
  ]

  const sponsors = [
    { name: "Sponsor 1", logo: "" },
    { name: "Sponsor 2", logo: "" },
    { name: "Sponsor 3", logo: "" },
  ]

  const rules = [
    "Tüm katılımcılara, organizatörlere ve konuşmacılara karşı saygılı ve nazik davranılmalıdır.",
    "Oturumlara ve etkinliklere zamanında katılım sağlanmalıdır. Gecikmeler oturum akışını olumsuz etkiler.",
    "Etkinlik süresince resmi kıyafet (takım elbise, gömlek vb.) giyilmesi zorunludur.",
    "Oturumlar sırasında telefonlar sessiz moda alınmalı, sadece not alma amaçlı kullanılmalıdır.",
    "Meclis prosedürlerine ve oylama kurallarına uyulmalıdır. Söz almak için belirtilen usullere uygun hareket edilmelidir.",
    "Oturum içerikleri ve tartışmalar izinsiz paylaşılmamalıdır."
  ]

  const faqs = [
    {
      q: "Kimler katılabilir?",
      a: "Lise öğrencileri başvuru yapabilir. Okul idareleri aracılığıyla veya bireysel başvurular kabul edilmektedir.",
    },
    {
      q: "Kıyafet zorunluluğu nedir?",
      a: "Tüm delegeler ve katılımcılar resmi kıyafet (takım elbise veya blazer) giymek zorundadır.",
    },
    {
      q: "Okul dışı başvuru kabul ediliyor mu?",
      a: "Evet, bireysel başvurular da değerlendirilmektedir. Başvuru formunu doldurarak katılabilirsiniz.",
    },
    {
      q: "Delegeler nasıl atanır?",
      a: "Başvurular değerlendirildikten sonra delegeler komisyonlara atanır ve bilgilendirilir.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12 flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/tr/3/31/Build_of_the_Turkish_Parliament_%28Türkiye_Büyük_Millet_Meclisi%29.svg"
              alt="TBMM Logo"
              className="h-48 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(49%) sepia(42%) saturate(748%) hue-rotate(98deg) brightness(93%) contrast(89%)",
              }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">
            Nevzat Ayaz Anadolu Lisesi
            <br />
            <span className="text-primary">Meclis Simülasyonu</span>
          </h1>

          <p className="text-2xl font-bold text-gray-900 mb-12">24-25 Ocak 2026</p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="border border-primary/20 bg-white/80 backdrop-blur hover:border-primary transition-colors"
              >
                <CardContent className="py-4 text-center">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="basvuru" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hemen Kayıt Ol!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Nevzat Ayaz Anadolu Lisesi Meclis Simülasyonu'na katılmak için başvurunuzu yapın.
              Demokratik katılımı deneyimleyin!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6" asChild>
              <Link href="/kayit-ol">Kayıt Formu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="program" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Etkinlik Takvimi</h2>

          <div className="max-w-4xl mx-auto">
            {isTimelineAnnounced ? (
              <Card className="border-2 border-primary/30">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Day 1 */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b-2 border-primary">
                        1. Gün - 24 Ocak 2026
                      </h3>
                      <div className="space-y-3">
                        {timeline.day1.map((event, index) => (
                          <div key={index} className="flex justify-between items-start gap-4">
                            <span className="text-sm font-medium text-gray-900">{event.title}</span>
                            <span className="text-sm text-muted-foreground whitespace-nowrap">{event.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b-2 border-primary">
                        2. Gün - 25 Ocak 2026
                      </h3>
                      <div className="space-y-3">
                        {timeline.day2.map((event, index) => (
                          <div key={index} className="flex justify-between items-start gap-4">
                            <span className="text-sm font-medium text-gray-900">{event.title}</span>
                            <span className="text-sm text-muted-foreground whitespace-nowrap">{event.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-primary/30">
                <CardContent className="p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Etkinlik Planı Yakında Açıklanacak</h3>
                    <p className="text-gray-600 text-sm">
                      Detaylı etkinlik programı ve oturum saatleri çok yakında bu alanda paylaşılacaktır. 
                      Güncellemeler için sayfayı takip etmeye devam edin.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section id="komisyonlar" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Komisyonlar</h2>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {committees.map((committee) => (
                    <Link key={committee.id} href={`/komisyon/${committee.id}`}>
                      <div className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-gradient-to-r from-green-50/50 to-white hover:border-primary hover:shadow-md transition-all group cursor-pointer">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <committee.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 mb-1 text-sm leading-tight">{committee.name}</h3>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Users className="h-3.5 w-3.5" />
                            <span>{committee.delegates} Delege</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="ekip" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Organizasyon Ekibi</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.role} className="border-2 border-primary/30 bg-white">
                <CardContent className="pt-6 text-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-24 w-24 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Sponsorlar</h2>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor, i) => (
              <div key={i} className="flex items-center justify-center p-4 w-40">
                {sponsor.logo ? (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-w-full h-20 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" 
                  />
                ) : (
                  <div className="text-center opacity-40">
                    <Building className="h-16 w-16 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{sponsor.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section id="kurallar" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Kurallar</h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Etkinlik Kuralları */}
              <Card className="border border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Etkinlik Kuralları</h3>
                  <ul className="space-y-2.5">
                    {rules.map((rule, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{rule}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Davranış Kuralları */}
              <Card className="border border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Davranış Kuralları</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Bu etkinlikte herkesin kendini güvende ve rahat hissetmesi esastır. Taciz ve istismara hiçbir şekilde 
                    izin verilmez. Detaylı kurallar için aşağıdaki butona tıklayın.
                  </p>
                  <ConductRulesDialog />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Sıkça Sorulan Sorular</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-5 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ContactForm />

      <LocationSection />

      <Footer />
    </div>
  )
}
