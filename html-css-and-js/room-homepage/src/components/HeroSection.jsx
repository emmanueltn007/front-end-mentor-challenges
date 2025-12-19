import { useState } from "react";

function HeroSection() {
  /*
  const imagesMobile = [
    "/images/mobile-image-hero-1.jpg",
    "/images/mobile-image-hero-2.jpg",
    "/images/mobile-image-hero-3.jpg",
  ];
  */

  const images = [
    "/images/desktop-image-hero-1.jpg",
    "/images/desktop-image-hero-2.jpg",
    "/images/desktop-image-hero-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  //const [images, setImages] = useState(imagesMobile);

  /*
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImages(imagesDesktop);
      } else {
        setImages(imagesMobile);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  */

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="grid grid-rows-[400px_400px] md:grid-cols-[1.5fr_1fr] md:grid-rows-1">
      <div className="relative z-1">
        <img
          className=""
          src={images[currentIndex]}
          alt="slider-image"
        />
        <div className="absolute right-0 -translate-y-full md:translate-x-full">
          <button className="bg-black pl-6 pr-6 pt-4 pb-4" onClick={handlePrev}>
            <img src="/images/icon-angle-left.svg" alt="left-arrow-icon" />
          </button>
          <button className="bg-black pl-6 pr-6 pt-4 pb-4" onClick={handleNext}>
            <img src="/images/icon-angle-right.svg" alt="right-arrow-icon" />
          </button>
        </div>
      </div>
      <div className="pl-16 pr-16 flex flex-col gap-8 justify-center">
        <h1 className="text-3xl font-bold">
          Discover innovative ways to decorate
        </h1>
        <p className="text-[hsl(0,0%,63%)] font-bold">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div className="flex gap-4">
          <span className="tracking-[0.5rem]">SHOP NOW</span>
          <img src="/images/icon-arrow.svg" alt="arrow-icon" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
