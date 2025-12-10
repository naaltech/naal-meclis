import { Scale, GraduationCap, Globe, Home, Church, Coins, History } from "lucide-react"

export const committees = {
  adalet: {
    id: "adalet",
    name: "Adalet Komisyonu",
    delegates: 20,
    icon: Scale,
    about:
      "Türkiye'nin yargı sistemini ele alan, adalet ve hukuk reformlarını tartışan prestijli komisyon.",
    topics: [
      "Yargı bağımsızlığının güçlendirilmesi",
      "Ceza ve infaz sisteminde reform",
      "Siber suçlarla mücadele mevzuatı",
      "Hukuki yardım ve erişim hakları",
      "Alternatif uyuşmazlık çözüm yöntemleri",
    ],
  },
  "milli-egitim": {
    id: "milli-egitim",
    name: "Milli Eğitim Komisyonu",
    delegates: 25,
    icon: GraduationCap,
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
    id: "dis-isleri",
    name: "Dış İşleri Komisyonu",
    delegates: 20,
    icon: Globe,
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
    id: "ic-isleri",
    name: "İç İşleri Komisyonu",
    delegates: 22,
    icon: Home,
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
    id: "din-isleri",
    name: "Din İşleri Komisyonu",
    delegates: 18,
    icon: Church,
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
    id: "hazine-maliye",
    name: "Hazine ve Maliye Komisyonu",
    delegates: 20,
    icon: Coins,
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
    id: "turk-dunyasi",
    name: "Türk Dünyasında Siyaset Tarihi Komisyonu",
    delegates: 15,
    icon: History,
    about:
      "Türk Dünyasında Siyaset Tarihi Komisyonu, Türk tarihinin kritik dönüm noktalarını simüle eder. Delegeler, tarihsel figürlerin rolünü üstlenerek önemli kararları yeniden tartışır ve alternatif tarih senaryolarını keşfederler.",
    alert: "Bu komisyon, diğer komisyonlardan farklı olarak tarihi bir simülasyon formatında çalışır.",
    topics: [
      "Kurtuluş Savaşı ve stratejik kararlar",
      "Cumhuriyet'in ilanı ve devrim süreçleri",
      "Çok partili hayata geçiş",
      "Soğuk Savaş döneminde Türkiye",
      "Türk Birliği ve Turan ideali",
    ],
  },
} as const

export type CommitteeId = keyof typeof committees

export const committeesList = Object.values(committees)
