import { Link } from "react-router-dom";
import {
  CheckCircle,
  Target,
  Heart,
  Users,
  Award,
  Phone,
  XCircle,
  Star,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import logo from "@/assets/mrcool-logo.jpeg";

const values = [
  {
    icon: Heart,
    title: "Customer First Policy",
    desc: "We prioritize your comfort. 4.9/5 Rated service across Google Business Profile.",
  },
  {
    icon: Award,
    title: "Google Verified Experts",
    desc: "Certified technicians for Samsung, LG, Daikin, Voltas, and Whirlpool appliances.",
  },
  {
    icon: Users,
    title: "Background Verified Staff",
    desc: "Safety first. Our team is fully vetted, uniformed, and professional.",
  },
  {
    icon: Target,
    title: "Transparent Billing",
    desc: "GST compliant invoices with no hidden 'visiting charges' surprises.",
  },
];

const comparisonData = [
  {
    feature: "Warranty on Spares",
    us: "90 Days Warranty",
    others: "No Warranty",
    icon: Award,
  },
  {
    feature: "Response Time",
    us: "Within 60 Mins",
    others: "Unpredictable",
    icon: Phone,
  },
  {
    feature: "Pricing",
    us: "Fixed Rate Card",
    others: "Hidden Costs",
    icon: Target,
  },
  {
    feature: "Technicians",
    us: "Certified & Uniformed",
    others: "Unverified Freelancers",
    icon: Users,
  },
];

const About = () => {
  return (
    <>
      {/* ADVANCED SEO METADATA */}
      <SEO
        title="About Mr. Cool Service | Best AC, Fridge & Washing Machine Repair in Tiruppur"
        description="Ranked #1 for AC Service, Washing Machine Repair & Fridge Service in Tiruppur. Google Verified Experts, 90-day warranty, and same-day support near you."
      />
      <Header />
      <FloatingButtons />

      <main>
        {/* HERO SECTION - Keyword Rich */}
        <section className="bg-gradient-hero py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mb-6 border border-accent/20">
                <Star className="w-4 h-4 fill-current" />
                <span>Top Rated on Google Business Profile</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Tiruppur's Most Trusted <br />
                <span className="text-accent">AC & Appliance Experts</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                We don't just fix machines; we restore comfort. The leading
                choice for <strong>Split/Window AC Service</strong>,{" "}
                <strong>Washing Machine Repair</strong>, and{" "}
                <strong>Refrigerator Maintenance</strong> in Tiruppur and
                surrounding districts.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST & AUTHORITY SECTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-full blur-2xl opacity-50" />
                <img
                  src={logo}
                  alt="Mr. Cool Service Team - Best AC Mechanics in Tiruppur"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-foreground">
                      500+ Reviews
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    On Google & Justdial
                  </p>
                </div>
              </div>

              <div className="space-y-8 animate-fade-in-up stagger-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Why We Are The{" "}
                  <span className="text-accent">Top Search Result</span> in
                  Tiruppur?
                </h2>
                <div className="prose text-muted-foreground">
                  <p>
                    Established with a vision to revolutionize the unorganized
                    appliance repair sector, <strong>Mr. Cool Service</strong>{" "}
                    has grown into a full-stack home appliance solution. Unlike
                    local freelance mechanics, we operate as a registered
                    company with verified professionals.
                  </p>
                  <p>
                    Whether it's a <strong>Samsung Inverter AC</strong> not
                    cooling, an <strong>LG Front Load Washing Machine</strong>{" "}
                    drum issue, or a{" "}
                    <strong>Whirlpool Double Door Fridge</strong> not freezing,
                    our team uses advanced diagnostic tools to fix it right the
                    first time.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Google Verified Business",
                    "100% Genuine Spare Parts",
                    "Post-Service Support",
                    "Expertise in Inverter Technology",
                    "Lowest Price Guarantee",
                    "Emergency Breakdown Support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE - MARKETING STRATEGY */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Mr. Cool Service vs. Local Mechanics
              </h2>
              <p className="text-muted-foreground mt-2">
                Why 2000+ customers switched to us for their appliance needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comparisonData.map((item, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">{item.feature}</h3>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold uppercase">
                            Mr. Cool Service
                          </p>
                          <p className="font-bold text-foreground">{item.us}</p>
                        </div>
                      </div>
                      <div className="h-px bg-border/50" />
                      <div className="flex items-start gap-2 opacity-60">
                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold uppercase">
                            Others
                          </p>
                          <p className="text-sm">{item.others}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Standards
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Engineered for Excellence
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-border"
                >
                  <div className="w-14 h-14 mx-auto bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO OPTIMIZED SERVICE AREAS */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Serving Every Corner of Tiruppur
                </h2>
                <p className="text-primary-foreground/80 mb-8 text-lg">
                  Searching for "AC Repair Near Me" or "Washing Machine Mechanic
                  in Tiruppur"? We have mobile technical units stationed across
                  all major zones to ensure a{" "}
                  <strong>60-minute response time</strong>.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Tiruppur North",
                    "Tiruppur South",
                    "Avinashi",
                    "Palladam",
                    "Mangalam",
                    "Uthukuli",
                    "Kangeyam",
                    "Dharapuram",
                    "Vellakovil",
                    "Mulanur",
                    "Perumanallur",
                    "Veerapandi",
                  ].map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-sm hover:bg-white hover:text-primary transition-colors cursor-default"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">
                  Service Coverage Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Happy Customers</span>
                    <span className="font-bold text-2xl">2000+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Service Radius</span>
                    <span className="font-bold text-2xl">25 KM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Technicians</span>
                    <span className="font-bold text-2xl">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Google Rating</span>
                    <span className="font-bold text-2xl text-yellow-400">
                      4.9 ★
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Don't Settle for Less
            </h2>
            <p className="text-accent-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
              Get the service your home appliances deserve. High-quality repairs
              at local prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919842365480">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 98423 65480
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent font-bold h-14 px-8"
                >
                  Book Appointment
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
