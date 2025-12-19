import { Link } from "react-router-dom";
import { 
  Phone, 
  CheckCircle, 
  Wrench, 
  ThermometerSnowflake, 
  Wind, 
  Zap,
  Settings,
  RefreshCw,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const services = [
  {
    icon: Wrench,
    title: "AC Installation & Re-installation",
    description: "Professional installation of new ACs and re-installation when you move. We ensure proper placement, electrical connections, and optimal performance.",
    features: ["Window AC Installation", "Split AC Installation", "Proper pipe fitting", "Electrical setup", "Testing & optimization"],
    price: "Starting from ₹500"
  },
  {
    icon: ThermometerSnowflake,
    title: "AC Repair & Troubleshooting",
    description: "Quick diagnosis and repair of all AC problems. Our technicians can fix any issue - from compressor problems to PCB repairs.",
    features: ["Compressor repair", "PCB/Control board repair", "Fan motor issues", "Noise problems", "Cooling issues"],
    price: "Starting from ₹300"
  },
  {
    icon: Wind,
    title: "AC Gas Filling & Leakage Fix",
    description: "Low cooling? We check for gas leaks, fix them, and refill with the right refrigerant to restore optimal cooling performance.",
    features: ["Gas level check", "Leak detection", "Leak repair", "Gas refilling (R22/R32/R410A)", "Performance testing"],
    price: "Starting from ₹800"
  },
  {
    icon: Zap,
    title: "AC General Service",
    description: "Complete maintenance service to keep your AC running efficiently. Regular servicing extends AC life and reduces electricity bills.",
    features: ["Filter cleaning", "Coil cleaning", "Drain cleaning", "Gas pressure check", "Performance optimization"],
    price: "Starting from ₹400"
  },
  {
    icon: Settings,
    title: "Split AC Service",
    description: "Specialized service for all types of split ACs. We handle both indoor and outdoor units with expert care.",
    features: ["Indoor unit cleaning", "Outdoor unit service", "Copper pipe check", "Refrigerant check", "Complete maintenance"],
    price: "Starting from ₹500"
  },
  {
    icon: RefreshCw,
    title: "Window AC Service",
    description: "Complete window AC maintenance and repair. Keep your window AC running cool and quiet all year round.",
    features: ["Complete cleaning", "Motor lubrication", "Filter replacement", "Thermostat check", "Cabinet cleaning"],
    price: "Starting from ₹400"
  },
];

const process = [
  { step: "1", title: "Call Us", desc: "Contact us via phone or WhatsApp with your AC issue" },
  { step: "2", title: "Schedule Visit", desc: "We schedule a convenient time for our technician visit" },
  { step: "3", title: "Diagnosis", desc: "Our expert diagnoses the problem and explains the solution" },
  { step: "4", title: "Quick Fix", desc: "We fix the issue on spot with genuine parts" },
];

const Services = () => {
  return (
    <>
      <SEO 
        title="AC Services - Installation, Repair & Maintenance"
        description="Professional AC services in Tiruppur - Installation, Repair, Gas Filling, General Service. All brands serviced. Affordable prices starting from ₹300. Call now!"
        keywords="AC service Tiruppur, AC repair Tiruppur, AC installation Tiruppur, AC gas filling, split AC service, window AC repair, AC maintenance Tiruppur"
      />
      <Header />
      <FloatingButtons />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                Complete AC Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From installation to maintenance, we provide comprehensive AC services for all brands and types. Quality work at affordable prices.
              </p>
              <a href="tel:+919842365480">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow-green">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Service Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover-lift border-border group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-accent font-semibold">{service.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Simple 4-Step Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Transparency */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Transparent Pricing
              </h2>
              <p className="text-muted-foreground mb-8">
                We believe in honest, upfront pricing. Our technician will explain the issue and provide a clear quote before starting any work. No hidden charges, no surprises!
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-primary mb-2">₹300+</p>
                  <p className="text-sm text-muted-foreground">Service Visit</p>
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-primary mb-2">₹400+</p>
                  <p className="text-sm text-muted-foreground">General Service</p>
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-primary mb-2">₹800+</p>
                  <p className="text-sm text-muted-foreground">Gas Filling</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                *Prices may vary based on AC type, model, and issue complexity. Final price confirmed after diagnosis.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Need AC Service?</h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Call us now for quick and reliable service. We're available 7 days a week!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919842365480">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 98423 65480
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent font-bold">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
