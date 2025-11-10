import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read ACST's privacy policy to understand how we collect, use, and protect your personal information."
        keywords="ACST privacy policy, data protection, privacy"
      />
      <Navigation />
      
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="mb-8">Privacy Policy</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section>
                <h2 className="text-foreground mb-3">Introduction</h2>
                <p>
                  American College of Science & Technology ("ACST", "we", "us", or "our") is committed to 
                  protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and 
                  safeguard your information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Information We Collect</h2>
                <p>We may collect information about you in various ways, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Personal information you provide when submitting forms or applications</li>
                  <li>Academic records and transcripts</li>
                  <li>Contact information including email addresses and phone numbers</li>
                  <li>Usage data and analytics from your interaction with our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-3">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Process applications and admissions</li>
                  <li>Communicate with prospective and current students</li>
                  <li>Improve our educational services and website</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, 
                  no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute 
                  security.
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at privacy@acst.edu or 
                  (617) 555-0100.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
