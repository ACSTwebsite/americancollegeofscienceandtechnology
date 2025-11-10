import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: "Computer Science",
      level: "Bachelor of Science",
      duration: "4 years",
      description: "Master programming, algorithms, artificial intelligence, and software development in our comprehensive CS program.",
      highlights: ["AI & Machine Learning", "Software Engineering", "Cybersecurity"]
    },
    {
      title: "Data Science",
      level: "Master of Science",
      duration: "2 years",
      description: "Learn to extract insights from complex data using advanced analytics, machine learning, and visualization techniques.",
      highlights: ["Big Data Analytics", "Statistical Modeling", "Business Intelligence"]
    },
    {
      title: "Electrical Engineering",
      level: "Bachelor of Science",
      duration: "4 years",
      description: "Design and develop electrical systems, from microelectronics to power generation and renewable energy.",
      highlights: ["Circuit Design", "Power Systems", "Electronics"]
    },
    {
      title: "Biotechnology",
      level: "Bachelor of Science",
      duration: "4 years",
      description: "Explore the intersection of biology and technology to develop innovative solutions for healthcare and agriculture.",
      highlights: ["Genetic Engineering", "Bioinformatics", "Drug Development"]
    },
    {
      title: "Mechanical Engineering",
      level: "Bachelor of Science",
      duration: "4 years",
      description: "Learn to design, analyze, and manufacture mechanical systems from robotics to aerospace applications.",
      highlights: ["Robotics", "Thermodynamics", "CAD/CAM"]
    },
    {
      title: "Environmental Science",
      level: "Bachelor of Science",
      duration: "4 years",
      description: "Study ecosystems, climate change, and sustainability to address critical environmental challenges.",
      highlights: ["Climate Science", "Conservation", "Sustainability"]
    }
  ];

  return (
    <>
      <SEO
        title="Academic Programs"
        description="Explore ACST's undergraduate and graduate programs in science, technology, and engineering. Find the perfect program to launch your career."
        keywords="ACST programs, degrees, computer science, engineering, biotechnology, data science"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6">Academic Programs</h1>
              <p className="text-xl opacity-95">
                Choose from over 50 innovative programs designed to prepare you for success in 
                the rapidly evolving fields of science and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-accent-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.level}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 flex-grow">{program.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-secondary" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Award size={16} className="text-secondary mt-0.5" />
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/admissions">Learn More</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards an exceptional education. Our admissions team is here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Programs;
