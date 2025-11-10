import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MapPinned, Globe, Building2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

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
                  <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-2">Main Campus - Abuja</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          3rd Floor, Suite D3<br />
                          The White House, WUNO PLAZA<br />
                          Ibrahim Waziri Crescent,<br />
                          Gudu District, Apo<br />
                          Abuja FCT
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-2">Phone</div>
                        <a 
                          href="tel:+2348062650766" 
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          +234 806 265 0766
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-2">Email</div>
                        <a 
                          href="mailto:admissions@americancollege.ng" 
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          admissions@americancollege.ng
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-medium mb-2">Website</div>
                        <a 
                          href="https://www.americancollege.ng" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          www.americancollege.ng
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="text-accent" size={24} />
                    <h3 className="text-lg font-semibold">Other Campuses</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['Lagos', 'Warri', 'Akure', 'Benin', 'Ekiti', 'Kaduna'].map((campus) => (
                      <div 
                        key={campus}
                        className="flex items-center gap-2"
                      >
                        <MapPinned size={16} className="text-accent/70" />
                        <span className="text-muted-foreground">{campus}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-accent/10 border-accent/20">
                  <h3 className="mb-3 font-semibold">Visit Our Campus</h3>
                  <p className="text-sm mb-4 text-muted-foreground">
                    Experience ACST firsthand. Schedule a campus tour to explore our facilities and meet our faculty.
                  </p>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link to="/contact">Schedule a Visit</Link>
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
