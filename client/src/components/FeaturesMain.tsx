import React, { useState, useEffect } from "react";
import featuresMain from "../jsons/FeaturesMain.json";

const FeaturesMain = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    // Cycle through features every 5 seconds
    const interval = setInterval(() => {
      setActiveFeatureIndex((prevIndex) => {
        const maxFeatures = Math.max(
          ...featuresMain.pillars.map((pillar) => pillar.feature.length)
        );
        return (prevIndex + 1) % maxFeatures;
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full max-w-[1234px] mt-[40px] mx-auto flex flex-col">
      {/* Outer Frame */}
      <div className="flex flex-col items-center text-center text-text-black space-y-4 w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold font-title">
          {featuresMain.heading}
        </h1>

        {/* Description */}
        <p className="text-xl font-body tracking-negative-1.1 ">
          {featuresMain.description}
        </p>
      </div>

      {/* Render Pillars */}
      {featuresMain.pillars.map((pillar, pillarIndex) => (
        <div className="flex mt-[120px]" key={pillarIndex}>
          {/* Left Section */}
          <div className="flex flex-col space-y-6 w-[515px] h-auto">
            {/* Pillar Title */}
            <h2 className="text-text-black font-title text-3xl font-bold">
              {pillar.title || "Feature Title Placeholder"}
            </h2>

            {/* Render Features */}
            {pillar.feature.map((feature, featureIndex) => (
              <div
                className={`flex flex-col space-y-2 rounded-md w-full mb-6 p-4 border-l-2 border-light-grey ${
                  activeFeatureIndex === featureIndex
                    ? "bg-green bg-opacity-5" // Highlighted and expanded
                    : "" // Minimized and unhighlighted
                }`}
                key={featureIndex}
              >
                <h3 className={`font-title text-2xl text-text-black font-bold`}>
                  {feature.title || "Feature Title Placeholder"}
                </h3>
                {activeFeatureIndex === featureIndex && (
                  <p className="text-text-grey font-title">
                    {feature.description || "Feature description goes here."}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="w-[40px] h-auto"></div>

          {/* Right Section */}
          <div className="relative flex items-center justify-center bg-dark-grey flex-grow w-1/2 h-[562px] rounded-lg shadow-lg">
            {pillar.feature[activeFeatureIndex]?.screenshot ? (
              <div className="text-center">
                <i
                  className={`fas ${pillar.feature[activeFeatureIndex]?.screenshot.icon} text-6xl text-text-grey`}
                ></i>
                <p className="text-text-grey text-xl font-body mt-4">
                  {pillar.feature[activeFeatureIndex]?.screenshot.title}
                </p>
                <p className="text-text-grey text-sm font-body">
                  {pillar.feature[activeFeatureIndex]?.screenshot.description}
                </p>
              </div>
            ) : (
              <p className="text-text-grey text-4xl font-outfit">SCREENSHOT</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesMain;
