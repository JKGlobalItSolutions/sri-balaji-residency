import React, { useState } from "react";
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
  X,
  Waves,
} from "lucide-react";
import Banner5 from "@/assets/Banner5.png";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const nearbyAttractions = [
  {
    icon: Landmark,
    title: "Arunachaleswarar Temple",
    distance: "500 m",
    description:
      "The world-famous Arunachaleswarar Temple dedicated to Lord Shiva. Known for its massive gopurams, deep spiritual significance, and the grand Karthigai Deepam festival celebrated every year.",
    image: gallery1,
  },
  {
    icon: TreePine,
    title: "Annamalaiyar Hill (Arunachala Hill)",
    distance: "1 km",
    description:
      "A sacred hill considered a manifestation of Lord Shiva. Devotees perform Girivalam (circumambulation) around the 14 km path, especially on full moon days.",
    image: gallery2,
  },
  {
    icon: Building,
    title: "Sri Ramana Ashram",
    distance: "3 km",
    description:
      "A peaceful spiritual center established by Sri Ramana Maharshi. A perfect place for meditation, self-inquiry, and experiencing divine tranquility.",
    image: gallery3,
  },
  {
    icon: Waves,
    title: "Sathanur Dam",
    distance: "30 km",
    description:
      "A scenic dam surrounded by beautiful gardens and hills. Ideal for family outings, nature lovers, and photography enthusiasts.",
    image: gallery4,
  },
  {
    icon: Camera,
    title: "Virupaksha Cave",
    distance: "4 km",
    description:
      "A historic cave on Arunachala Hill where Sri Ramana Maharshi meditated. Offers a spiritual atmosphere along with panoramic views of Tiruvannamalai.",
    image: gallery5,
  },
  {
    icon: Utensils,
    title: "Local South Indian Cuisine",
    distance: "1-2 km",
    description:
      "Enjoy authentic Tamil Nadu meals, traditional tiffin varieties, and filter coffee from local restaurants around the temple area.",
    image: gallery6,
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

interface Attraction {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  distance: string;
  description: string;
  image: string;
}

interface AttractionFlipCardProps {
  attraction: Attraction;
  index: number;
  flippedIndex: number | null;
  onCardClick: (index: number) => void;
  onBackClick: (e: React.MouseEvent, index: number) => void;
}

const AttractionCard: React.FC<AttractionFlipCardProps> = ({ 
  attraction, 
  index, 
  flippedIndex, 
  onCardClick, 
  onBackClick 
}) => {
  return (
    <div className="rounded-xl bg-card border border-border p-6 hover:shadow-elevated transition-shadow">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <attraction.icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{attraction.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{attraction.description}</p>
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {attraction.distance} from hotel
          </div>
        </div>
      </div>
    </div>
  );
};

const Tourism = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={Banner5}
          alt="Tourism"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Explore the City
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Discover amazing attractions near Sri Balaji Residency
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
            {nearbyAttractions.map((attraction, index) => (
              <AttractionCard
                key={attraction.title}
                attraction={attraction}
                index={index}
                flippedIndex={null}
                onCardClick={() => {}}
                onBackClick={() => {}}
              />
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