import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="py-20 text-primary-foreground relative"
      style={{
        background: "url('8.png') center/cover no-repeat",
        backgroundBlendMode: "overlay", // Ensure that the gradient blends with the image
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-100"
        style={{
          background: "rgba(0, 0, 0, 0.5)", // Apply a black overlay with 30% opacity
        }}
      ></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6">Revolutionize Your Lab Management</h1>
        <p className="text-xl mb-8">Streamline operations, enhance productivity, and ensure compliance with MyLabVerse</p>
        <a href="#contact">
          <Button size="lg">Schedule a Demo</Button>
        </a>
      </div>
    </section>
  )
}
