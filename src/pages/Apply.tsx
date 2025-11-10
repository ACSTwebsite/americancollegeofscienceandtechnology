import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  nationality: z.string().min(1, "Nationality is required"),
  address: z.string().min(10, "Please provide a complete address"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(1, "Country is required"),
  postalCode: z.string().min(3, "Postal code is required"),
});

const programInfoSchema = z.object({
  programLevel: z.string().min(1, "Please select a program level"),
  programName: z.string().min(1, "Please select a program"),
  startTerm: z.string().min(1, "Please select a start term"),
  studyMode: z.string().min(1, "Please select a study mode"),
  previousEducation: z.string().min(10, "Please describe your previous education"),
  workExperience: z.string().optional(),
  whyACST: z.string().min(50, "Please provide at least 50 characters explaining your motivation"),
});

type PersonalInfo = z.infer<typeof personalInfoSchema>;
type ProgramInfo = z.infer<typeof programInfoSchema>;

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalData, setPersonalData] = useState<PersonalInfo | null>(null);
  const { toast } = useToast();

  const personalForm = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: personalData || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      nationality: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
    },
  });

  const programForm = useForm<ProgramInfo>({
    resolver: zodResolver(programInfoSchema),
    defaultValues: {
      programLevel: "",
      programName: "",
      startTerm: "",
      studyMode: "",
      previousEducation: "",
      workExperience: "",
      whyACST: "",
    },
  });

  const onPersonalInfoSubmit = (data: PersonalInfo) => {
    setPersonalData(data);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onProgramInfoSubmit = (data: ProgramInfo) => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalSubmit = () => {
    toast({
      title: "Application Submitted!",
      description: "Your application has been received. We'll contact you within 5 business days.",
    });
    
    // Reset forms and step
    setTimeout(() => {
      personalForm.reset();
      programForm.reset();
      setPersonalData(null);
      setCurrentStep(1);
    }, 2000);
  };

  const steps = [
    { number: 1, title: "Personal Information" },
    { number: 2, title: "Program Selection" },
    { number: 3, title: "Review & Submit" },
  ];

  return (
    <>
      <SEO
        title="Apply Now - American College of Science & Technology"
        description="Submit your application to ACST. Complete our multi-step application form to join our world-class academic programs."
        keywords="apply ACST, college application, admission form, enrollment"
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/5">
        <Navigation />
        
        <main className="flex-1 pt-20">
          {/* Progress Steps */}
          <div className="bg-primary/5 border-b border-primary/10">
            <div className="container mx-auto px-6 py-8">
              <div className="flex justify-between items-center max-w-3xl mx-auto">
                {steps.map((step, idx) => (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                          currentStep > step.number
                            ? "bg-accent text-white"
                            : currentStep === step.number
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.number ? <Check className="w-6 h-6" /> : step.number}
                      </div>
                      <span className={`mt-2 text-sm font-medium ${currentStep >= step.number ? "text-primary" : "text-muted-foreground"}`}>
                        {step.title}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={`h-1 flex-1 mx-4 rounded ${currentStep > step.number ? "bg-accent" : "bg-muted"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-12">
            <div className="max-w-3xl mx-auto">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
                  <h2 className="text-3xl font-bold mb-2 text-primary">Personal Information</h2>
                  <p className="text-muted-foreground mb-8">Please provide your personal details accurately.</p>

                  <Form {...personalForm}>
                    <form onSubmit={personalForm.handleSubmit(onPersonalInfoSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={personalForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={personalForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+1 234 567 8900" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={personalForm.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="nationality"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nationality *</FormLabel>
                              <FormControl>
                                <Input placeholder="United States" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={personalForm.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Street Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main Street" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-3 gap-6">
                        <FormField
                          control={personalForm.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City *</FormLabel>
                              <FormControl>
                                <Input placeholder="New York" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country *</FormLabel>
                              <FormControl>
                                <Input placeholder="United States" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postal Code *</FormLabel>
                              <FormControl>
                                <Input placeholder="10001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-end pt-6">
                        <Button type="submit" size="lg" className="gap-2">
                          Next Step <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}

              {/* Step 2: Program Selection */}
              {currentStep === 2 && (
                <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
                  <h2 className="text-3xl font-bold mb-2 text-primary">Program Selection</h2>
                  <p className="text-muted-foreground mb-8">Choose your desired program and provide additional information.</p>

                  <Form {...programForm}>
                    <form onSubmit={programForm.handleSubmit(onProgramInfoSubmit)} className="space-y-6">
                      <FormField
                        control={programForm.control}
                        name="programLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Program Level *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select program level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                                <SelectItem value="graduate">Graduate (Master's)</SelectItem>
                                <SelectItem value="doctorate">Doctorate (PhD)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={programForm.control}
                        name="programName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Program Name *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cs">Computer Science</SelectItem>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="business">Business Administration</SelectItem>
                                <SelectItem value="biology">Biological Sciences</SelectItem>
                                <SelectItem value="physics">Physics</SelectItem>
                                <SelectItem value="chemistry">Chemistry</SelectItem>
                                <SelectItem value="mathematics">Mathematics</SelectItem>
                                <SelectItem value="psychology">Psychology</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={programForm.control}
                          name="startTerm"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Start Term *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select term" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="fall-2025">Fall 2025</SelectItem>
                                  <SelectItem value="spring-2026">Spring 2026</SelectItem>
                                  <SelectItem value="summer-2026">Summer 2026</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={programForm.control}
                          name="studyMode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Study Mode *</FormLabel>
                              <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4 pt-2">
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="full-time" id="full-time" />
                                    <Label htmlFor="full-time">Full-time</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="part-time" id="part-time" />
                                    <Label htmlFor="part-time">Part-time</Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={programForm.control}
                        name="previousEducation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Previous Education *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your educational background, institutions attended, and degrees earned..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={programForm.control}
                        name="workExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Experience (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe any relevant work experience..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={programForm.control}
                        name="whyACST"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Why do you want to study at ACST? *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your motivation and goals (minimum 50 characters)..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-between pt-6">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          onClick={() => setCurrentStep(1)}
                          className="gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" /> Previous
                        </Button>
                        <Button type="submit" size="lg" className="gap-2">
                          Review Application <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}

              {/* Step 3: Review & Submit */}
              {currentStep === 3 && personalData && (
                <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
                  <h2 className="text-3xl font-bold mb-2 text-primary">Review Your Application</h2>
                  <p className="text-muted-foreground mb-8">Please review your information before submitting.</p>

                  <div className="space-y-8">
                    {/* Personal Information Review */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-primary">Personal Information</h3>
                        <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                          Edit
                        </Button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 bg-muted/30 p-6 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground">Full Name</p>
                          <p className="font-medium">{personalData.firstName} {personalData.lastName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{personalData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">{personalData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Date of Birth</p>
                          <p className="font-medium">{personalData.dateOfBirth}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Nationality</p>
                          <p className="font-medium">{personalData.nationality}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-muted-foreground">Address</p>
                          <p className="font-medium">{personalData.address}, {personalData.city}, {personalData.country} {personalData.postalCode}</p>
                        </div>
                      </div>
                    </div>

                    {/* Program Information Review */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-primary">Program Selection</h3>
                        <Button variant="ghost" size="sm" onClick={() => setCurrentStep(2)}>
                          Edit
                        </Button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 bg-muted/30 p-6 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground">Program Level</p>
                          <p className="font-medium capitalize">{programForm.getValues("programLevel")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Program Name</p>
                          <p className="font-medium capitalize">{programForm.getValues("programName")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Start Term</p>
                          <p className="font-medium">{programForm.getValues("startTerm")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Study Mode</p>
                          <p className="font-medium capitalize">{programForm.getValues("studyMode")}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-muted-foreground">Previous Education</p>
                          <p className="font-medium">{programForm.getValues("previousEducation")}</p>
                        </div>
                        {programForm.getValues("workExperience") && (
                          <div className="md:col-span-2">
                            <p className="text-sm text-muted-foreground">Work Experience</p>
                            <p className="font-medium">{programForm.getValues("workExperience")}</p>
                          </div>
                        )}
                        <div className="md:col-span-2">
                          <p className="text-sm text-muted-foreground">Why ACST?</p>
                          <p className="font-medium">{programForm.getValues("whyACST")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Submit */}
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <input type="checkbox" id="terms" className="mt-1" required />
                        <label htmlFor="terms" className="text-sm">
                          I confirm that all information provided is accurate and complete. I have read and agree to the{" "}
                          <a href="/terms" className="text-accent hover:underline">Terms of Use</a> and{" "}
                          <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setCurrentStep(2)}
                        className="gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" /> Previous
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        onClick={handleFinalSubmit}
                        className="gap-2"
                      >
                        <Check className="w-4 h-4" /> Submit Application
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Apply;
