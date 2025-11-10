import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Target, Eye, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "American College of Science & Technology",
    "alternateName": "ACST",
    "url": window.location.origin,
    "description": "Leading institution in science and technology education"
  };

  return (
    <>
      <SEO
        title="About ACST"
        description="Learn about ACST's mission, vision, and commitment to excellence in science and technology education. Discover our values and what makes us a leading institution."
        keywords="ACST about, mission, vision, values, educational excellence"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6">About ACST</h1>
              <p className="text-xl opacity-95">
                For over 50 years, the American College of Science & Technology has been at the forefront of education, 
                research, and innovation in science and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-accent-foreground" size={24} />
                </div>
                <h3 className="mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide world-class education in science and technology, fostering innovation, 
                  critical thinking, and ethical leadership to address global challenges.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-secondary-foreground" size={24} />
                </div>
                <h3 className="mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a globally recognized institution that transforms lives through cutting-edge research, 
                  innovative teaching, and meaningful community engagement.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-primary-foreground" size={24} />
                </div>
                <h3 className="mb-4">Core Values</h3>
                <p className="text-muted-foreground">
                  Excellence, integrity, diversity, innovation, and sustainability guide everything we do, 
                  from education and research to community service.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Faculty</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Programs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Job Placement</div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="mb-8 text-center">Our History</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Founded in 1970, ACST began with a vision to create a premier institution focused on 
                science and technology education. What started with just 200 students has grown into a 
                thriving community of over 15,000 students from more than 80 countries.
              </p>
              <p>
                Throughout our history, we've remained committed to excellence in teaching, groundbreaking 
                research, and meaningful community engagement. Our graduates have gone on to become leaders 
                in industry, academia, and public service worldwide.
              </p>
              <p>
                Today, ACST continues to push boundaries, embracing new technologies and pedagogical 
                approaches while staying true to our core mission of empowering minds and advancing knowledge.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
