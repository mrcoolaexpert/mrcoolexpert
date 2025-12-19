import { Link } from "react-router-dom";
import { CheckCircle, Target, Heart, Users, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import logo from "@/assets/mrcool-logo.jpeg";

const values = [
  { icon: Heart, title: "Customer First", desc: "Your satisfaction is our top priority. We treat every customer like family." },
  { icon: Award, title: "Quality Work", desc: "We never compromise on the quality of our service and use genuine parts." },
  { icon: Users, title: "Experienced Team", desc: "Our technicians are well-trained with years of hands-on experience." },
  { icon: Target, title: "Affordable Pricing", desc: "Transparent and competitive pricing with no hidden charges." },
];

const About = () => {
  return (
    <>
      <SEO 
        title="About Us - AC Service Experts"
        description="Learn about Mr. Cool Service - Your trusted AC service provider in Tiruppur. Experienced technicians, quality service, and customer satisfaction guaranteed."
      />
      <Header />
      <FloatingButtons />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                Your Trusted AC Partner in Tiruppur
              </h1>
              <p className="text-lg text-muted-foreground">
                Mr. Cool Service is dedicated to providing reliable, professional, and affordable AC services to homes and businesses across Tiruppur and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <img 
                  src={logo} 
                  alt="Mr. Cool Service Team" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-elevated"
                />
              </div>
              
              <div className="space-y-6 animate-fade-in-up stagger-2">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mr. Cool Service started with a simple mission: to provide honest, reliable, and affordable AC services to the people of Tiruppur. Over the years, we have grown to become one of the most trusted names in AC installation, repair, and maintenance in the region.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of experienced technicians is trained to handle all types of air conditioners - from window ACs to split ACs, from all major brands. We believe in doing the job right the first time, ensuring your AC runs efficiently for years to come.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {["All Brands Serviced", "Same Day Service", "Genuine Parts", "Warranty Support", "Affordable Rates", "24/7 Availability"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Target className="w-16 h-16 mx-auto text-accent mb-6" />
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted and reliable AC service provider in Tiruppur region by delivering exceptional service, honest advice, and affordable solutions. We aim to keep every home and office cool and comfortable while building long-lasting relationships with our customers.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl p-6 text-center hover-lift border border-border"
                >
                  <div className="w-14 h-14 mx-auto bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">Areas We Serve</h2>
              <p className="text-primary-foreground/80 mb-8">
                We proudly serve Tiruppur and all surrounding areas within a 15km radius, including:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Tiruppur", "Avinashi", "Palladam", "Mangalam", "Uthukuli", "Kangeyam", "Dharapuram", "Vellakovil", "Mulanur"].map((area, i) => (
                  <span 
                    key={i} 
                    className="bg-primary-foreground/10 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="text-accent-foreground/80 mb-8">Contact us today for reliable AC service!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919842365480">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent font-bold">
                  Get in Touch
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

export default About;
