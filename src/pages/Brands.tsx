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

// Ensure these imported files are optimized (WebP format preferred, <20KB each)
import lg_logo from "@/assets/brands/lg.png";
import samsung_logo from "@/assets/brands/samsung.png";
import Daikin_logo from "@/assets/brands/Daikin_logo.jpg";
import Voltas_Logo from "@/assets/brands/Voltas-Logo.png";
import blue_star_logo from "@/assets/brands/Blue_Star_logo.png";
import hitachi_logo from "@/assets/brands/Hitachi_logo.png";
import panasonic_logo from "@/assets/brands/Panasonic_logo.png";
import carrier_logo from "@/assets/brands/Carrier_Logo.png";
import whirpool_logo from "@/assets/brands/Whirlpool_Logo.png";
import godrej_logo from "@/assets/brands/Godrej_Logo.png";
import Haier_logo from "@/assets/brands/Haier_logo.png";
import Mitsubishi_logo from "@/assets/brands/Mitsubishi_logo.png";
import ifb_logo from "@/assets/brands/IFB_logo.png";
import onida_logo from "@/assets/brands/Onida_logo.png";

// PERFORMANCE NOTE: I added 'width' and 'height' to the data.
// This helps the browser reserve space before the image loads (prevents layout shifts).
const brands = [
  {
    name: "LG",
    category: "Korean Tech",
    logo: lg_logo,
    specialized: "Inverter V ACs",
  },
  {
    name: "Samsung",
    category: "Korean Tech",
    logo: samsung_logo,
    specialized: "WindFree™ Cooling",
  },
  {
    name: "Daikin",
    category: "Japanese Precision",
    logo: Daikin_logo,
    specialized: "Coanda Airflow",
  },
  {
    name: "Voltas",
    category: "Indian Leader",
    logo: Voltas_Logo,
    specialized: "All Weather ACs",
  },
  {
    name: "Blue Star",
    category: "Indian Leader",
    logo: blue_star_logo,
    specialized: "Commercial Cooling",
  },
  {
    name: "Hitachi",
    category: "Japanese Precision",
    logo: hitachi_logo,
    specialized: "Expandable Inverter",
  },
  {
    name: "Panasonic",
    category: "Japanese Precision",
    logo: panasonic_logo,
    specialized: "Nanoe™ X Filter",
  },
  {
    name: "Carrier",
    category: "American Pioneer",
    logo: carrier_logo,
    specialized: "High Ambient Cooling",
  },
  {
    name: "Whirlpool",
    category: "American Pioneer",
    logo: whirpool_logo,
    specialized: "6th Sense Tech",
  },
  {
    name: "Godrej",
    category: "Indian Leader",
    logo: godrej_logo,
    specialized: "Green Gas R290",
  },
  {
    name: "Lloyd",
    category: "Indian Leader",
    logo: "/assets/brands/lloyd.png",
    specialized: "Rapid Cooling",
  },
  {
    name: "Haier",
    category: "Global Tech",
    logo: Haier_logo,
    specialized: "Self-Clean Inverter",
  },
  {
    name: "O General",
    category: "Japanese Precision",
    logo: "/assets/brands/general.png",
    specialized: "Tropical Rotary",
  },
  {
    name: "Mitsubishi",
    category: "Japanese Precision",
    logo: Mitsubishi_logo,
    specialized: "Heavy Duty",
  },
  {
    name: "IFB",
    category: "Indian Leader",
    logo: ifb_logo,
    specialized: "Gold Fin Technology",
  },
  {
    name: "Onida",
    category: "Indian Leader",
    logo: onida_logo,
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
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-200 mb-6 backdrop-blur-sm">
                <Globe className="w-4 h-4" />
                <span>Servicing 50+ Global & Local Brands</span>
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                Universal Brand Experts
              </h1>
              <p className="text-lg text-slate-700 mb-8">
                Whether it's a vintage Window AC or a modern Wi-Fi Inverter
                model, our technicians have the specific schematics and tools
                for every manufacturer.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search your brand (e.g., 'Daikin')"
                  className="pl-10 h-12 rounded-full shadow-lg border-slate-300 text-lg bg-white focus:ring-2 focus:ring-primary placeholder:text-slate-500 text-slate-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search air conditioner brands"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Our Supported Air Conditioner Brands</h2>

            {filteredBrands.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-slate-600">
                  Brand not listed?
                </h3>
                <p className="mb-4 text-slate-500">
                  Don't worry, we likely service it too.
                </p>
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  Show All Brands
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBrands.map((brand, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:-translate-y-1 bg-white overflow-hidden"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      {/* Logo Container */}
                      <div className="w-full h-24 mb-4 flex items-center justify-center p-2 bg-slate-50 rounded-lg group-hover:bg-white transition-colors">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} AC Service`}
                          // PERFORMANCE FIX:
                          // 1. loading="lazy": Browser only loads image when user scrolls near it
                          // 2. decoding="async": Decodes image off the main thread
                          // 3. width/height: Prevents layout shift
                          loading="lazy"
                          decoding="async"
                          width="160"
                          height="80"
                          className="max-h-16 max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            if (target.nextElementSibling) {
                              target.nextElementSibling.classList.remove(
                                "hidden"
                              );
                            }
                          }}
                        />
                        <span className="hidden text-2xl font-black text-slate-400 group-hover:text-primary transition-colors uppercase tracking-wider">
                          {brand.name}
                        </span>
                      </div>

                      <div className="mt-auto w-full">
                        <div className="flex flex-col items-center gap-2 mb-3">
                          <h3 className="font-bold text-lg text-slate-800">
                            {brand.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-[10px] h-5 px-2 bg-slate-100 text-slate-700 font-medium"
                          >
                            {brand.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-blue-700 font-medium bg-blue-50 py-1.5 px-3 rounded-full inline-block border border-blue-100">
                          {brand.specialized}
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
                <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Technical Insight
                </Badge>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  Inverter vs. Non-Inverter Support
                </h2>
                <p className="text-slate-700 mb-6 text-lg">
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
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-700" />
                      </div>
                      <span className="font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Tech Representation */}
              <div className="order-1 lg:order-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center h-80 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-slate-200/[0.2] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                <div className="relative z-10">
                  <Cpu className="w-24 h-24 text-slate-400 mb-6 group-hover:text-primary transition-colors duration-500" />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    Smart PCB Diagnostics
                  </h3>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    We understand the complex electronics inside your{" "}
                    <span className="text-primary font-bold">
                      {filteredBrands[0]?.name || "AC"}
                    </span>{" "}
                    unit.
                  </p>
                </div>
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
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <ShieldCheck className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Warranty Protection</h3>
                <p className="text-slate-300 text-sm">
                  We follow manufacturer guidelines so your warranty remains
                  valid (where applicable).
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Original Spares</h3>
                <p className="text-slate-300 text-sm">
                  We source brand-specific parts like copper coils, PCBs, and
                  sensors.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <Cpu className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Error Code Decoding</h3>
                <p className="text-slate-300 text-sm">
                  We don't guess. We read the specific error codes (E1, E4,
                  CH05) for your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Book a Specialist for Your Brand
            </h2>
            <p className="text-blue-50 mb-8 max-w-2xl mx-auto font-medium">
              Tell us your AC brand and model, and we'll send a technician
              carrying the right tools for that specific manufacturer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+918220915207" aria-label="Call Expert Now">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold h-14 px-8 shadow-xl transition-transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Expert Now
                </Button>
              </a>

              <Link to="/contact" aria-label="Book Online">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold h-14 px-8 transition-transform hover:scale-105"
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
