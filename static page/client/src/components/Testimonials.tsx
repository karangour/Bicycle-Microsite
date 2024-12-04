import React, { useState } from "react";
import right_arrow from "../assets/logos/right_arrow.svg";
import left_arrow from "../assets/logos/left_arrow.svg";
import testimonialArray from "../jsons/Testimonials.json";

const Testimonials: React.FC = () => {
  const testimonials = testimonialArray.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const navigateRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col w-[1234px] mx-auto mt-[60px] overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold font-title text-center text-text-black">
        Don’t take our word for it
      </h2>

      {/* Testimonial */}
      <div className="relative flex items-center mt-[39px] w-full h-[304.15px] pl-6 pr-6">
        {/* Left Arrow */}
        <button
          onClick={navigateLeft}
          className="absolute left-0 flex items-center justify-center w-[45px] h-auto hover:scale-125 active:scale-95 transform transition-all duration-150 z-10 ml-2"
        >
          <img src={left_arrow} alt="Previous" className="w-full h-full" />
        </button>

        {/* Testimonial Slider */}
        <div className="overflow-hidden flex-grow relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-full"
                style={{
                  width: "100%",
                }}
              >
                <div className="flex w-[913px] space-x-9 items-center">
                  {/* Left Icon */}
                  <div className="w-[241.5px] h-auto bg-grey rounded-full flex items-center justify-center overflow-hidden aspect-square">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </div>

                  {/* Quote Content */}
                  <div className="flex flex-col space-y-6">
                    <img
                      src={
                        new URL(`../${testimonial.icon}`, import.meta.url).href
                      }
                      alt={`Company Icon ${index + 1}`}
                      className="w-[204px]"
                    />
                    <p className="text-2xl font-title w-[636px]">
                      {testimonial.text}
                    </p>
                    <div>
                      <p className="text-2xl font-medium font-titlefont-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-sm">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={navigateRight}
          className="absolute right-0 flex items-center justify-center w-[45px] h-auto hover:scale-125 active:scale-95 transform transition-all duration-150 z-10  mr-2"
        >
          <img src={right_arrow} alt="Next" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
