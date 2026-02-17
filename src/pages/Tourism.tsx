import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Landmark,
  MapPin,
  ShoppingBag,
  Navigation,
  Camera,
  TreePine,
  Building,
  Utensils,
  Train,
  Plane,
} from "lucide-react";

import hero3 from "@/assets/hero-3.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const nearbyAttractions = [
  {
    icon: Landmark,
    title: "Ancient Temples",
    distance: "2-5 km",
    description: "Visit centuries-old temples showcasing beautiful Dravidian architecture and rich spiritual heritage. Popular temples include the famous Kapaleeshwarar Temple and Parthasarathy Temple.",
  },
  {
    icon: Camera,
    title: "Marina Beach",
    distance: "8 km",
    description: "One of the longest urban beaches in the world. Perfect for morning walks, evening sunsets, and experiencing local street food culture.",
  },
  {
    icon: Building,
    title: "Government Museum",
    distance: "6 km",
    description: "One of India's oldest museums with an impressive collection of archaeological and numismatic artifacts, bronze statues, and more.",
  },
  {
    icon: TreePine,
    title: "Guindy National Park",
    distance: "10 km",
    description: "A protected area right in the city featuring diverse flora and fauna. Perfect for nature lovers and wildlife enthusiasts.",
  },
  {
    icon: ShoppingBag,
    title: "T. Nagar Shopping District",
    distance: "4 km",
    description: "The ultimate shopping destination for silk sarees, jewelry, and traditional South Indian products. A must-visit for shopaholics.",
  },
  {
    icon: Utensils,
    title: "Local Cuisine Streets",
    distance: "1-3 km",
    description: "Experience authentic South Indian cuisine from famous restaurants and street food stalls. Don't miss the filter coffee and dosas!",
  },
];

const travelInfo = [
  {
    icon: Plane,
    title: "Chennai International Airport",
    distance: "15 km",
    time: "30-45 minutes",
  },
  {
    icon: Train,
    title: "Chennai Central Railway Station",
    distance: "8 km",
    time: "20-30 minutes",
  },
  {
    icon: Train,
    title: "Egmore Railway Station",
    distance: "5 km",
    time: "15-20 minutes",
  },
  {
    icon: Navigation,
    title: "CMBT Bus Terminal",
    distance: "12 km",
    time: "25-35 minutes",
  },
];

const services = [
  "Airport pickup and drop service",
  "Local taxi arrangements",
  "Guided city tours",
  "Temple visit packages",
  "Shopping trip assistance",
  "Restaurant recommendations",
  "Train and bus ticket booking assistance",
  "Car rental services",
];

const Tourism = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={hero3}
          alt="Tourism"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Explore the City
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Discover amazing attractions near TMS Residency
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Your Gateway to Exploration"
              subtitle="Sri Balaji Residency is strategically located near popular tourist destinations"
            />
            <p className="text-muted-foreground leading-relaxed">
              Whether you're here for business or leisure, our location offers easy access to
              the city's most iconic attractions, shopping districts, and cultural landmarks.
              Our concierge team is always ready to help you plan the perfect itinerary and
              arrange transportation for a hassle-free exploration experience.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nearby Attractions"
            subtitle="Popular destinations within easy reach"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction) => (
              <div
                key={attraction.title}
                className="bg-card p-6 rounded-lg border border-border luxury-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <attraction.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                      {attraction.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {attraction.distance} from hotel
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Getting Here"
            subtitle="Distance from major transit points"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelInfo.map((info) => (
              <div
                key={info.title}
                className="text-center p-6 rounded-lg bg-card border border-border"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-2xl font-serif font-bold text-primary mb-1">{info.distance}</p>
                <p className="text-sm text-muted-foreground">{info.time} by car</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Travel Assistance */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Travel Assistance"
                subtitle="Let us help you explore"
                centered={false}
              />
              <p className="text-muted-foreground mb-6">
                Our concierge team is dedicated to making your travel experience seamless.
                From arranging transportation to recommending the best local experiences,
                we're here to help you make the most of your visit.
              </p>
              <ul className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">Contact Concierge</Link>
              </Button>
            </div>
            <div>
              <img
                src={gallery10}
                alt="Garden Courtyard"
                className="rounded-lg shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tourism;
