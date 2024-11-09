import React, { useState } from "react";
import logo from "../assets/logos/bicycle_logo.svg";
import title from "../jsons/Title.json";
import heroimage from "../jsons/HeroImage.json";

function Title() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    new URL(`../${heroimage.Verticals.Travel.path}`, import.meta.url).href
  );

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-dark-grey">
      <header className="max-w-[1440px] mx-auto px-5 py-8">
        <nav className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Bicycle Logo" className="w-[190px]" />
          </div>

          <div className="flex items-center gap-10 text-white font-title">
            <button className="hover:text-red active:scale-95 transform transition-transform duration-150">
              CUSTOMERS
            </button>
            <button className="hover:text-red active:scale-95 transform transition-transform duration-150">
              PRODUCTS
            </button>

            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="flex items-center gap-4 hover:text-red active:scale-95 transform transition-transform duration-150"
              >
                SOLUTIONS
                <svg
                  className={`w-5 h-5 transform transition-transform duration-150 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
                  {Object.keys(heroimage.Verticals).map((vertical) => (
                    <button
                      key={vertical}
                      onClick={() => {
                        const verticalData =
                          heroimage.Verticals[
                            vertical as keyof typeof heroimage.Verticals
                          ];
                        const newPath = new URL(
                          `../${verticalData.path}`,
                          import.meta.url
                        ).href;
                        setSelectedOption(newPath);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 active:scale-95 transform transition-transform duration-150"
                    >
                      {vertical}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="hover:text-red active:scale-95 transform transition-transform duration-150">
              RESOURCES
            </button>

            <button className="bg-red text-white px-4 py-2.5 rounded-lg hover:bg-[#d93951] active:scale-95 transform transition-transform duration-150">
              BOOK A DEMO
            </button>
          </div>
        </nav>
        {/* The Title.json section */}
        <div className="mt-32 grid grid-cols-2 gap-16">
          <div className="max-w-[580px] flex flex-col">
            <div className="space-y-2">
              <h1 className="text-white text-[3.25rem] leading-tight font-title font-semibold">
                {title.heading}
              </h1>
              <p className="text-white text-[1.25rem] font-body font-normal">
                {title.description}
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#"
                className="inline-block bg-red text-white px-[16px] py-[10px] rounded-lg hover:bg-[#d93951] active:scale-95 transform transition-transform duration-150 text-2xl font-title font-medium"
              >
                SCHEDULE A DEMO
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {selectedOption ? (
              <img
                src={selectedOption}
                alt="Selected Vertical"
                className="w-[554px] h-[429px] object-cover rounded-lg"
                onError={() =>
                  console.error("Image failed to load:", selectedOption)
                }
              />
            ) : (
              <div className="w-full h-[429px] bg-[#00C2A0]/10 rounded-lg"></div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Title;
