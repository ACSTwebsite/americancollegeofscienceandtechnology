import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { GraduationCap, BookOpen, Rocket, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DegreePrograms = [
  {
    category: "Business and Management",
    programs: [
      "MBA (With Areas of Specializations)",
      "MBA/MSc Project Management",
      "MBA/MSc Management of Information Systems",
      "MBA/MSc Tourism and Hospitality Management",
      "MBA/MSc Banking and Finance",
      "MBA/MSc Human Resources Management",
      "MBA/MSc International Trade and Business",
      "MBA/MSc Marketing Management",
      "MBA/MSc Enterprise, Risk Management and Business Transformation",
      "MBA/MSc Global Business Administration",
      "MBA Education Leadership",
      "MBA/MSc Media & Entertainment",
      "MBA/MSc Global Banking & Finance",
      "MBA/MSc Renewable Energy & Sustainability",
      "MBA/MA Social Work"
    ]
  },
  {
    category: "Science and Technology",
    programs: [
      "Master of Science in Data Science",
      "Master of Science in Cybersecurity",
      "MSc Industrial Engineering",
      "MSc Civil Engineering (with or without Thesis)",
      "MSc Software Engineering (with or without Thesis)",
      "MSc Mechanical Engineering (with Thesis)",
      "MSc Energy and Sustainable Development"
    ]
  },
  {
    category: "Law and International Relations",
    programs: [
      "LLM (Law)",
      "LLM International Business Law",
      "LLM Dispute Resolution, Reconciliation and Arbitration",
      "MSc International Relations",
      "MSc Law and Corporate Administration",
      "MA Diplomacy and Conflict Management"
    ]
  },
  {
    category: "Health and Social Sciences",
    programs: [
      "MSc Health Care Administration",
      "MSc Gender Studies",
      "MSc Social Psychology",
      "MSc Public Relations",
      "MBA/MSc Health & Safety Leadership"
    ]
  }
];

const PhDPrograms = [
  "PhD in Artificial Intelligence",
  "PhD/DBA in Business Management",
  "PhD in Management Information Systems",
  "PhD in Tourism and Hospitality Management",
  "PhD in Construction management",
  "PhD in Educational Science (Administration)",
  "PhD in Politics and International Studies",
  "PhD in Psychology"
];

const ProfessionalCourses = [
  "Software Development",
  "Cloud Computing",
  "Network Security",
  "Robotics",
  "Data Analytics",
  "Entrepreneurship"
];

const UndergraduateFields = [
  {
    category: "Business and Communication",
    fields: ["Business", "Management", "Accounting", "Marketing", "Communication", "Politics"]
  },
  {
    category: "Technology and Engineering",
    fields: ["Engineering", "Science", "Artificial Intelligence", "Information Technology"]
  },
  {
    category: "Law and Diplomacy",
    fields: ["Law", "Criminology", "Diplomacy"]
  },
  {
    category: "Healthcare",
    fields: ["Medicine", "Nursing", "Pharmacy", "Physiotherapy", "Clinical Psychology"]
  }
];

const Programs = () => {
  return (
    <>
      <SEO 
        title="Academic Programs | ACST"
        description="Explore our wide range of international degree pathway programs across various fields of science and technology."
      />
      
      {/* Hero Section */}
      <div className="bg-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-accent text-accent-foreground mb-4">Over 50+ Programs</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-lg text-muted-foreground">
              In association with over 50 top universities and colleges worldwide, ACST offers a wide range of international degree pathway programs across various fields of science and technology.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Undergraduate Programs */}
        <Card className="p-8 mb-12 border-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Degree Programs</h2>
              <p className="text-muted-foreground">Foundation for your future career</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {UndergraduateFields.map((field) => (
              <Card className="p-6 hover:border-accent/50 transition-colors" key={field.category}>
                <h3 className="font-semibold text-lg mb-3">{field.category}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {field.fields.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Card>

        {/* Graduate Programs */}
        <Card className="p-8 mb-12 border-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Graduate Programs</h2>
              <p className="text-muted-foreground">Advance your expertise</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {DegreePrograms.map((category, index) => (
              <AccordionItem value={`category-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-medium hover:text-accent">
                  {category.category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-4 pl-4">
                    {category.programs.map((program) => (
                      <div key={program} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                        {program}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* PhD Programs */}
        <Card className="p-8 mb-12 border-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Doctoral Programs</h2>
              <p className="text-muted-foreground">Lead research and innovation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {PhDPrograms.map((program) => (
              <Card key={program} className="p-4 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                  <span className="text-muted-foreground">{program}</span>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Professional Development */}
        <Card className="p-8 border-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Professional Development</h2>
              <p className="text-muted-foreground">Enhance your skills</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {ProfessionalCourses.map((course) => (
              <Card className="p-6 hover:border-accent/50 transition-colors group" key={course}>
                <h3 className="font-medium text-center group-hover:text-accent transition-colors">{course}</h3>
              </Card>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards an exceptional education. Our admissions team is here to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-accent/20 hover:bg-accent/10">
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
