import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3">Nevzat Ayaz Anadolu Lisesi<br/>Meclis Simülasyonu</h3>
            <p className="text-gray-400 text-sm">
              Demokratik katılımı teşvik eden eğitici etkinlik
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/#program" className="text-gray-400 hover:text-white transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/#komiteler" className="text-gray-400 hover:text-white transition-colors">
                  Komiteler
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Nevzat Ayaz Anadolu Lisesi</li>
              <li>İnkılap Mah. Yelkenciler Sok. No: 1</li>
              <li>Ümraniye, İstanbul</li>
              <li>
                <a href="mailto:meclis@naal.edu.tr" className="hover:text-white transition-colors">
                  meclis@naal.org.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="text-center text-sm text-gray-400 space-y-2">
            <p>
              © {currentYear} Nevzat Ayaz Anadolu Lisesi Meclis Simülasyonu. | Bu proje{" "}
              <a 
                href="https://raw.githubusercontent.com/naaltech/naal-meclis/refs/heads/main/LICENSE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                GPLv3
              </a>
              {" "}ile lisanslanmıştır.
            </p>
            <p>
              Açık Kaynak:{" "}
              <a 
                href="https://github.com/naaltech/naal-meclis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
