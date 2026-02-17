interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = true, className = "" }: SectionTitleProps) => {
  return (
    <div className={`space-y-4 mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionTitle;
