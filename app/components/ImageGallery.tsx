import Image from 'next/image'

const images = [
  { src: '6.png', alt: 'Dashboard view' },
  { src: '1.png', alt: 'Sample tracking interface' },
  { src: '7.png', alt: 'Data analysis tools' },
  { src: '4.png', alt: 'Mobile app screenshot' },
]

export default function ImageGallery() {
  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-60 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

