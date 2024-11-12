import React, { useState, useEffect } from "react";
import data_icon_light from "../assets/logos/data_toggle_light.svg";
import data_icon_dark from "../assets/logos/data_toggle_dark.svg";
import bizz_icon_light from "../assets/logos/bizz_toggle_light.svg";
import bizz_icon_dark from "../assets/logos/bizz_toggle_dark.svg";
import minus from "../assets/logos/minus.svg";
import plus from "../assets/logos/plus.svg";
import useCaseMain from "../jsons/UseCaseMain.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { animated, useSpring } from "react-spring";

const SequentialProgressBars: React.FC<{
  totalScreenshots: number;
  activeIndex: number;
}> = ({ totalScreenshots, activeIndex }) => {
  return (
    <div className="flex space-x-2">
      {[...Array(totalScreenshots)].map((_, index) => (
        <SingleProgressBar key={index} isActive={index === activeIndex} />
      ))}
    </div>
  );
};

const SingleProgressBar: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  // Use the common timer to animate the fill of the bar
  const fillStyles = useSpring({
    from: { width: "0%" },
    to: { width: isActive ? "100%" : "0%" },
    reset: isActive,
    config: { duration: 5000 }, // Use same duration as interval
  });

  return (
    <div
      className={`overflow-hidden bg-grey ${
        isActive ? "w-[100px] h-[6px]" : "w-[62px] h-[4px]"
      }`}
    >
      <animated.div
        style={{ ...fillStyles }}
        className={`h-full ${isActive ? "bg-green" : "bg-grey"}`}
      ></animated.div>
    </div>
  );
};

const UseCaseMain: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Data");
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const useCases =
    selectedOption === "Data" ? useCaseMain.data : useCaseMain.business;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveScreenshotIndex(
        (prevIndex) => (prevIndex + 1) % useCases[0].screenshots.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [useCases]);

  useEffect(() => {
    if (activeScreenshotIndex > 0) {
      setIsAnimating(true);
    }
  }, [activeScreenshotIndex]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const handleToggle = (option: string) => {
    setSelectedOption(option);
    setActiveScreenshotIndex(0);
    setOpenIndex(0);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
    setActiveScreenshotIndex(0);
  };

  const getFontAwesomeIcon = (iconName: keyof typeof Icons) => {
    const icon = Icons[iconName] as IconProp;
    return icon ? <FontAwesomeIcon icon={icon} className="fill-white" /> : null;
  };

  return (
    <div className="flex flex-col items-center bg-white py-10 mt-[80px]">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold font-title text-text-black">
          {useCaseMain.heading}
        </h1>
        <p className="text-xl text-text-black max-w-2xl">
          {useCaseMain.subheading}
        </p>
      </div>

      <div className="relative flex items-center justify-center w-[348px] h-[52px] bg-transparent mt-[50px]">
        <div className="absolute inset-0 rounded-full bg-[#15202B]" />
        <div
          className="absolute left-0.5 h-[48px] w-1/2 rounded-full bg-green transition-transform duration-300"
          style={{
            transform:
              selectedOption === "Data" ? "translateX(0%)" : "translateX(98%)",
          }}
        />
        <button
          className={`relative z-10 flex w-1/2 justify-center items-center text-2xl rounded-full px-3 py-2 ${
            selectedOption === "Data" ? "text-text-black" : "text-white"
          }`}
          onClick={() => handleToggle("Data")}
        >
          <img
            src={selectedOption === "Data" ? data_icon_dark : data_icon_light}
            alt="data icon"
            className="mr-2"
          />
          Data
        </button>
        <button
          className={`relative z-10 flex w-1/2 justify-center items-center text-2xl rounded-full px-3 py-2 ${
            selectedOption === "Business" ? "text-text-black" : "text-white"
          }`}
          onClick={() => handleToggle("Business")}
        >
          <img
            src={
              selectedOption === "Business" ? bizz_icon_dark : bizz_icon_light
            }
            alt="business icon"
            className="mr-2"
          />
          Business
        </button>
      </div>

      <div className="flex flex-col items-center mt-[56px] w-[1234px]">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-grey-50 border border-grey rounded-lg w-full mb-[24px]"
          >
            <div
              className="flex items-center justify-between px-6 py-4 border-b border-grey cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-2xl text-text-black font-bold">
                {useCase.title}
              </h3>
              <div className="text-green text-2xl">
                <img src={openIndex === index ? minus : plus} />
              </div>
            </div>

            {openIndex === index && (
              <div className="flex flex-row items-start gap-8 px-6 py-6">
                <div className="flex flex-col w-[450px] font-title">
                  <div className="mb-[32px]">
                    <h4 className="text-lg font-bold mb-2 text-red">Problem</h4>
                    <p className="text-text-grey">{useCase.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-green">
                      Solution
                    </h4>
                    <p className="text-text-grey">{useCase.solution}</p>
                  </div>
                </div>
                <div className="flex flex-col w-2/3">
                  <div className="flex flex-col flex-grow relative text-text-grey bg-dark-grey font-outfit h-[480px] overflow-hidden rounded-2xl">
                    {useCase.screenshots.map((screenshot, i) => (
                      <div
                        key={i}
                        onAnimationEnd={handleAnimationEnd}
                        className={`absolute rounded-lg flex flex-col items-center justify-center p-4 transition-transform ease-in-out w-full h-[480px] bg-dark-grey ${
                          i === activeScreenshotIndex
                            ? isAnimating
                              ? "transform translate-x-0 animate-slideInLeft z-10"
                              : "transform translate-x-0 z-10"
                            : i < activeScreenshotIndex
                            ? "transform translate-x-0 z-0"
                            : "hidden"
                        }`}
                      >
                        <div className="text-4xl mb-5 border-green border-4 p-2 text-red rounded-2xl">
                          {getFontAwesomeIcon(
                            screenshot.icon as keyof typeof Icons
                          )}
                        </div>
                        <h5 className="text-lg font-bold mb-2">
                          {screenshot.title}
                        </h5>
                        <p className="text-center">{screenshot.description}</p>
                        <ul className="mt-4">
                          {Object.entries(screenshot).map(
                            ([key, value], index) =>
                              key.startsWith("datapoint") && (
                                <li key={key} className="flex items-center">
                                  <span className="font-light text-sm">
                                    DATA POINT {index - 2}{" "}
                                  </span>
                                  <span className="ml-2 font-semibold text-lg">
                                    {value}
                                  </span>
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-[16px]">
                    <span className="text-text-grey font-outfit">
                      {useCase.screenshots[activeScreenshotIndex].title}
                    </span>
                    <SequentialProgressBars
                      totalScreenshots={useCase.screenshots.length}
                      activeIndex={activeScreenshotIndex}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseMain;
