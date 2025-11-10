import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, FileText, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form with your personal and academic information."
    },
    {
      icon: Users,
      title: "Required Documents",
      description: "Upload transcripts, test scores, recommendation letters, and personal statement."
    },
    {
      icon: Calendar,
      title: "Application Review",
      description: "Our admissions committee carefully reviews all applications holistically."
    },
    {
      icon: CheckCircle,
      title: "Decision & Enrollment",
      description: "Receive your admission decision and complete enrollment if accepted."
    }
  ];

  const scholarships = [
    {
      name: "Presidential Scholarship",
      amount: "Full Tuition",
      description: "Merit-based scholarship for exceptional academic achievers with GPA 3.8+"
    },
    {
      name: "Dean's Excellence Award",
      amount: "$20,000/year",
      description: "Recognizes outstanding academic performance and leadership potential"
    },
    {
      name: "STEM Innovation Grant",
      amount: "$15,000/year",
      description: "For students pursuing STEM degrees with demonstrated passion for innovation"
    },
    {
      name: "Diversity Scholarship",
      amount: "$10,000/year",
      description: "Supporting diverse perspectives and backgrounds in our community"
    }
  ];

  return (
    <>
      <SEO
        title="Admissions"
        description="Learn how to apply to ACST. Explore admission requirements, deadlines, scholarships, and financial aid options for undergraduate and graduate programs."
        keywords="ACST admissions, apply, requirements, scholarships, financial aid, deadlines"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6">Admissions</h1>
              <p className="text-xl opacity-95">
                Join a community of innovative thinkers and future leaders. We're looking for 
                students who are passionate about science, technology, and making a difference.
              </p>
              <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/apply">Start Your Application</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Application Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-accent-foreground" size={28} />
                    </div>
                    <div className="text-sm font-semibold text-accent mb-2">Step {index + 1}</div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-center">Admission Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="mb-4">Undergraduate</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>High school diploma or equivalent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Minimum GPA of 3.0</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>SAT/ACT scores (optional for 2024)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Personal statement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Two letters of recommendation</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4">Graduate</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Bachelor's degree from accredited institution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Minimum GPA of 3.0</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>GRE scores (varies by program)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Statement of purpose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Three letters of recommendation</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-4">Scholarships & Financial Aid</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're committed to making quality education accessible. Over 85% of our students receive 
              some form of financial assistance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{scholarship.name}</h3>
                    <span className="text-accent font-bold text-sm bg-accent/10 px-3 py-1 rounded">
                      {scholarship.amount}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Ready to Begin?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-95">
              Your journey to excellence starts here. Apply today and take the first step toward achieving your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
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

export default Admissions;
