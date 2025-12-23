import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Snowflake,
  Wrench,
  Zap,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FaqSection from "@/components/FaqSection";

// Mock data for carousels
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Home Owner",
    text: "Excellent service! My AC was fixed within 2 hours. Very professional team.",
    rating: 5,
  },
  {
    name: "Priya Sundar",
    role: "Business Owner",
    text: "Best AC service in Tiruppur. Monthly maintenance keeps our office cool.",
    rating: 5,
  },
  {
    name: "Karthik R",
    role: "Customer",
    text: "Affordable and transparent pricing. Highly recommended for fridge repairs too.",
    rating: 4,
  },
  {
    name: "Anita M",
    role: "Home Maker",
    text: "The technician was polite and explained the issue clearly. Great job!",
    rating: 5,
  },
];

const brands = [
  "Samsung",
  "LG",
  "Daikin",
  "Voltas",
  "Blue Star",
  "Hitachi",
  "Carrier",
  "Whirlpool",
  "Godrej",
  "Panasonic",
];

const services = [
  {
    icon: Snowflake,
    title: "AC Installation",
    desc: "Expert installation for split and window ACs ensuring maximum efficiency.",
  },
  {
    icon: Wrench,
    title: "AC Repair",
    desc: "Quick troubleshooting and repair for all cooling issues and breakdowns.",
  },
  {
    icon: Clock,
    title: "Maintenance",
    desc: "Regular servicing to improve lifespan and reduce electricity bills.",
  },
  {
    icon: Zap,
    title: "Appliance Repair",
    desc: "Professional repair services for Fridges and Washing Machines.",
  },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Mr. Cool Service - Best AC & Appliance Repair in Tiruppur"
        description="Top-rated AC service, installation, washing machine, and fridge repair in Tiruppur. Expert technicians, affordable pricing, and same-day support."
      />
      <Header />
      <FloatingButtons />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
                  <Star className="w-4 h-4 fill-current" />
                  <span>#1 AC Service in Tiruppur</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Keep Your Home <span className="text-accent">Cool</span> &
                  Comfortable
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  Expert repair and maintenance for Air Conditioners, Washing
                  Machines, and Refrigerators. Fast, reliable, and affordable.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a href="tel:+918220915207">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Book Service
                    </Button>
                  </a>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 px-8 text-lg font-medium"
                    >
                      View Services
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" /> 60-Min
                    Response
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" /> 30 Days
                    Warranty
                  </div>
                </div>
              </div>
              {/* ... inside your Hero Section in Index.tsx ... */}

              <div className="flex-1 animate-fade-in-up delay-100">
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-50" />
                  <img
                    src="/mrcool-logo.webp"
                    alt="Mr. Cool Service - Best AC Repair Mechanic in Tiruppur and Kangeyam"
                    /* Explicit width/height prevents Layout Shift (CLS) */
                    width="500"
                    height="500"
                    /* Fetch Priority High helps LCP (Largest Contentful Paint) */
                    fetchPriority="high"
                    className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-white/50 bg-white object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Carousel Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Professional Services
              </h2>
            </div>

            <Carousel
              className="w-full max-w-5xl mx-auto"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="border-border hover:border-accent/50 transition-colors duration-300 h-full">
                        <CardContent className="flex flex-col items-center text-center p-6 h-full">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <service.icon className="w-8 h-8" />
                          </div>
                          <h3 className="text-xl font-bold mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 flex-grow">
                            {service.desc}
                          </p>
                          <Link
                            to="/services"
                            className="text-accent font-semibold hover:underline text-sm flex items-center"
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        {/* Brands Carousel Section (Auto-scrolling vibe) */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground">
                Brands We Service
              </h2>
            </div>
            <Carousel
              className="w-full"
              opts={{ align: "start", loop: true, dragFree: true }}
            >
              <CarouselContent className="-ml-4 items-center">
                {brands.map((brand, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-1/3 md:basis-1/5 lg:basis-1/6"
                  >
                    <div className="bg-background rounded-xl p-4 shadow-sm border border-border flex items-center justify-center h-20 text-muted-foreground font-semibold hover:text-accent hover:border-accent transition-all cursor-default">
                      {brand}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Why Mr. Cool Service is Tiruppur's #1 Choice?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Expert Technicians",
                      desc: "Background verified and highly skilled professionals.",
                    },
                    {
                      title: "Transparent Pricing",
                      desc: "Upfront quotes. No hidden charges or surprises.",
                    },
                    {
                      title: "Genuine Spares",
                      desc: "We use only original parts for all replacements.",
                    },
                    {
                      title: "On-Time Service",
                      desc: "We value your time and adhere to strict schedules.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <Button className="mt-4">More About Us</Button>
                </Link>
              </div>
              <div className="relative animate-fade-in-up delay-200 hidden lg:block">
                {/* Placeholder for a nice grid of images or a feature graphic */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 translate-y-8">
                    <div className="h-48 rounded-2xl bg-primary/5 shadow-lg flex items-center justify-center border border-primary/10">
                      <Snowflake className="w-16 h-16 text-primary/40" />
                    </div>
                    <div className="h-64 rounded-2xl bg-accent/5 shadow-lg flex items-center justify-center border border-accent/10">
                      <Clock className="w-16 h-16 text-accent/40" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-64 rounded-2xl bg-secondary shadow-lg flex items-center justify-center border border-border">
                      <Wrench className="w-16 h-16 text-muted-foreground/40" />
                    </div>
                    <div className="h-48 rounded-2xl bg-primary/5 shadow-lg flex items-center justify-center border border-primary/10">
                      <Zap className="w-16 h-16 text-primary/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Happy Customers
              </h2>
              <p className="text-muted-foreground mt-4">
                Don't just take our word for it.
              </p>
            </div>

            <Carousel
              className="w-full max-w-4xl mx-auto"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <Card className="h-full border-none shadow-elevated bg-background">
                      <CardContent className="p-8 flex flex-col gap-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < t.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic">
                          "{t.text}"
                        </p>
                        <div className="mt-auto pt-4 border-t">
                          <p className="font-bold text-foreground">{t.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {t.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* NEW: Add FAQ Section Here (Before CTA) */}
        <FaqSection />

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Need Urgent AC Repair?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Don't sweat it! Our experts are just a phone call away. Available
              24/7 for emergency breakdowns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+918220915207">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto font-bold h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 82209 15207
                </Button>
              </a>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  // FIX: Added 'bg-transparent' and 'border-2'
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold h-14 px-8 text-lg transition-all duration-300"
                >
                  Book Online
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

export default Index;
