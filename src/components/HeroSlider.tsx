import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import BB from "@/assets/BB.jpeg";
import Banner2 from "@/assets/Banner2.jpg";
import Banner3 from "@/assets/Banner3.png";

const slides = [
  {
    image: BB,
    title: "Luxury Stay at Sri  Balaji Residency",
    subtitle: "Comfort, elegance, and affordable premium rooms",
  },
  {
    image: Banner2,
    title: "Experience Premium Comfort",
    subtitle: "Thoughtfully designed rooms for the perfect rest",
  },
  {
    image: Banner3,
    title: "Your Home Away from Home",
    subtitle: "Exceptional hospitality awaits you",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              key={`title-${currentSlide}`}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in"
            >
              {slides[currentSlide].title}
            </h1>
            <p
              key={`subtitle-${currentSlide}`}
              className="text-xl md:text-2xl text-primary-foreground/90 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[currentSlide].subtitle}
            </p>
            <Button
              size="lg"
              variant="hero"
              asChild
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="https://www.booking.com/hotel/in/sri-balaji-residency-tiruvannamalai.html" target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-3 bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
