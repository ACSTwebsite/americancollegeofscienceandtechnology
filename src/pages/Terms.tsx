import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="Read ACST's terms of use governing your access to and use of our website and services."
        keywords="ACST terms of use, terms and conditions, legal"
      />
      <Navigation />
      
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="mb-8">Terms of Use</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section>
                <h2 className="text-foreground mb-3">Acceptance of Terms</h2>
                <p>
                  By accessing and using the ACST website, you accept and agree to be bound by the terms and 
                  provisions of this agreement. If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Use of Website</h2>
                <p>You agree to use this website only for lawful purposes and in ways that do not:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Infringe upon the rights of others</li>
                  <li>Restrict or inhibit anyone's use of the website</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit any harmful or malicious code</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property of 
                  ACST or its content suppliers and is protected by intellectual property laws. You may not 
                  reproduce, distribute, or create derivative works without express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Disclaimer</h2>
                <p>
                  This website is provided "as is" without any representations or warranties. ACST makes no 
                  representations or warranties about the accuracy, reliability, completeness, or timeliness 
                  of the content.
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Limitation of Liability</h2>
                <p>
                  ACST shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages resulting from your access to or use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Your continued use of the website 
                  following any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-3">Contact</h2>
                <p>
                  For questions about these Terms of Use, please contact us at legal@acst.edu or (617) 555-0100.
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

export default Terms;
