import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, TrendingUp, Users } from 'lucide-react';

const Careers = () => {
  return (
    <>
      <SEO
        title="Careers & Internships"
        description="Explore career services, internship opportunities, and professional development resources at ACST. Launch your career with industry connections."
        keywords="ACST careers, internships, career services, job placement, professional development"
      />
      <Navigation />
      
      <main>
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6">Careers & Professional Development</h1>
              <p className="text-xl opacity-95">
                Our Career Services team is committed to helping students and alumni achieve their professional goals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-accent-foreground" size={32} />
                </div>
                <h3 className="mb-3">Career Counseling</h3>
                <p className="text-muted-foreground">
                  One-on-one guidance from experienced career advisors to help you navigate your professional journey.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-secondary-foreground" size={32} />
                </div>
                <h3 className="mb-3">Internship Programs</h3>
                <p className="text-muted-foreground">
                  Connect with top companies through our extensive network of industry partnerships and internship opportunities.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary-foreground" size={32} />
                </div>
                <h3 className="mb-3">Networking Events</h3>
                <p className="text-muted-foreground">
                  Regular career fairs, employer meet-and-greets, and alumni networking events throughout the year.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Visit Career Center
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Careers;
