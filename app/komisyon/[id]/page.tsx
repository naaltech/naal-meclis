import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Building, Users, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Alert, AlertDescription } from "@/components/ui/alert"

const committees = {
  adalet: {
    name: "Adalet Komisyonu",
    delegates: 20,
    about:
      "Türkiye'nin yargı sistemini ele alan, adalet ve hukuk reformlarını tartışan prestijli komitemiz.",
    topics: [
      "Yargı bağımsızlığının güçlendirilmesi",
      "Ceza ve infaz sisteminde reform",
      "Siber suçlarla mücadele mevzuatı",
      "Hukuki yardım ve erişim hakları",
      "Alternatif uyuşmazlık çözüm yöntemleri",
    ],
  },
  "milli-egitim": {
    name: "Milli Eğitim Komisyonu",
    delegates: 25,
    about:
      "Milli Eğitim Komisyonu, Türkiye'nin eğitim sistemini, müfredat reformlarını ve eğitim politikalarını inceler. Delegeler, eğitimde fırsat eşitliği, dijital dönüşüm, öğretmen hakları ve mesleki eğitim gibi kritik konularda çözüm önerileri geliştirirler.",
    topics: [
      "Eğitimde dijital dönüşüm ve teknoloji entegrasyonu",
      "Müfredat reformu ve 21. yüzyıl becerileri",
      "Öğretmen yetiştirme ve mesleki gelişim",
      "Eğitimde fırsat eşitliği ve erişilebilirlik",
      "Mesleki ve teknik eğitimin güçlendirilmesi",
    ],
  },
  "dis-isleri": {
    name: "Dış İşleri Komisyonu",
    delegates: 20,
    about:
      "Dış İşleri Komisyonu, Türkiye'nin uluslararası ilişkilerini, diplomatik stratejilerini ve küresel politikadaki konumunu inceler. Delegeler, bölgesel güvenlik, uluslararası anlaşmalar ve dış politika öncelikleri konusunda çözüm önerileri geliştirirler.",
    topics: [
      "Türkiye-AB ilişkileri ve üyelik süreci",
      "Ortadoğu barış süreçleri ve Türkiye'nin rolü",
      "Enerji diplomasisi ve transit koridor politikaları",
      "Küresel iklim değişikliği mücadelesinde Türkiye",
      "Uluslararası göç politikaları",
    ],
  },
  "ic-isleri": {
    name: "İç İşleri Komisyonu",
    delegates: 22,
    about:
      "İç İşleri Komisyonu, Türkiye'nin iç güvenlik politikalarını, yerel yönetim yapısını ve kamu düzeni meselelerini inceler. Delegeler, güvenlik reformları, afet yönetimi ve vatandaşlık hakları konusunda çözüm önerileri geliştirirler.",
    topics: [
      "Yerel yönetimlerin güçlendirilmesi",
      "Afet yönetimi ve sivil savunma",
      "Göç ve mülteci politikaları",
      "Siber güvenlik ve dijital vatandaşlık",
      "Kamu güvenliği ve kolluk kuvvetleri reformu",
    ],
  },
  "din-isleri": {
    name: "Din İşleri Komisyonu",
    delegates: 18,
    about:
      "Din İşleri Komisyonu, Türkiye'de din ve vicdan özgürlüğü, Diyanet İşleri Başkanlığı'nın yapısı ve dini eğitim konularını inceler. Delegeler, laiklik ilkesi çerçevesinde din hizmetleri ve toplumsal uyum konusunda çözüm önerileri geliştirirler.",
    topics: [
      "Din ve vicdan özgürlüğünün güvence altına alınması",
      "Diyanet İşleri Başkanlığı'nın yapısı ve görevleri",
      "Din eğitimi ve okullarda din kültürü dersleri",
      "Farklı inanç gruplarının hakları",
      "Dini radikalizm ile mücadele",
    ],
  },
  "hazine-maliye": {
    name: "Hazine ve Maliye Komisyonu",
    delegates: 20,
    about:
      "Hazine ve Maliye Komisyonu, Türkiye'nin ekonomi politikalarını, vergi sistemini, bütçe yönetimini ve mali düzenlemeleri inceler. Delegeler, ekonomik kalkınma, enflasyon mücadelesi ve mali disiplin konusunda çözüm önerileri geliştirirler.",
    topics: [
      "Enflasyon ile mücadele stratejileri",
      "Vergi reformu ve adil vergilendirme",
      "Bütçe açığı ve kamu borç yönetimi",
      "Genç girişimcilere finansal destek",
      "Dijital ekonomi ve kripto para düzenlemeleri",
    ],
  },
  "turk-dunyasi": {
    name: "Türk Dünyasında Siyaset Tarihi Komisyonu",
    delegates: 15,
    about:
      "Türk Dünyasında Siyaset Tarihi Komisyonu, Türk tarihinin kritik dönüm noktalarını simüle eder. Delegeler, tarihsel figürlerin rolünü üstlenerek önemli kararları yeniden tartışır ve alternatif tarih senaryolarını keşfederler.",
    alert: "Bu komite, diğer komisyonlardan farklı olarak tarihi bir simülasyon formatında çalışır.",
    topics: [
      "Kurtuluş Savaşı ve stratejik kararlar",
      "Cumhuriyet'in ilanı ve devrim süreçleri",
      "Çok partili hayata geçiş",
      "Soğuk Savaş döneminde Türkiye",
      "Türk Birliği ve Turan ideali",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(committees).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const committee = committees[id as keyof typeof committees]

  if (!committee) {
    return {
      title: "Komite Bulunamadı | Meclis Simülasyonu",
    }
  }

  return {
    title: `${committee.name} | Nevzat Ayaz Anadolu LisesiMeclis Simülasyonu`,
    description: committee.about,
    openGraph: {
      title: `${committee.name} | Nevzat Ayaz Anadolu Lisesi Meclis Simülasyonu`,
      description: committee.about,
      url: `https://meclis.naal.org.tr/komisyon/${id}`,
      siteName: "Meclis Simülasyonu | Nevzat Ayaz Anadolu Lisesi",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${committee.name} | Meclis Simülasyonu`,
      description: committee.about,
    },
  }
}

export default async function CommitteePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const committee = committees[id as keyof typeof committees]

  if (!committee) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with green accent */}
      <div className="bg-primary h-2" />

      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ana Sayfaya Dön
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Committee Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">{committee.name}</h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-lg">
                Delege Sayısı: <strong className="text-gray-900">{committee.delegates}</strong>
              </span>
            </div>
          </div>

          {/* About Section */}
          <Card className="border-2 border-primary/30 mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Komite Hakkında</h2>
              <p className="text-gray-700 leading-relaxed">{committee.about}</p>
            </CardContent>
          </Card>

          {/* Warning alert if committee has one */}
          {committee.alert && (
            <Alert className="mb-8 border-amber-500 bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertDescription className="text-amber-900 font-medium ml-2">
                {committee.alert}
              </AlertDescription>
            </Alert>
          )}

          {/* Topics Section */}
          <Card className="border-2 border-primary/30">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Komisyon Konuları</h2>
              <ul className="space-y-4">
                {committee.topics.map((topic, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-0.5">{topic}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="border-2 border-primary/30 bg-green-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bu Komisyona Katılmak İster Misiniz?</h3>
                <p className="text-gray-700 mb-6">
                  Meclis simülasyonuna katılmak ve {committee.name} delegesi olmak için başvurunuzu yapın.
                </p>
                <Link href="/kayit-ol">
                  <Button className="bg-primary hover:bg-primary/90">Başvuru Yap</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
