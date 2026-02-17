import { LucideIcon } from "lucide-react";

interface AmenityCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const AmenityCard = ({ icon: Icon, title, description }: AmenityCardProps) => {
  return (
    <div className="group p-6 rounded-lg bg-card luxury-hover border border-border hover:border-primary/30">
      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default AmenityCard;
