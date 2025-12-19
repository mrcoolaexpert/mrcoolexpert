import { Link } from "react-router-dom";
import { Phone, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const galleryItems = [
  { title: "Split AC Installation", category: "Installation" },
  { title: "AC Repair Work", category: "Repair" },
  { title: "Gas Filling Service", category: "Maintenance" },
  { title: "Window AC Service", category: "Service" },
  { title: "Outdoor Unit Cleaning", category: "Maintenance" },
  { title: "Indoor Unit Deep Clean", category: "Service" },
  { title: "New AC Setup", category: "Installation" },
  { title: "Compressor Repair", category: "Repair" },
  { title: "Filter Cleaning", category: "Maintenance" },
];

const Gallery = () => {
  return (
    <>
      <SEO 
        title="Our Work Gallery - AC Service Photos"
        description="See our AC service work in Tiruppur. Browse photos of AC installations, repairs, and maintenance work by Mr. Cool Service team."
      />
      <Header />
      <FloatingButtons />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Gallery</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                Our Work Speaks for Itself
              </h1>
              <p className="text-lg text-muted-foreground">
                Take a look at some of our AC installation, repair, and maintenance work across Tiruppur and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["All", "Installation", "Repair", "Service", "Maintenance"].map((filter, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Gallery Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-secondary rounded-2xl overflow-hidden aspect-video hover-lift cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-primary/40" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                      <span className="text-xs font-medium bg-accent/80 px-2 py-1 rounded">{item.category}</span>
                      <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                More work photos coming soon! Follow us on WhatsApp for regular updates.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                The Mr. Cool Difference
              </h2>
              <p className="text-muted-foreground mt-4">
                See the transformation in our AC service work. Dirty ACs become clean, malfunctioning units start cooling again!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-6 text-center border border-border">
                <div className="bg-destructive/10 rounded-xl h-48 flex items-center justify-center mb-4">
                  <span className="text-destructive font-semibold">Before Service</span>
                </div>
                <p className="text-muted-foreground text-sm">Dirty filters, clogged drains, poor cooling</p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center border border-border">
                <div className="bg-accent/10 rounded-xl h-48 flex items-center justify-center mb-4">
                  <span className="text-accent font-semibold">After Service</span>
                </div>
                <p className="text-muted-foreground text-sm">Clean, efficient, powerful cooling restored</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Want Results Like These?</h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Book your AC service today and experience the Mr. Cool difference!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919842365480">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now
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

export default Gallery;
