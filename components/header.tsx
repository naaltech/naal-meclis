"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Komisyonlar", href: "/#komisyonlar" },
    { name: "Program", href: "/#program" },
    { name: "Ekip", href: "/#ekip" },
    { name: "Kurallar", href: "/#kurallar" },
    { name: "SSS", href: "/#sss" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">naalmeclis</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-6 md:items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/kayit-ol" className={buttonVariants({ variant: "outline", className: "ml-2" })}>
            Başvuru Yap
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
            </Link>
            ))}
            <Link
              href="/kayit-ol"
              className={buttonVariants({ variant: "outline", className: "w-full" })}
              onClick={() => setMobileMenuOpen(false)}
            >
              Başvuru Yap
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
