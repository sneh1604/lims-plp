import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-primary text-primary-foreground">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">MyLabVerse</Link>
        <ul className="flex space-x-4">
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#product-info">Product Info</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <Button variant="secondary">Get Started</Button>
      </nav>
    </header>
  )
}

