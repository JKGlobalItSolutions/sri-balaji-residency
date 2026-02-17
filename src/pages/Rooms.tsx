import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Wind, Users, Bed, Tv, Bath, Coffee, Clock } from "lucide-react";

import hero2 from "@/assets/hero-2.jpg";
import roomSingle from "@/assets/room-single.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const rooms = [
  {
    id: "Family Room",
    image: roomSingle,
    name: "Family Room",
    description: "Perfect for solo travelers seeking comfort and convenience. Our single rooms offer a cozy retreat with all essential amenities for a restful stay.",
    bedType: "King Bed",
    capacity: 6,
    price: 4000,
    features: [
      "Comfortable single bed with premium bedding",
      "Air conditioning with individual control",
      "High-speed WiFi connectivity",
      "32-inch flat-screen TV",
      "Work desk with chair",
      "En-suite bathroom with hot water",
      "Daily housekeeping",
      "Complimentary toiletries",
    ],
  },
  {
    id: "Suite Room",
    image: roomDouble,
    name: "Suite Room",
    description: "Ideal for couples or travelers who appreciate extra space. Our double rooms feature elegant interiors and premium amenities for a comfortable stay.",
    bedType: "King Bed",
    capacity: 3,
    price: 3000,
    features: [
      "Spacious King-size bed with luxury linens",
      "Air conditioning with individual control",
      "High-speed WiFi connectivity",
      "40-inch flat-screen TV",
      "Sitting area with comfortable chairs",
      "Large en-suite bathroom with hot water",
      "Daily housekeeping",
      "Complimentary toiletries and bathrobes",
      "Mini refrigerator",
    ],
  },
  {
    id: "Standard Room",
    image: roomDeluxe,
    name: "Standard Room",
    description: "Our premium offering for guests who seek the finest in comfort and luxury. Deluxe rooms provide generous space and top-tier amenities.",
    bedType: "King Bed",
    capacity: 3,
    price: 2500,
    features: [
      "Premium king-size bed with Egyptian cotton linens",
      "Climate control with individual settings",
      "High-speed WiFi and wired internet",
      "50-inch smart TV with streaming",
      "Separate living area with sofa",
      "Luxury bathroom with rain shower",
      "Daily housekeeping",
      "Premium toiletries and bathrobe",
      "Mini bar and refrigerator",
      "In-room safe",
      "Welcome amenities",
    ],
  },
];

const RoomDetailCard = ({ room }: { room: typeof rooms[0] }) => {
  return (
    <div id={room.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-12 border-b border-border last:border-0">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-6">
        <div>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-2">{room.name}</h2>
          <p className="text-muted-foreground">{room.description}</p>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Bed className="h-4 w-4 text-primary" />
            <span>{room.bedType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>{room.capacity} {room.capacity === 1 ? "Person" : "Persons"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Wind className="h-4 w-4 text-primary" />
            <span>Air Conditioned</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Wifi className="h-4 w-4 text-primary" />
            <span>Free WiFi</span>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Room Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {room.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
          <div>
            <span className="text-4xl font-serif font-bold text-primary">₹{room.price.toLocaleString()}</span>
            <span className="text-muted-foreground"> / night</span>
          </div>
          <Button size="lg" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={hero2}
          alt="Our Rooms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Our Rooms
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Comfort and elegance for every traveler
          </p>
        </div>
      </section>

      {/* Room Quick Links */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {rooms.map((room) => (
              <a
                key={room.id}
                href={`#${room.id}`}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-colors text-foreground"
              >
                {room.name} - ₹{room.price.toLocaleString()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {rooms.map((room) => (
            <RoomDetailCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle title="Room Policies" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <Clock className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Check-in</h4>
                <p className="text-sm text-muted-foreground">From 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <Clock className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Check-out</h4>
                <p className="text-sm text-muted-foreground">By 11:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <Coffee className="h-6 w-6 text-primary shrink-0" />
              {/* <div>
                <h4 className="font-semibold text-foreground mb-1">Breakfast</h4>
                <p className="text-sm text-muted-foreground">Available on request</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
