import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Camera,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// --- IMAGE IMPORTS ---
// Make sure these images exist in src/assets/gallery/
import imgSplit from "@/assets/gallery/install-split.jpg";
import imgPcb from "@/assets/gallery/repair-pcb.jpg";
import imgJet from "@/assets/gallery/service-jet.jpg";
import imgGas from "@/assets/gallery/repair-gas.jpg";
import imgCassette from "@/assets/gallery/install-cassette.jpg";
import imgWm from "@/assets/gallery/repair-wm.jpg";
import imgFridge from "@/assets/gallery/repair-fridge.jpg";
import imgAmc from "@/assets/gallery/service-amc.jpg";
import imgWindow from "@/assets/gallery/service-window.jpg";
import imgBefore from "@/assets/gallery/compare-dirty.jpg";
import imgAfter from "@/assets/gallery/compare-clean.jpg";

// Enhanced Data using Local Imports
const galleryItems = [
  {
    id: 101,
    title: "Split AC Installation",
    category: "Installation",
    loc: "Avinashi Road",
    date: "Dec 2024",
    desc: "Premium installation with concealed piping for a modern villa.",
    image: imgSplit,
  },
  {
    id: 102,
    title: "Inverter PCB Repair",
    category: "Repair",
    loc: "Palladam",
    date: "Nov 2024",
    desc: "Fixed communication error (E5) in Daikin 1.5 Ton Inverter AC.",
    image: imgPcb,
  },
  {
    id: 103,
    title: "Jet-Pump Service",
    category: "Service",
    loc: "Tiruppur North",
    date: "Dec 2024",
    desc: "Deep cleaning of blower wheel and cooling coil using high-pressure jet.",
    image: imgJet,
  },
  {
    id: 104,
    title: "Gas Leakage Fix",
    category: "Repair",
    loc: "Kangeyam",
    date: "Oct 2024",
    desc: "Nitrogen pressure testing and R32 gas refilling.",
    image: imgGas,
  },
  {
    id: 105,
    title: "Cassette AC Setup",
    category: "Installation",
    loc: "Textile Office",
    date: "Sep 2024",
    desc: "Commercial Cassette AC installation for a 2000 sq.ft office space.",
    image: imgCassette,
  },
  {
    id: 106,
    title: "Washing Machine Drum",
    category: "Repair",
    loc: "Vellakovil",
    date: "Nov 2024",
    desc: "Replaced rusted flange and bearing for LG Front Load.",
    image: imgWm,
  },
  {
    id: 107,
    title: "Fridge Compressor",
    category: "Repair",
    loc: "Uthukuli",
    date: "Dec 2024",
    desc: "Replaced faulty compressor with 5-year warranty unit.",
    image: imgFridge,
  },
  {
    id: 108,
    title: "General Maintenance",
    category: "Service",
    loc: "Apartment Complex",
    date: "Dec 2024",
    desc: "AMC service for 15 units in a residential complex.",
    image: imgAmc,
  },
  {
    id: 109,
    title: "Window AC Service",
    category: "Service",
    loc: "Old Bus Stand",
    date: "Nov 2024",
    desc: "Complete dismantle wash and chemical cleaning.",
    image: imgWindow,
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <SEO
        title="Project Gallery - Mr. Cool Service | AC Installation Photos Tiruppur"
        description="View our latest work: Split AC installations in Avinashi, PCB repairs in Palladam, and Jet-pump service in Tiruppur."
        keywords="AC installation photos, AC repair images Tiruppur, washing machine repair gallery"
      />
      <Header />
      <FloatingButtons />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full border border-white/20">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
                Proof of Performance
              </h1>
              <p className="text-lg text-muted-foreground">
                We don't just claim quality; we document it. Browse through our
                recent{" "}
                <span className="text-foreground font-semibold">
                  1,500+ successful projects
                </span>{" "}
                across Tiruppur district.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Custom Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["All", "Installation", "Repair", "Service"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-white text-muted-foreground hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative aspect-video bg-slate-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      // FIX: Typescript Safe Error Handling
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none"; // Hide the broken image

                        // We cast nextElementSibling to HTMLElement so TS knows it has a style property
                        const placeholder =
                          target.nextElementSibling as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = "flex"; // Show placeholder
                        }
                      }}
                    />

                    {/* Fallback Placeholder (Hidden by default) */}
                    <div className="hidden absolute inset-0 items-center justify-center bg-slate-100">
                      <Camera className="w-12 h-12 text-slate-300" />
                      <span className="absolute bottom-2 text-xs text-slate-400">
                        Image Missing
                      </span>
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-black/50 backdrop-blur-md text-white hover:bg-black/60 border-none">
                        {item.category}
                      </Badge>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <p className="text-white font-bold truncate text-lg shadow-sm">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.loc}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {item.date}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-mono text-slate-400">
                        Site ID: #{item.id}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-accent/80 hover:bg-accent/10 p-0 h-auto font-semibold"
                      >
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Educational Context */}
            <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center max-w-2xl mx-auto">
              <p className="text-blue-800 text-sm font-medium mb-2">
                Technical Insight
              </p>
              <p className="text-slate-600 text-sm">
                Notice the precise copper piping in our installation photos?
                Proper bending prevents gas leaks.
              </p>
            </div>
          </div>
        </section>

        {/* The Transformation (Before/After) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-primary text-primary"
                >
                  Service Impact
                </Badge>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Restoring Efficiency, <br />
                  <span className="text-accent">One Service at a Time</span>
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Over time, AC coils accumulate a thick layer of dust and mold
                  (Bio-film). This acts as an insulator, preventing the AC from
                  cooling the air.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Why Service Matters?
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex justify-between">
                      <span>Cooling Efficiency</span>
                      <span className="font-bold text-green-600">
                        +40% Improved
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Power Consumption</span>
                      <span className="font-bold text-green-600">
                        -20% Reduced
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Air Quality</span>
                      <span className="font-bold text-green-600">
                        99% Bacteria Free
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Visual Comparison Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                <div className="grid grid-cols-2 h-80">
                  {/* Before Side - Dirty AC Filter Image */}
                  <div className="relative bg-red-50 flex flex-col items-center justify-center p-6 border-r border-slate-200 group overflow-hidden">
                    {/* Background Image for Before */}
                    <img
                      src={imgBefore}
                      alt="Dirty Clogged AC Filter"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-red-900/20" />

                    <div className="relative z-10 flex flex-col items-center">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-red-200 shadow-sm">
                        BEFORE
                      </span>
                      <p className="text-center text-sm text-red-950 font-bold bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                        Clogged Filters &<br />
                        Choked Coils
                      </p>
                    </div>
                  </div>

                  {/* After Side - Clean AC Unit Image */}
                  <div className="relative bg-green-50 flex flex-col items-center justify-center p-6 group overflow-hidden">
                    {/* Background Image for After */}
                    <img
                      src={imgAfter}
                      alt="Clean AC Unit"
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-green-900/10" />

                    <div className="relative z-10 flex flex-col items-center">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-green-200 shadow-sm">
                        AFTER
                      </span>
                      <p className="text-center text-sm text-green-950 font-bold bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                        Jet-Pump Cleaned &<br />
                        Sanitized
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl z-20">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to see these results in your home?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+918220915207">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto font-bold h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Service Visit
                </Button>
              </a>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold h-14 px-8 transition-all hover:scale-105"
                >
                  View Service Menu
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
