import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Smartphone,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create Professional WhatsApp message
    const whatsappMessage = `*New Service Enquiry via Website* 🛠️

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || "Not Provided"}
🔧 *Service:* ${formData.service}
📝 *Message:* ${formData.message}

Please confirm the slot availability.`;

    // Open WhatsApp
    window.open(
      `https://wa.me/919842365480?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    toast({
      title: "Opening WhatsApp...",
      description: "Redirecting you to chat with our technical team directly.",
      duration: 3000,
    });

    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  return (
    <>
      <SEO
        title="Contact Mr. Cool Service | Book AC Repair in Tiruppur"
        description="Schedule a visit for AC Service, Washing Machine Repair, or Fridge Maintenance in Tiruppur. Call +91 98423 65480. We serve Avinashi, Palladam, and Kangeyam."
        keywords="Mr Cool Service phone number, AC mechanic number Tiruppur, washing machine service contact, fridge repair near me"
      />
      <Header />
      <FloatingButtons />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available Now • Response time less than 15 mins
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Let's Fix Your Appliance
              </h1>
              <p className="text-lg text-muted-foreground">
                Don't let a broken AC ruin your day. Fill out the form below or
                give us a call, and our mobile unit will be on the way.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                {/* Phone Card */}
                <a href="tel:+919842365480" className="block group">
                  <Card className="border-border/60 shadow-sm hover:shadow-md transition-all hover:border-primary/50 cursor-pointer bg-white">
                    <CardContent className="p-6 flex items-center gap-5">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          24/7 Helpline
                        </p>
                        <h3 className="text-2xl font-bold text-foreground">
                          +91 98423 65480
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/919842365480"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block group"
                >
                  <Card className="border-border/60 shadow-sm hover:shadow-md transition-all hover:border-green-500/50 cursor-pointer bg-white">
                    <CardContent className="p-6 flex items-center gap-5">
                      <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <MessageCircle className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Chat with Expert
                        </p>
                        <h3 className="text-xl font-bold text-foreground">
                          WhatsApp Us
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:mrcoolservicetiruppur@gmail.com"
                  className="block group"
                >
                  <Card className="border-border/60 shadow-sm hover:shadow-md transition-all hover:border-blue-500/50 cursor-pointer bg-white">
                    <CardContent className="p-6 flex items-center gap-5">
                      <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Email Support
                        </p>
                        <h3 className="text-lg font-bold text-foreground truncate max-w-[200px]">
                          mrcoolservicetiruppur@gmail.com
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                {/* Address Info */}
                <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 mt-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-accent" /> Service Hub
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Headquarters</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Tiruppur, Tamil Nadu.
                          <br />
                          (Mobile teams available in Avinashi, Palladam, &
                          Kangeyam)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Operating Hours</p>
                        <p className="text-slate-400 text-sm">
                          Mon - Sun: 08:00 AM - 09:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Booking Form */}
              <div className="lg:col-span-7">
                <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-3xl h-full">
                  <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-2xl font-display font-bold text-foreground">
                          Quick Booking
                        </h2>
                        <p className="text-muted-foreground">
                          Get a quote in 5 minutes
                        </p>
                      </div>
                      <Smartphone className="w-12 h-12 text-slate-100" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="bg-slate-50 border-slate-200 h-12"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">
                            Phone Number *
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="bg-slate-50 border-slate-200 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">
                            Email (Optional)
                          </label>
                          <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="john@example.com"
                            className="bg-slate-50 border-slate-200 h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">
                            Service Required *
                          </label>
                          <Select onValueChange={handleSelectChange} required>
                            <SelectTrigger className="bg-slate-50 border-slate-200 h-12">
                              <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="AC Repair">
                                AC Repair / Service
                              </SelectItem>
                              <SelectItem value="AC Installation">
                                AC Installation
                              </SelectItem>
                              <SelectItem value="Washing Machine">
                                Washing Machine Repair
                              </SelectItem>
                              <SelectItem value="Fridge Repair">
                                Refrigerator Repair
                              </SelectItem>
                              <SelectItem value="General Enquiry">
                                General Enquiry
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">
                          Problem Description
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="e.g. AC is running but not cooling..."
                          className="bg-slate-50 border-slate-200 min-h-[120px] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Enquiry via WhatsApp
                      </Button>

                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>
                          Your data is secure. We reply directly on WhatsApp.
                        </span>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Find Us on Google Maps
              </h2>
              <p className="text-muted-foreground">
                Serving Tiruppur and surrounding 15km radius
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[450px] relative group">
              {/* Overlay for interaction hint */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62657.34865886297!2d77.3069!3d11.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b000000001%3A0x867332c943147814!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Mr.+Cool+Service+Tiruppur"
                width="100%"
                height="100%"
                className="border-none grayscale group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mr. Cool Service Location"
              ></iframe>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {["Tiruppur North", "Tiruppur South", "Avinashi"].map((area) => (
                <div
                  key={area}
                  className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 text-sm font-semibold text-slate-600"
                >
                  📍 Service Active in {area}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
