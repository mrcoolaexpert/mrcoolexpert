import { useState } from "react";
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
  ArrowRight,
  Droplets,
  Disc,
  Power,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// Data Structure for Categorized Services
const serviceCategories = [
  { id: "ac", label: "Air Conditioners", icon: ThermometerSnowflake },
  { id: "wm", label: "Washing Machines", icon: Droplets },
  { id: "fridge", label: "Refrigerators", icon: Wind },
];

const allServices = {
  ac: [
    {
      icon: Wrench,
      title: "Installation & Uninstallation",
      description:
        "Precision installation for Split & Window units. We ensure zero-leak copper piping and optimal outdoor placement.",
      features: [
        "Vacuum sealing",
        "Core cutting",
        "Gas pressure check",
        "Vibration padding",
      ],
      price: "₹500",
      popular: false,
    },
    {
      icon: Zap,
      title: "Advanced Chip-Level Repair",
      description:
        "Expert diagnosis for Inverter AC PCBs. We fix communication errors, sensor faults, and display issues.",
      features: [
        "PCB circuit repair",
        "Sensor replacement",
        "Capacitor change",
        "Wiring overhaul",
      ],
      price: "₹350",
      popular: true,
    },
    {
      icon: Wind,
      title: "Jet-Pump Deep Cleaning",
      description:
        "Not just a wash. We use high-pressure jet pumps to remove mold and dust from cooling coils and blower wheels.",
      features: [
        "Jacket wash technology",
        "Anti-bacterial spray",
        "Drain flush",
        "Filter sanitization",
      ],
      price: "₹450",
      popular: true,
    },
    {
      icon: ThermometerSnowflake,
      title: "Gas Charging (R32/R410A)",
      description:
        "Genuine refrigerant top-up. We fix the leak first, vacuum the system, and then refill to factory standards.",
      features: [
        "Leak nitrogen test",
        "Vacuuming",
        "Purity check",
        "Amperage verification",
      ],
      price: "₹850",
      popular: false,
    },
  ],
  wm: [
    {
      icon: RefreshCw,
      title: "Drum & Motor Repair",
      description:
        "Fixing noise, vibration, and spin issues in Front Load and Top Load machines.",
      features: [
        "Bearing replacement",
        "Drum alignment",
        "Motor carbon brush",
        "Suspension rod fix",
      ],
      price: "₹400",
      popular: true,
    },
    {
      icon: Settings,
      title: "Drain & Water Issues",
      description:
        "Resolved water not filling or not draining errors (IE/OE errors) instantly.",
      features: [
        "Inlet valve change",
        "Drain pump cleaning",
        "Filter unclogging",
        "Pipe replacement",
      ],
      price: "₹300",
      popular: false,
    },
    {
      icon: Disc,
      title: "PCB & Board Repair",
      description:
        "Specialized repair for dead machines or program errors in fully automatic boards.",
      features: [
        "Display fix",
        "Power supply repair",
        "Micro-controller fix",
        "Error code reset",
      ],
      price: "₹500",
      popular: false,
    },
  ],
  fridge: [
    {
      icon: ThermometerSnowflake,
      title: "Cooling Restoration",
      description:
        "Fixing 'Freezer working but Fridge not cooling' issues effectively.",
      features: [
        "Thermostat change",
        "Damper repair",
        "Fan motor fix",
        "Airflow mapping",
      ],
      price: "₹350",
      popular: true,
    },
    {
      icon: Power,
      title: "Compressor Services",
      description:
        "Heart of the fridge. We handle compressor replacement and relay overload issues.",
      features: [
        "Relay replacement",
        "Overload protector",
        "Compressor gas charging",
        "Relay kit fix",
      ],
      price: "₹450",
      popular: false,
    },
    {
      icon: Droplets,
      title: "Leakage & Frost Fix",
      description:
        "Solving water leakage inside the fridge and excessive ice formation issues.",
      features: [
        "Drain line cleaning",
        "Heater replacement",
        "Timer change",
        "Bi-metal sensor",
      ],
      price: "₹300",
      popular: false,
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("ac");

  return (
    <>
      <SEO
        title="Our Services | AC, Washing Machine & Fridge Repair in Tiruppur"
        description="Comprehensive appliance repair menu. Check prices for AC Gas filling, Washing Machine drum repair, and Fridge compressor fixing in Tiruppur."
        keywords="AC installation price Tiruppur, washing machine service cost, fridge repair charges, R32 gas price, split AC cleaning"
      />
      <Header />
      <FloatingButtons />

      <main className="min-h-screen bg-slate-50/50">
        {/* Advanced Hero Section */}
        <section className="bg-gradient-hero pt-24 pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block border border-primary/20">
                Transparent Pricing • No Hidden Costs
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Expert Solutions for <br />
                <span className="text-accent">Every Appliance</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Select your appliance below to see our specialized repair plans
                and maintenance packages tailored for Tiruppur's climate.
              </p>

              {/* Educational Diagram Trigger - Adds Authority */}
              <div className="hidden md:flex justify-center items-center gap-2 text-xs text-muted-foreground mb-8">
                <span>Technical Process:</span>
                [Image of AC refrigeration cycle diagram]
                <span>Diagnosis &rarr; Repair &rarr; Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs - The UX Upgrade */}
        <section className="relative -mt-20 z-20 pb-20">
          <div className="container mx-auto px-4">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg hover:-translate-y-1 ${
                    activeTab === cat.id
                      ? "bg-primary text-primary-foreground scale-105 shadow-primary/30 ring-4 ring-primary/20"
                      : "bg-white text-muted-foreground hover:bg-white/90"
                  }`}
                >
                  <cat.icon
                    className={`w-6 h-6 ${
                      activeTab === cat.id ? "text-accent" : ""
                    }`}
                  />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {allServices[activeTab as keyof typeof allServices].map(
                (service, index) => (
                  <Card
                    key={index}
                    className={`group hover:border-accent/50 transition-all duration-300 overflow-hidden border-border/60 ${
                      service.popular
                        ? "ring-2 ring-accent/20 bg-accent/5"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Icon & Price Section */}
                      <div className="bg-secondary/30 p-6 flex flex-col items-center justify-center md:w-48 border-b md:border-b-0 md:border-r border-border/50">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                          <service.icon className="w-8 h-8" />
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                            Starts From
                          </p>
                          <p className="text-2xl font-bold text-foreground">
                            {service.price}
                          </p>
                        </div>
                      </div>

                      {/* Content Section */}
                      <CardContent className="p-6 flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-3">
                          <CardTitle className="text-xl font-bold text-foreground">
                            {service.title}
                          </CardTitle>
                          {service.popular && (
                            <Badge className="bg-accent text-accent-foreground hover:bg-accent cursor-default">
                              Most Booked
                            </Badge>
                          )}
                        </div>

                        <CardDescription className="text-base mb-4 text-muted-foreground/90">
                          {service.description}
                        </CardDescription>

                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-auto">
                          {service.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-foreground/80"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                )
              )}
            </div>

            {/* Educational Context for Active Tab */}
            <div className="mt-12 text-center text-muted-foreground text-sm max-w-2xl mx-auto bg-white p-4 rounded-xl border border-border shadow-sm">
              <p>
                <strong>Did you know?</strong>
                {activeTab === "ac" &&
                  " Regular filter cleaning can reduce AC power consumption by 15%."}
                {activeTab === "wm" &&
                  " Descaling your washing machine drum every 3 months prevents bad odor."}
                {activeTab === "fridge" &&
                  " Keeping the fridge coils dust-free helps the compressor last 5 years longer."}
              </p>
            </div>
          </div>
        </section>

        {/* Trust Signals / Workflow */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold text-foreground">
                The Mr. Cool Promise
              </h2>
              <p className="text-muted-foreground mt-4">
                We don't just fix it; we ensure it stays fixed.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Diagnosis",
                  desc: "Detailed inspection using digital tools.",
                  icon: "1",
                },
                {
                  title: "Quote",
                  desc: "Upfront pricing approved by you.",
                  icon: "2",
                },
                {
                  title: "Repair",
                  desc: "Fixing with genuine OEM parts.",
                  icon: "3",
                },
                {
                  title: "Testing",
                  desc: "Performance check before leaving.",
                  icon: "4",
                },
              ].map((step, idx) => (
                <div key={idx} className="relative group text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center text-xl font-bold text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground px-4">
                    {step.desc}
                  </p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-border -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA (Optional but recommended) */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Unsure about the issue?</h2>
            <p className="mb-8 opacity-90">
              Talk to our senior technician for a free phone consultation.
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:+919842365480">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
