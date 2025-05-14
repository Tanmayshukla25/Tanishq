import React from "react";
import { motion } from "framer-motion";
import sliderImg from "./images/sliderImage@1.webp";
import newSliderimg from "./images/newSliderimg.webp";
import sliderImg3 from "./images/sliderimg3.webp";

function Slider() {
  const cards = [
    { id: 1, img: sliderImg },
    { id: 2, img: newSliderimg },
    { id: 3, img: sliderImg3 },
  ];

  return (
    <>
      <div>
   
        <div className="hidden sm:block text-center">
          <h1 className="text-3xl mt-20">Styling 101 With Diamonds</h1>
          <p className="text-2xl text-gray-500">
            Trendsetting diamond jewellery suited for every occasion
          </p>
        </div>

       
        <div className="hidden sm:block relative h-[600px] w-[320px] mx-auto mt-10">
          {cards.map((items, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${
                index === 1
                  ? "z-40 scale-100 translate-x-0"
                  : index === 0
                  ? "z-20 scale-90 translate-x-[-170px] translate-y-1"
                  : "z-10 scale-90 translate-x-[170px] translate-y-1"
              }`}
            >
              <img
                src={items.img}
                alt={`Card ${items.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
