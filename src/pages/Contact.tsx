import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with ACST. Contact our admissions office, academic departments, or general inquiries. We're here to help with your questions."
        keywords="ACST contact, admissions contact, phone, email, address, office hours"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6">Contact Us</h1>
              <p className="text-xl opacity-95">
                Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is this regarding?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-1">Main Campus</div>
                        <p className="text-sm text-muted-foreground">
                          123 University Avenue<br />
                          Boston, MA 02134<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-1">Phone</div>
                        <p className="text-sm text-muted-foreground">
                          Main: (617) 555-0100<br />
                          Admissions: (617) 555-0123
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-1">Email</div>
                        <p className="text-sm text-muted-foreground">
                          General: info@acst.edu<br />
                          Admissions: admissions@acst.edu
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-1">Office Hours</div>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-accent text-accent-foreground">
                  <h3 className="mb-3">Schedule a Visit</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Experience ACST firsthand. Schedule a campus tour to explore our facilities and meet our community.
                  </p>
                  <Button variant="outline" className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                    Book a Tour
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
