import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Building, Users, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { committees } from "@/lib/committees"

export function generateStaticParams() {
  return Object.keys(committees).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const committee = committees[id as keyof typeof committees]

  if (!committee) {
    return {
      title: "Komisyon Bulunamadı | Meclis Simülasyonu",
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Komisyon Hakkında</h2>
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
