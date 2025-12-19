import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Mr. Cool Service - AC service provider in Tiruppur. Learn how we protect your personal information."
      />
      <Header />
      <FloatingButtons />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground">
                    When you contact us for AC services, we may collect the following information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Your name and contact details (phone number, email)</li>
                    <li>Your address for service visits</li>
                    <li>Details about your AC unit and service requirements</li>
                    <li>Payment information for completed services</li>
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground">
                    We use the information collected to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Provide and improve our AC services</li>
                    <li>Contact you regarding service appointments</li>
                    <li>Send service reminders and follow-ups</li>
                    <li>Process payments for our services</li>
                    <li>Respond to your inquiries and support needs</li>
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Information Security</h2>
                  <p className="text-muted-foreground">
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties. Your information is used solely for providing our AC services to you.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Rights</h2>
                  <p className="text-muted-foreground">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Request access to your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4 text-muted-foreground">
                    <p><strong>Mr. Cool Service</strong></p>
                    <p>Phone: +91 98423 65480</p>
                    <p>Email: mrcoolservicetiruppur@gmail.com</p>
                    <p>Location: Tiruppur, Tamil Nadu</p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
