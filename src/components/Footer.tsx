import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  ShieldCheck,
  Star,
} from "lucide-react";
import logo from "@/assets/mrcool-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      {/* Top Value Bar */}
      <div className="bg-primary-foreground/5 border-b border-primary-foreground/10 py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs font-medium text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>30-Day Service Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>4.9/5 Rated on Google</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-300" />
            <span>60-Minute Rapid Response</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Mr. Cool Service Logo"
                className="w-16 h-16 rounded-xl object-cover border-2 border-primary-foreground/10"
              />
              <div>
                <h3 className="text-2xl font-display font-bold text-primary-foreground">
                  Mr. Cool Service
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  Tiruppur's #1 Appliance Experts
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed pr-4">
              We are a registered home appliance service company specializing in
              advanced diagnostics for Inverter ACs, Front-load Washing
              Machines, and Frost-free Refrigerators.
            </p>
            <div className="flex gap-4">
              {/* Social Icons - Fixed Accessibility Errors */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-primary-foreground border-l-4 border-accent pl-3">
              Our Expertise
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>›</span> AC Installation & Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>›</span> Washing Machine Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>›</span> Refrigerator/Fridge Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>›</span> Inverter PCB Chip Level Fix
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>›</span> Deep Jet-Pump Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>›</span> Multi-Brand Annual Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-primary-foreground border-l-4 border-accent pl-3">
              Service Areas
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Tiruppur North
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Tiruppur South
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Avinashi
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Palladam
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Kangeyam
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Uthukuli
              </li>
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-primary-foreground border-l-4 border-accent pl-3">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919842365480"
                className="flex items-start gap-4 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
              >
                <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-primary-foreground/60">
                    24/7 Helpline
                  </p>
                  <p className="font-bold text-primary-foreground tracking-wide">
                    +91 98423 65480
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919842365480"
                className="flex items-start gap-4 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-primary-foreground/60">
                    WhatsApp Chat
                  </p>
                  <p className="font-bold text-primary-foreground">
                    Click to Message
                  </p>
                </div>
              </a>

              <a
                href="https://share.google/cXDduDUaPPbm0pi2w"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-primary-foreground/60">
                    Head Office
                  </p>
                  <p className="text-sm text-primary-foreground leading-tight">
                    Near New Bus Stand,
                    <br />
                    Tiruppur, Tamil Nadu
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-primary-foreground/5 py-6 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© {currentYear} Mr. Cool Service. Registered Entity.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link
              to="/sitemap.xml"
              className="hover:text-accent transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
