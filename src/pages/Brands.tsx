import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const brands = [
  { name: "LG", category: "Korean Brand" },
  { name: "Samsung", category: "Korean Brand" },
  { name: "Voltas", category: "Indian Brand" },
  { name: "Blue Star", category: "Indian Brand" },
  { name: "Daikin", category: "Japanese Brand" },
  { name: "Hitachi", category: "Japanese Brand" },
  { name: "Panasonic", category: "Japanese Brand" },
  { name: "Carrier", category: "American Brand" },
  { name: "Godrej", category: "Indian Brand" },
  { name: "Whirlpool", category: "American Brand" },
  { name: "Lloyd", category: "Indian Brand" },
  { name: "Haier", category: "Chinese Brand" },
  { name: "Mitsubishi", category: "Japanese Brand" },
  { name: "O General", category: "Japanese Brand" },
  { name: "IFB", category: "Indian Brand" },
  { name: "Onida", category: "Indian Brand" },
];

const Brands = () => {
  return (
    <>
      <SEO 
        title="Brands We Service - All AC Brands"
        description="Mr. Cool Service repairs and maintains all AC brands including LG, Samsung, Voltas, Blue Star, Daikin, Hitachi, Panasonic, Carrier and more in Tiruppur."
        keywords="LG AC service Tiruppur, Samsung AC repair, Voltas AC service, Daikin AC repair, AC brands service Tiruppur"
      />
      <Header />
      <FloatingButtons />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Brands We Service</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                All AC Brands, One Expert Team
              </h1>
              <p className="text-lg text-muted-foreground">
                Our technicians are trained to service all major AC brands. Whatever brand you own, we've got you covered with quality repairs and maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl p-6 text-center hover-lift border border-border group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-20 h-20 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <span className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
                      {brand.name.substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{brand.name}</h3>
                  <p className="text-xs text-muted-foreground">{brand.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Brands Message */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Don't See Your Brand?
              </h2>
              <p className="text-muted-foreground mb-8">
                We service ALL air conditioner brands! Whether your AC is from a major brand or a lesser-known manufacturer, our experienced technicians can handle it. Just give us a call!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["Window AC", "Split AC", "Inverter AC", "Non-Inverter AC", "Cassette AC", "Tower AC"].map((type, i) => (
                  <span 
                    key={i} 
                    className="bg-card px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Brand Service */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Why Trust Us With Your AC Brand?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Multi-Brand Training", desc: "Technicians trained on all major brands" },
                { title: "Genuine Parts", desc: "We use original spare parts when available" },
                { title: "Updated Knowledge", desc: "Regular training on new models & technology" },
                { title: "Warranty Support", desc: "Service without voiding your warranty" },
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 text-center border border-border">
                  <CheckCircle className="w-10 h-10 mx-auto text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Need Service for Your AC Brand?</h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Whatever brand, whatever issue - we're here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919842365480">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent font-bold">
                  View Services
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

export default Brands;
