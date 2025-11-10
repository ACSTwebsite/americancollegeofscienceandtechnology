import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-campus.jpg';
import graduationImage from '@/assets/graduation.jpg';
import { GraduationCap, Users, Globe, Award, ArrowRight, Rocket, Laptop, Users2, Building2, Heart, Briefcase, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "American College of Science & Technology",
    "alternateName": "ACST",
    "url": "https://americancollege.ng",
    "logo": "https://i.ibb.co/pj3yN3zV/American-College-Of-Science-Technology.jpg",
    "description": "ACST is Nigeria's premier institution for science and technology education, offering innovative programs across multiple campuses including Lagos, Warri, Akure, Benin, Ekiti, and Kaduna.",
    "sameAs": [
      "https://americancollege.ng",
      "https://www.facebook.com/americancollegeng",
      "https://twitter.com/americancollegeng",
      "https://www.linkedin.com/school/americancollegeng"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Suite D3, The White House, WUNO PLAZA, Ibrahim Waziri Crescent",
      "addressLocality": "Gudu District, Apo",
      "addressRegion": "Abuja",
      "addressCountry": "NG"
    },
    "location": {
      "@type": "Place",
      "name": "Main Campus - Abuja",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3rd Floor, Suite D3, The White House, WUNO PLAZA, Ibrahim Waziri Crescent",
        "addressLocality": "Gudu District, Apo",
        "addressRegion": "Abuja",
        "addressCountry": "NG"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348062650766",
      "contactType": "admissions",
      "email": "admissions@americancollege.ng"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Academic Programs",
      "itemListElement": [
        {
          "@type": "EducationalOccupationalProgram",
          "name": "Science Programs",
          "description": "Comprehensive science programs including Physics, Chemistry, and Biology"
        },
        {
          "@type": "EducationalOccupationalProgram",
          "name": "Technology Programs",
          "description": "Advanced technology programs in Computer Science, IT, and Software Engineering"
        },
        {
          "@type": "EducationalOccupationalProgram",
          "name": "Engineering Programs",
          "description": "Engineering programs across various disciplines"
        }
      ]
    }
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: "50+ Programs",
      description: "Cutting-edge undergraduate and graduate programs in science and technology"
    },
    {
      icon: Users,
      title: "15,000+ Students",
      description: "Diverse community of learners from 80+ countries worldwide"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Ranked among top 100 universities for STEM education globally"
    },
    {
      icon: Award,
      title: "98% Success Rate",
      description: "Exceptional career outcomes with industry-leading job placement"
    }
  ];

  return (
    <>
      <SEO
        title="American College of Science & Technology (ACST) - Nigeria's Leading Institution for Science & Technology Education"
        description="ACST is Nigeria's premier institution for science and technology education, with campuses in Abuja, Lagos, Warri, Akure, Benin, Ekiti, and Kaduna. Join our community of future innovators and leaders in STEM education."
        keywords="ACST Nigeria, science college Nigeria, technology education, STEM university Nigeria, research institution, computer science, engineering, biotechnology, Abuja education, Lagos campus, Warri campus, Akure campus, Benin campus, Ekiti campus, Kaduna campus"
        ogImage="https://i.ibb.co/pj3yN3zV/American-College-Of-Science-Technology.jpg"
        canonical="https://americancollege.ng"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-primary-foreground">
              <h1 className="mb-6 animate-fade-in">
                Shape Tomorrow's Innovations Today
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
                Join a community of innovators, researchers, and leaders at America's premier 
                institution for science and technology education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why ACST */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose ACST?</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Choosing the right university is a life-changing decision — one that shapes your future, your career, and the person you become. 
                At the American College of Science and Technology (ACST), we make that choice an easy one.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
                Here's why forward-thinking students across Africa and beyond choose ACST as the launchpad for their success:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Rocket className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Future-Focused Education</h3>
                <p className="text-muted-foreground">
                  At ACST, we go beyond the traditional classroom. Our curriculum is designed to equip you with the knowledge, 
                  creativity, and problem-solving skills needed to thrive in a rapidly evolving world. We blend cutting-edge 
                  technology with practical learning, ensuring every graduate is ready for the challenges and opportunities of the future.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Laptop className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Learning by Doing</h3>
                <p className="text-muted-foreground">
                  We believe the best way to learn is to experience. Every program at ACST integrates hands-on training, 
                  real-world projects, and industry collaborations that prepare you for life after graduation. By the time 
                  you complete your degree, you'll have the confidence and competence employers are looking for.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users2 className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inspiring Faculty and Mentorship</h3>
                <p className="text-muted-foreground">
                  Our faculty members are more than educators — they're leaders, innovators, and mentors. With years of 
                  academic and professional expertise, they are committed to guiding you toward excellence, supporting your 
                  ambitions, and helping you discover your full potential.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Building2 className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">State-of-the-Art Facilities</h3>
                <p className="text-muted-foreground">
                  Our modern learning environment is built for innovation. From fully equipped science and technology labs 
                  to digital classrooms and collaborative study spaces, ACST provides access to world-class facilities that 
                  enhance both learning and creativity.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">A Supportive, Inclusive Community</h3>
                <p className="text-muted-foreground">
                  ACST is more than a university — it's a community where every student belongs. We value diversity, 
                  collaboration, and personal growth. Here, you'll find lifelong friends, supportive staff, and a network 
                  of peers who share your drive and determination.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Development and Global Opportunities</h3>
                <p className="text-muted-foreground">
                  Our focus doesn't end at graduation. With dedicated career support, internship programs, and partnerships 
                  with leading organizations, ACST ensures you're ready to compete globally and succeed anywhere. Many of 
                  our graduates go on to make an impact across industries and continents.
                </p>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="p-8 max-w-2xl mx-auto bg-accent text-accent-foreground">
                <div className="w-16 h-16 bg-accent-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Accessible and Affordable Education</h3>
                <p className="text-center">
                  We believe that financial limitations should never stand in the way of your dreams. ACST offers 
                  scholarships, flexible payment plans, and financial aid options to make quality education accessible to all.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Discover Your Path</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose from over 50 innovative programs designed to prepare you for leadership 
                  in the rapidly evolving fields of science and technology.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Computer Science", students: "2,500+", highlight: "AI & Machine Learning" },
                  { title: "Engineering", students: "3,200+", highlight: "Robotics & Automation" },
                  { title: "Biotechnology", students: "1,800+", highlight: "Genetic Engineering" }
                ].map((program, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <div className="text-sm text-secondary font-medium mb-3">{program.students} students</div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Specializations in {program.highlight} and more
                    </p>
                    <Link to="/programs" className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1">
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" variant="outline" asChild>
                  <Link to="/programs">View All Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={graduationImage} 
                  alt="ACST graduates celebrating at commencement ceremony" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="mb-6">Your Success is Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  Our graduates are leading innovation at top companies, conducting groundbreaking 
                  research, and making meaningful contributions to society across the globe.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-lg">98%</span>
                    </div>
                    <div>
                      <div className="font-semibold">Career Success</div>
                      <div className="text-sm text-muted-foreground">Employed or in graduate school within 6 months</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary-foreground font-bold text-lg">$85K</span>
                    </div>
                    <div>
                      <div className="font-semibold">Average Starting Salary</div>
                      <div className="text-sm text-muted-foreground">Among the highest for STEM graduates</div>
                    </div>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <Link to="/admissions">Start Your Journey</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Ready to Transform Your Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Join thousands of students who are already shaping the future of science and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
