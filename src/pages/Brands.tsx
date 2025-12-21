import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  CheckCircle,
  Search,
  Globe,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// Enhanced Data with Logo Domains and Specializations
const brands = [
  {
    name: "LG",
    category: "Korean Tech",
    domain: "lg.com",
    specialized: "Inverter V ACs",
  },
  {
    name: "Samsung",
    category: "Korean Tech",
    domain: "samsung.com",
    specialized: "WindFree™ Cooling",
  },
  {
    name: "Daikin",
    category: "Japanese Precision",
    domain: "daikin.com",
    specialized: "Coanda Airflow",
  },
  {
    name: "Voltas",
    category: "Indian Leader",
    domain: "myvoltas.com",
    specialized: "All Weather ACs",
  },
  {
    name: "Blue Star",
    category: "Indian Leader",
    domain: "bluestarindia.com",
    specialized: "Commercial Cooling",
  },
  {
    name: "Hitachi",
    category: "Japanese Precision",
    domain: "jci-hitachi.com",
    specialized: "Expandable Inverter",
  },
  {
    name: "Panasonic",
    category: "Japanese Precision",
    domain: "panasonic.com",
    specialized: "Nanoe™ X Filter",
  },
  {
    name: "Carrier",
    category: "American Pioneer",
    domain: "carrier.com",
    specialized: "High Ambient Cooling",
  },
  {
    name: "Whirlpool",
    category: "American Pioneer",
    domain: "whirlpool.com",
    specialized: "6th Sense Tech",
  },
  {
    name: "Godrej",
    category: "Indian Leader",
    domain: "godrej.com",
    specialized: "Green Gas R290",
  },
  {
    name: "Lloyd",
    category: "Indian Leader",
    domain: "mylloyd.com",
    specialized: "Rapid Cooling",
  },
  {
    name: "Haier",
    category: "Global Tech",
    domain: "haier.com",
    specialized: "Self-Clean Inverter",
  },
  {
    name: "O General",
    category: "Japanese Precision",
    domain: "generalindia.com",
    specialized: "Tropical Rotary",
  },
  {
    name: "Mitsubishi",
    category: "Japanese Precision",
    domain: "mitsubishielectric.com",
    specialized: "Heavy Duty",
  },
  {
    name: "IFB",
    category: "Indian Leader",
    domain: "ifbappliances.com",
    specialized: "Gold Fin Technology",
  },
  {
    name: "Onida",
    category: "Indian Leader",
    domain: "onida.com",
    specialized: "Powerful Airflow",
  },
];

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Authorized Service for LG, Samsung, Daikin & Voltas in Tiruppur"
        description="Expert repair for 50+ Air Conditioner brands. We specialize in Inverter AC PCB repair for Daikin, O General, and Mitsubishi. Genuine spare parts guaranteed."
        keywords="Samsung service center Tiruppur, LG AC repair near me, Voltas customer care number Tiruppur, Daikin authorized service, Blue Star AC mechanic"
      />
      <Header />
      <FloatingButtons />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-white/10 text-primary-foreground/90 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20 mb-6 backdrop-blur-sm">
                <Globe className="w-4 h-4" />
                <span>Servicing 50+ Global & Local Brands</span>
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Universal Brand Experts
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Whether it's a vintage Window AC or a modern Wi-Fi Inverter
                model, our technicians have the specific schematics and tools
                for every manufacturer.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search your brand (e.g., 'Daikin')"
                  className="pl-10 h-12 rounded-full shadow-lg border-primary/20 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredBrands.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-muted-foreground">
                  Brand not listed?
                </h3>
                <p className="mb-4">Don't worry, we likely service it too.</p>
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  Show All Brands
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBrands.map((brand, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-border/60 hover:-translate-y-1 bg-white"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      {/* Logo Fetcher with Fallback */}
                      <div className="w-full h-20 mb-6 flex items-center justify-center p-2">
                        <img
                          src={`https://logo.clearbit.com/${brand.domain}?size=120`}
                          alt={`${brand.name} logo`}
                          className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                          onError={(e) => {
                            // Fallback to text if logo not found
                            (e.target as HTMLImageElement).style.display =
                              "none";
                            (
                              e.target as HTMLImageElement
                            ).nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                        <span className="hidden text-2xl font-black text-slate-300 group-hover:text-primary transition-colors">
                          {brand.name}
                        </span>
                      </div>

                      <div className="mt-auto w-full">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <h3 className="font-bold text-lg text-foreground">
                            {brand.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-[10px] h-5 px-1.5 bg-slate-100 text-slate-500"
                          >
                            {brand.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium bg-secondary/50 py-1 px-2 rounded-lg inline-block">
                          Expertise: {brand.specialized}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Educational Section - Tech Trigger */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">
                  Technical Insight
                </Badge>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Inverter vs. Non-Inverter Support
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Modern brands like LG, Samsung, and Daikin use complex
                  PCB-driven Inverter technology. Unlike local mechanics, we use
                  diagnostic scanners to read error codes directly from these
                  PCBs.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "PCB Circuit Tracing for all brands",
                    "IPM Module Testing",
                    "Sensor Value Calibration",
                    "Firmware Error Reset",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 bg-secondary/30 rounded-3xl p-8 border border-border flex flex-col items-center justify-center text-center">
                <Cpu className="w-20 h-20 text-primary/20 mb-4" />
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Technology Visualization
                </p>
                <div className="text-xs text-slate-400 italic mb-4">
                  [Image of inverter AC PCB diagram]
                </div>
                <p className="text-sm text-muted-foreground max-w-xs">
                  We understand the complex electronics inside your{" "}
                  {filteredBrands[0]?.name || "Brand"} AC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 bg-slate-900 text-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-10">
              Why Brand-Specific Service Matters?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Warranty Protection</h3>
                <p className="text-slate-400 text-sm">
                  We follow manufacturer guidelines so your warranty remains
                  valid (where applicable).
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Original Spares</h3>
                <p className="text-slate-400 text-sm">
                  We source brand-specific parts like copper coils, PCBs, and
                  sensors.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Cpu className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Error Code Decoding</h3>
                <p className="text-slate-400 text-sm">
                  We don't guess. We read the specific error codes (E1, E4,
                  CH05) for your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Book a Specialist for Your Brand
            </h2>
            <p className="text-accent-foreground/80 mb-8">
              Tell us your AC brand and model, and we'll send a technician
              carrying the right tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+918220915207">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 shadow-xl transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Expert Now
                </Button>
              </a>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  // FIX: Added 'bg-transparent' and 'border-2' so it's not invisible
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold h-14 px-8 transition-all hover:scale-105"
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

export default Brands;
