import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Amenities", href: "/amenities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Tourism", href: "/tourism" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Sri Balaji Residency</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Experience premium quality rooms designed for comfort, cleanliness, and relaxation. 
              Affordable luxury stays for business travelers, families, and tourists.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6383288528"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <span className="text-sm">6383288528</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tmsresidency.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  <span className="text-sm">balajiresidencytiruvannamalai@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span className="text-sm">
                    No.42/29A VOC Nagar 7th Street, Tiruvannamalai,
                    <br />
                    Tamil Nadu, India - 600001
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex justify-between">
                <span>Reception</span>
                <span>24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Check-in</span>
                <span>12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Check-out</span>
                <span>11:00 AM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-primary-foreground/50">
            © 2026 Sri Balaji Residency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
