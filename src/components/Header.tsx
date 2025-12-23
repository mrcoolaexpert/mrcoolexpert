import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mrcool-logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/brands", label: "Brands" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+918220915207"
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 82209 15207
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Tiruppur, Tamil Nadu
            </span>
          </div>
          <span className="text-secondary">
            Serving Tiruppur, Avinashi, Palladam & 15km radius
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover-scale">
            <img
              src={logo}
              alt="Mr. Cool Service Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-display font-bold text-primary">
                Mr. Cool Service
              </h1>
              <p className="text-xs text-muted-foreground">
                AC Experts in Tiruppur
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+918220915207">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+918220915207" className="mt-2">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
