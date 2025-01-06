import { CheckCircle2 } from 'lucide-react'

export default function ProductInfo() {
  return (
    <section id="product-info" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Product Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">MyLabVerse: Your Complete Lab Solution</h3>
            <p className="mb-6">MyLabVerse is a comprehensive Laboratory Information Management System (LIMS) designed to streamline lab operations, enhance productivity, and deliver meaningful insights. With intuitive features and a user-friendly interface, it simplifies complex workflows and ensures data security.
            </p>
            <ul className="space-y-2">
              {['Cloud-based solution', 'User-friendly interface', 'Customizable workflows', 'Real-time collaboration', 'Secure data storage'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
            <ul className="space-y-2">
              <li><strong>Deployment:</strong> Cloud-based or On-premises</li>
              <li><strong>Supported Platforms:</strong> Windows, macOS, Linux</li>
              <li><strong>Mobile App:</strong> iOS and Android</li>
              <li><strong>Data Export:</strong> CSV, Excel, PDF</li>
              <li><strong>API:</strong> RESTful API for integrations</li>
              <li><strong>Security:</strong> 256-bit encryption, role-based access control</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

