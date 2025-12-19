import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Mr. Cool Service!

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Needed: ${formData.service}
Message: ${formData.message}

Please contact me regarding AC service.`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919842365480?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your enquiry is being sent via WhatsApp for faster response!",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO 
        title="Contact Us - Book AC Service"
        description="Contact Mr. Cool Service for AC installation, repair & maintenance in Tiruppur. Call +91 98423 65480 or WhatsApp us for quick booking. Available 7 days!"
        keywords="contact AC service Tiruppur, book AC repair, AC service phone number Tiruppur, WhatsApp AC service"
      />
      <Header />
      <FloatingButtons />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to book a service or have questions? We're here to help! Call us, WhatsApp us, or fill out the form below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-foreground">Contact Information</h2>
                
                <div className="space-y-6">
                  <a href="tel:+919842365480" className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover-lift group">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+91 98423 65480</p>
                      <p className="text-sm text-accent">Click to call now</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919842365480" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover-lift group">
                    <div className="w-12 h-12 bg-fresh-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">+91 98423 65480</p>
                      <p className="text-sm text-accent">Chat with us instantly</p>
                    </div>
                  </a>

                  <a href="mailto:mrcoolservicetiruppur@gmail.com" className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover-lift group">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">mrcoolservicetiruppur@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Service Area</h3>
                      <p className="text-muted-foreground">Tiruppur, Avinashi, Palladam</p>
                      <p className="text-sm text-muted-foreground">& 15km surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Working Hours</h3>
                      <p className="text-muted-foreground">Monday - Sunday</p>
                      <p className="text-sm text-accent font-medium">8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-3xl p-8 border border-border shadow-elevated">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">Quick Enquiry</h2>
                <p className="text-muted-foreground mb-6">Fill the form and we'll get back to you quickly!</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Your Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email (Optional)</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="AC Installation">AC Installation</option>
                      <option value="AC Repair">AC Repair</option>
                      <option value="AC Gas Filling">AC Gas Filling</option>
                      <option value="AC General Service">AC General Service</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your AC issue or requirements..."
                      rows={4}
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Send className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your enquiry will be sent via WhatsApp for faster response!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">We Come to You!</h2>
              <p className="text-muted-foreground mb-8">
                Our technicians will visit your home or office anywhere in Tiruppur and surrounding areas within 15km. Just call us and we'll be there!
              </p>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <MapPin className="w-16 h-16 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Doorstep Service</h3>
                <p className="text-muted-foreground">
                  No need to bring your AC to us. We provide all services at your location!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
