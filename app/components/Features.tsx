import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Beaker, ClipboardList, BarChart3, Shield } from 'lucide-react'

const features = [
  {
    icon: <Beaker className="h-8 w-8 mb-4" />,
    title: "Report Management",
    description: "Generate and manage lab reports with graphical data analysis, including trends like hemoglobin levels"
  },
  {
    icon: <ClipboardList className="h-8 w-8 mb-4" />,
    title: "Patient Tracking",
    description: "Keep track of patient history, referrals, and report progress with ease."
  },
  {
    icon: <BarChart3 className="h-8 w-8 mb-4" />,
    title: "Report Management",
    description: "Generate and manage lab reports with graphical data analysis"
  },
  {
    icon: <Shield className="h-8 w-8 mb-4" />,
    title: "Data Security",
    description: "Secure sensitive information with 256-bit encryption and role-based access controls"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

