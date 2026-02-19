import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import GalleryLightbox from "@/components/GalleryLightbox";

import Banner2 from "@/assets/Banner2.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
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
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const allImages = [
  // { src: hero1, alt: "Elegant Hotel Lobby" },
  // { src: hero2, alt: "Luxurious Bedroom Suite" },
  // { src: hero3, alt: "Rooftop Terrace" },
  { src: roomSingle, alt: "Single Room" },
  { src: roomDouble, alt: "Double Room" },
  { src: roomDeluxe, alt: "Deluxe Room" },
  { src: gallery1, alt: "Restaurant Dining Area" },
  { src: gallery2, alt: "Luxury Bathroom" },
  { src: gallery3, alt: "Reception Desk" },
  { src: gallery4, alt: "Hotel Corridor" },
  { src: gallery5, alt: "Lounge Area" },
  { src: gallery6, alt: "Hotel Exterior" },
  { src: gallery7, alt: "Conference Room" },
  { src: gallery8, alt: "Breakfast Buffet" },
  { src: gallery9, alt: "Parking Area" },
  { src: gallery10, alt: "Garden Courtyard" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={Banner2}
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90">
            A visual tour of Sri Balaji Residency
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Our Spaces"
            subtitle="Click on any image to view it in full size"
          />
          <GalleryLightbox images={allImages} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
