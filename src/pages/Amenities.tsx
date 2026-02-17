import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wifi,
  Wind,
  ConciergeBell,
  Car,
  Droplets,
  ShieldCheck,
  Tv,
  Zap,
  Bath,
  WashingMachine,
  UtensilsCrossed,
  Phone,
  CreditCard,
  Sparkles,
  Clock,
  MapPin,
} from "lucide-react";

import hero3 from "@/assets/hero-3.jpg";

const amenities = [
  {
    icon: Wifi,
    title: "Free High-Speed WiFi",
    description: "Stay connected with complimentary high-speed internet access throughout the property. Stream, work, or browse without interruption.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "All rooms feature individual climate control for your comfort. Enjoy the perfect temperature regardless of the weather outside.",
  },
  {
    icon: ConciergeBell,
    title: "24/7 Room Service",
    description: "Our dedicated staff is available round the clock to attend to your needs. From late-night snacks to early morning requests, we're here for you.",
  },
  {
    icon: Car,
    title: "Parking Facility",
    description: "Secure and spacious parking available for guests. Our well-lit parking area is monitored 24/7 for your peace of mind.",
  },
  {
    icon: Droplets,
    title: "24-Hour Hot Water",
    description: "Enjoy hot water anytime you need it. Our reliable water heating system ensures you never have to wait for a warm shower.",
  },
  {
    icon: ShieldCheck,
    title: "CCTV Security",
    description: "Your safety is our priority. Our property is equipped with comprehensive CCTV surveillance covering all public areas.",
  },
  {
    icon: Tv,
    title: "Flat-Screen TV",
    description: "Each room comes with a modern flat-screen television featuring multiple channels for your entertainment.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Never worry about power outages. Our backup power system ensures uninterrupted electricity supply throughout your stay.",
  },
  {
    icon: Bath,
    title: "Clean Bathrooms",
    description: "Spotless, well-maintained bathrooms with modern fixtures. We follow strict hygiene protocols for your health and comfort.",
  },
  {
    icon: WashingMachine,
    title: "Laundry Service",
    description: "Professional laundry and dry cleaning services available. Get your clothes cleaned and pressed with quick turnaround times.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Options",
    description: "Enjoy delicious meals at our in-house restaurant or order room service. We offer a variety of cuisines to satisfy your palate.",
  },
  {
    icon: Phone,
    title: "Direct Dial Telephone",
    description: "Each room is equipped with a direct dial telephone for local and international calls, ensuring you stay connected.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Options",
    description: "We accept various payment methods including cash, credit cards, and digital payments for your convenience.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Our housekeeping team ensures your room is cleaned and refreshed daily, maintaining the highest standards of cleanliness.",
  },
  {
    icon: Clock,
    title: "Early Check-in / Late Check-out",
    description: "Subject to availability, we offer flexible check-in and check-out times to accommodate your travel schedule.",
  },
  {
    icon: MapPin,
    title: "Travel Assistance",
    description: "Our front desk can help arrange local transportation, tours, and provide recommendations for nearby attractions.",
  },
];

const Amenities = () => {
  return (
    <>
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={hero3}
          alt="Amenities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Amenities
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Everything you need for a comfortable stay
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Facilities"
            subtitle="Discover the amenities that make your stay exceptional"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 luxury-hover"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <amenity.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience Our Amenities?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy all the facilities that make Sri Balaji Residency special.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Book Your Stay</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Amenities;
