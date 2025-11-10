import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import researchLabImage from '@/assets/research-lab.jpg';
import { Microscope, Cpu, Leaf, Rocket } from 'lucide-react';

const Research = () => {
  const centers = [
    {
      icon: Cpu,
      name: "Center for Artificial Intelligence",
      focus: "Machine Learning, Neural Networks, Natural Language Processing",
      description: "Pioneering research in AI applications across healthcare, finance, and autonomous systems."
    },
    {
      icon: Microscope,
      name: "Biotechnology Research Center",
      focus: "Genetic Engineering, Drug Development, Molecular Biology",
      description: "Advancing medical treatments and agricultural innovations through cutting-edge biotech research."
    },
    {
      icon: Leaf,
      name: "Sustainable Technology Institute",
      focus: "Renewable Energy, Climate Science, Green Engineering",
      description: "Developing solutions for environmental challenges and sustainable development."
    },
    {
      icon: Rocket,
      name: "Space & Robotics Lab",
      focus: "Aerospace Engineering, Robotics, Automation",
      description: "Exploring the frontiers of space technology and advanced robotics systems."
    }
  ];

  return (
    <>
      <SEO
        title="Research"
        description="Explore groundbreaking research at ACST. Learn about our research centers, ongoing projects, and opportunities for students and faculty."
        keywords="ACST research, research centers, innovation, projects, AI, biotechnology, sustainability"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6">Research & Innovation</h1>
              <p className="text-xl opacity-95">
                At ACST, research drives discovery. Our faculty and students work on cutting-edge projects 
                that address real-world challenges and push the boundaries of knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Research Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="mb-6">Leading Innovation</h2>
                <p className="text-muted-foreground mb-4">
                  Our research enterprise spans multiple disciplines, from artificial intelligence and 
                  biotechnology to sustainable energy and space exploration. We foster collaboration 
                  between departments and with industry partners worldwide.
                </p>
                <p className="text-muted-foreground mb-6">
                  With over $200 million in annual research funding, state-of-the-art facilities, and 
                  a culture of innovation, ACST provides unparalleled opportunities for groundbreaking 
                  discoveries.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">$200M+</div>
                    <div className="text-sm text-muted-foreground">Research Funding</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Research Centers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Active Projects</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={researchLabImage} 
                  alt="Students conducting research in modern laboratory" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Research Centers */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Research Centers</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {centers.map((center, index) => {
                const Icon = center.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-accent-foreground" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{center.name}</h3>
                    <div className="text-sm text-secondary font-medium mb-3">{center.focus}</div>
                    <p className="text-muted-foreground">{center.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Research Opportunities</h2>
              <p className="text-muted-foreground mb-12">
                Whether you're an undergraduate looking to gain research experience or a graduate student 
                pursuing advanced studies, ACST offers numerous opportunities to engage in meaningful research.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h3 className="mb-3">Undergraduate Research</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborate with faculty on cutting-edge projects and develop valuable research skills.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="mb-3">Graduate Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    Pursue advanced degrees while conducting original research in your field of interest.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="mb-3">Industry Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    Work on real-world problems through our extensive network of industry collaborators.
                  </p>
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

export default Research;
