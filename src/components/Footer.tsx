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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      {/* Top Value Bar */}
      <div className="bg-primary-foreground/5 border-b border-primary-foreground/10 py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs font-medium text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>90-Day Service Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>#1 Rated AC Service</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-300" />
            <span>Open 24 Hours</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/mrcool-logo.webp"
                alt="Mr. Cool Service - Kangeyam"
                className="w-16 h-16 rounded-xl object-cover border-2 border-primary-foreground/10"
              />
              <div>
                <h3 className="text-2xl font-display font-bold text-primary-foreground">
                  Mr. Cool Service
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  Kangeyam & Tiruppur Experts
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed pr-4">
              Registered home appliance service center in Kumarasamy Colony.
              Specializing in Inverter ACs, Washing Machines, and Refrigerators.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mr.cool8220?igsh=NGNyZTMwc2hqMHU0&utm_source=ig_contact_invite"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mr.cool8220?igsh=NGNyZTMwc2hqMHU0&utm_source=ig_contact_invite"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
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
                  <span>›</span> Refrigerator Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>›</span> Multi-Brand Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-primary-foreground border-l-4 border-accent pl-3">
              Service Areas
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Kangeyam
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Kumarasamy Colony
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Tiruppur
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Avinashi
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-accent" /> Palladam
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-primary-foreground border-l-4 border-accent pl-3">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+918220915207"
                className="flex items-start gap-4 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
              >
                <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-primary-foreground/60">
                    24/7 Helpline
                  </p>
                  <p className="font-bold text-primary-foreground tracking-wide">
                    +91 82209 15207
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/918220915207"
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

              {/* FIX: Replaced broken "goo.gl" link with a direct Google Maps Search Link */}
              {/* FIX: THIS IS THE CORRECT, CRAWLABLE GOOGLE MAPS LINK */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cross+rode+Ctc,+3rd+St,+Kumarasamy+Colony,+Kangeyam,+Tiruppur,+Tamil+Nadu+641604"
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
                    Cross rode Ctc, 3rd St,
                    <br />
                    Kumarasamy Colony,
                    <br />
                    Kangeyam - 641604
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
          <p>© {currentYear} Mr. Cool Service. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              to="/services"
              className="hover:text-accent transition-colors"
            >
              AC Service Near Me
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Book Appointment
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
