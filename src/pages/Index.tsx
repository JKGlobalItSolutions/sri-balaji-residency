import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import RoomCard from "@/components/RoomCard";
import AmenityCard from "@/components/AmenityCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import ContactForm from "@/components/ContactForm";
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
  MapPin,
  Landmark,
  ShoppingBag,
  Navigation,
  Phone,
  Mail,
} from "lucide-react";

import roomSingle from "@/assets/room-single.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const rooms = [
  // {
  //   image: roomSingle,
  //   name: "Single Room",
  //   bedType: "Single Bed",
  //   capacity: 1,
  //   price: 1800,
  // },
  {
    image: roomDouble,
    name: "Suite Room",
    bedType: "King Bed",
    capacity: 3,
    price: 3000,
  },
  {
    image: roomDeluxe,
    name: "Standard Room",
    bedType: "King Bed",
    capacity: 3,
    price: 2500,
  },
];

const amenities = [
  { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
  { icon: Wind, title: "Air Conditioning", description: "Climate-controlled rooms" },
  { icon: ConciergeBell, title: "24/7 Room Service", description: "Round-the-clock assistance" },
  { icon: Car, title: "Parking Facility", description: "Secure parking available" },
  { icon: Droplets, title: "Hot Water", description: "24-hour hot water supply" },
  { icon: ShieldCheck, title: "CCTV Security", description: "24/7 surveillance" },
  { icon: Tv, title: "TV", description: "Flat-screen televisions" },
  { icon: Zap, title: "Power Backup", description: "Uninterrupted power supply" },
  // { icon: Bath, title: "Clean Bathrooms", description: "Hygienic facilities" },
  // { icon: WashingMachine, title: "Laundry Service", description: "Professional cleaning" },
];

const galleryImages = [
  { src: gallery1, alt: "Restaurant Dining Area" },
  { src: gallery2, alt: "Luxury Bathroom" },
  { src: gallery3, alt: "Reception Desk" },
  { src: gallery4, alt: "Hotel Corridor" },
  { src: gallery5, alt: "Lounge Area" },
  { src: gallery6, alt: "Hotel Exterior" },
  { src: gallery7, alt: "Conference Room" },
  { src: gallery8, alt: "Breakfast Buffet" },
];

const tourism = [
  { icon: Landmark, title: "Local Temples", description: "Visit ancient temples and spiritual sites within 5km radius" },
  { icon: MapPin, title: "Tourist Spots", description: "Popular attractions and heritage sites nearby" },
  { icon: ShoppingBag, title: "Shopping Areas", description: "Local markets and shopping districts" },
  { icon: Navigation, title: "Travel Assistance", description: "We help arrange transportation and tours" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="About Sri Balaji Residency"
              subtitle="Your comfort is our priority"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
             Sri Balaji Residency offers premium quality rooms designed for comfort, cleanliness, and relaxation.
              We provide affordable luxury stays for business travelers, families, and tourists with modern
              amenities and excellent hospitality. Our dedicated team ensures every guest experiences the
              warmth of genuine Indian hospitality combined with world-class facilities.
            </p>
            <Button variant="default" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Rooms"
            subtitle="Choose from our carefully designed accommodations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.name} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Amenities"
            subtitle="Everything you need for a comfortable stay"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.title} {...amenity} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Gallery"
            subtitle="Take a glimpse of our elegant spaces"
          />
          <GalleryLightbox images={galleryImages} />
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section id="tourism" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Nearby"
            subtitle="TMS Residency is located near popular tourist destinations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tourism.map((item) => (
              <AmenityCard key={item.title} {...item} />
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            TMS Residency is ideally located near popular tourist destinations, making it
            perfect for travelers exploring the city. Our concierge team is happy to assist
            with travel arrangements and recommendations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Contact Us"
            subtitle="Get in touch with us for bookings and inquiries"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.27!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA4MMKwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TMS Residency Location"
              />
            </div>

            {/* Contact Info & Form */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="tel:6383288528"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-foreground">6383288528</p>
                  </div>
                </a>
                <a
                  href="mailto:info@tmsresidency.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold text-foreground">info@tmsresidency.com</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="font-serif text-2xl font-semibold mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
