import { Wifi, Wind, Users, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface RoomCardProps {
  image: string;
  name: string;
  bedType: string;
  capacity: number;
  price: number;
  features?: string[];
}

const RoomCard = ({ image, name, bedType, capacity, price, features = [] }: RoomCardProps) => {
  return (
    <div className="group luxury-card rounded-lg overflow-hidden luxury-hover">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-serif text-2xl font-semibold text-foreground">{name}</h3>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Bed className="h-4 w-4 text-primary" />
            <span>{bedType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{capacity} {capacity === 1 ? "Person" : "Persons"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary" />
            <span>Air Conditioned</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-primary" />
            <span>Free WiFi</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div>
            <span className="text-3xl font-serif font-bold text-primary">₹{price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground"> / night</span>
          </div>
          <Button variant="default" asChild>
            <Link to="/rooms">View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
