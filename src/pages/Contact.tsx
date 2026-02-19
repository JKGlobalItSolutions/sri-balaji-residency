import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";

const Contact = () => {
  const whatsappNumber = "916383288528";
  const whatsappMessage = encodeURIComponent("Hello! I would like to inquire about room availability at TMS Residency.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={hero1}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            We're here to help with your booking
          </p>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3.8 gap-6">
            {/* Phone */}
            <a
              href="tel:6383288528"
              className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="text-lg font-semibold text-foreground">98946 03803</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="text-lg font-semibold text-foreground">Chat with Us</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@tmsresidency.com"
              className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="h-10 w-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                <Mail className="h-8 w-12 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Us</p>
                <p className="text-m font-semibold text-foreground">balajiresidencytiruvannamalai@gmail.com</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Reception Hours</p>
                <p className="text-lg font-semibold text-foreground">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Send us a Message"
                subtitle="Fill out the form and we'll get back to you shortly"
                centered={false}
              />
              <div className="bg-card rounded-lg p-8 border border-border">
                <ContactForm />
              </div>
            </div>

            {/* Map & Address */}
            <div>
              <SectionTitle
                title="Find Us"
                subtitle="Visit us at our convenient location"
                centered={false}
              />
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-80 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.27!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA4MMKwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TMS Residency Location"
                />
              </div>

              {/* Address Details */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Address</h3>
                    <p className="text-muted-foreground">
                      Sri Balaji Residency<br />
                      No.42/29A VOC Nagar 7th Street, Tiruvannamalai<br />
                      Tamil Nadu, India - 600001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="tel:6383288528">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 98946 03803
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
