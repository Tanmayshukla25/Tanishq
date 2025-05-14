import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const TopImagesSlider = () => {
  const images = [
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw70645f50/homepage/HeroBanner/prettypink-mobile.jpg",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb9bcbcfb/homepage/HeroBanner/prettypink-desktop.jpg",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04a43e9c/homepage/HeroBanner/dailywear-desktop.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextSlide = () => {
    setDirection("next");
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setDirection(null);
    }, 200);
  };

  const prevSlide = () => {
    setDirection("previous");
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setDirection(null);
    }, 300); 
  };

  let slideClass = "";
  if (direction === "next") {
    slideClass = "slide-in-right";
  } else if (direction === "previous") {
    slideClass = "slide-in-left";
  }

  return (
    <div className="relative w-full mx-auto mt-6 mb-[20px]">
      <div className="overflow-hidden rounded-xl shadow-md h-[75vh]">
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          className={`w-full h-auto object-cover transition-all duration-700 ease-in-out ${slideClass}`}
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
      >
        <GrPrevious />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default TopImagesSlider;
