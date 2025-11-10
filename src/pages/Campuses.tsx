import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const Campuses = () => {
  const campuses = [
    {
      name: "Main Campus",
      address: "123 University Avenue, Boston, MA 02134",
      phone: "(617) 555-0100",
      email: "main@acst.edu",
      description: "Our flagship campus featuring state-of-the-art research facilities, modern classrooms, and vibrant student life."
    },
    {
      name: "North Campus",
      address: "456 Innovation Drive, Cambridge, MA 02139",
      phone: "(617) 555-0200",
      email: "north@acst.edu",
      description: "Focused on advanced research and graduate programs, with specialized laboratories and innovation centers."
    },
    {
      name: "Technology Park Campus",
      address: "789 Tech Boulevard, Burlington, MA 01803",
      phone: "(617) 555-0300",
      email: "techpark@acst.edu",
      description: "Industry collaboration hub featuring incubator spaces, corporate partnerships, and applied research facilities."
    }
  ];

  return (
    <>
      <SEO
        title="Campuses"
        description="Explore ACST's multiple campus locations in the Boston area. Find campus maps, addresses, and contact information."
        keywords="ACST campus, locations, address, map, facilities"
      />
      <Navigation />
      
      <main>
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6">Our Campuses</h1>
              <p className="text-xl opacity-95">
                ACST operates multiple campuses across the greater Boston area, each designed to support 
                innovation, learning, and collaboration.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-8 max-w-4xl mx-auto">
              {campuses.map((campus, index) => (
                <Card key={index} className="p-8">
                  <h2 className="mb-4">{campus.name}</h2>
                  <p className="text-muted-foreground mb-6">{campus.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium text-sm mb-1">Address</div>
                        <p className="text-sm text-muted-foreground">{campus.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium text-sm mb-1">Phone</div>
                        <p className="text-sm text-muted-foreground">{campus.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium text-sm mb-1">Email</div>
                        <p className="text-sm text-muted-foreground">{campus.email}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Campuses;
