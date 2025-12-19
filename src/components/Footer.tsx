import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/mrcool-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Mr. Cool Service" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <h3 className="text-lg font-display font-bold">Mr. Cool Service</h3>
                <p className="text-sm text-primary-foreground/80">AC Experts in Tiruppur</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Professional AC installation, repair, and maintenance services in Tiruppur and surrounding areas. Your trusted partner for all cooling needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link>
              <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Services</Link>
              <Link to="/brands" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Brands We Service</Link>
              <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</Link>
              <Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>AC Installation</li>
              <li>AC Repair & Troubleshooting</li>
              <li>AC Gas Filling</li>
              <li>General Service & Maintenance</li>
              <li>Split AC Service</li>
              <li>Window AC Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919842365480" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 98423 65480</span>
              </a>
              <a href="https://wa.me/919842365480" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              <a href="mailto:mrcoolservicetiruppur@gmail.com" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>mrcoolservicetiruppur@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Tiruppur, Avinashi, Palladam<br />& 15km radius</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Mr. Cool Service. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/80">
            Trusted AC Service in Tiruppur & Surrounding Areas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
