import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">MyLabVerse</Link>
          <p className="mt-2">Empowering laboratories worldwide</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#product-info">Product Info</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} MyLabVerse. All rights reserved.</p>
      </div>
    </footer>
  )
}

