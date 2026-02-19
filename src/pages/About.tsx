import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Award, Heart, Users, Sparkles } from "lucide-react";

import Banner4 from "@/assets/Banner4.png";
import gallery5 from "@/assets/gallery-10.jpg";

const highlights = [
  "Premium quality rooms at affordable prices",
  "Modern amenities and world-class facilities",
  "24/7 dedicated customer support",
  "Prime location near tourist attractions",
  "Spotless cleanliness and hygiene standards",
  "Experienced and friendly staff",
];

const values = [
  {
    icon: Heart,
    title: "Genuine Hospitality",
    description: "We treat every guest like family, ensuring warmth and comfort throughout your stay.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from room quality to customer care.",
  },
  {
    icon: Users,
    title: "Guest-Centric",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver personalized experiences.",
  },
  {
    icon: Sparkles,
    title: "Cleanliness",
    description: "We maintain the highest standards of cleanliness and hygiene in all our facilities.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={Banner4}
          alt="About Sri Balaji Residency"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Your trusted partner for comfortable stays
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="A legacy of hospitality excellence"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sri Balaji Residency was founded with a simple yet powerful vision: to provide travelers
                with comfortable, clean, and affordable accommodation without compromising on quality.
                What started as a modest establishment has grown into a trusted name in hospitality,
                serving thousands of satisfied guests every year.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey has been guided by the principles of genuine Indian hospitality, where
                every guest is treated as family. We believe that a great stay is not just about
                luxurious amenities, but about the warmth of service and attention to detail that
                makes you feel truly at home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Sri Balaji Residency stands as a testament to our commitment to excellence, offering
                premium rooms equipped with modern facilities, all at prices that respect your budget.
                Whether you're a business traveler, a family on vacation, or a tourist exploring the
                city, we promise an experience that exceeds your expectations.
              </p>
            </div>
            <div className="relative">
              <img
                src={gallery5}
                alt="Sri Balaji Residency Lounge"
                className="rounded-lg shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif text-4xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional hospitality experiences that combine comfort, cleanliness,
                and affordability. We are committed to making every guest feel valued and cared for,
                ensuring their stay with us is memorable for all the right reasons.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and preferred accommodation choice for travelers,
                known for our unwavering commitment to quality, service excellence, and genuine
                hospitality that reflects the best of Indian culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Sri Balaji Residency"
            subtitle="What sets us apart from the rest"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-lg bg-card border border-border luxury-hover"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience Sri Balaji Residency?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your stay today and discover why thousands of guests choose us for their accommodation needs.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Book Your Stay</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
