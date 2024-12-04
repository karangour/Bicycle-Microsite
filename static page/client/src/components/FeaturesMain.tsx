import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { animated, useSpring } from "react-spring";
import { VerticalDataType } from "../types";

interface FeaturesMainProps {
  verticalData: VerticalDataType;
}

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
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (isActive) {
      setReset(true);
      const timeout = setTimeout(() => setReset(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  const fillStyles = useSpring({
    from: { height: reset ? "0%" : "100%" },
    to: { height: isActive ? "100%" : "0%" },
    reset: reset,
    config: { duration: 5000 },
  });

  return (
    <div className="overflow-hidden bg-grey w-[4px]">
      <animated.div
        style={fillStyles}
        className={`h-full ${isActive ? "bg-green" : "bg-grey"}`}
      ></animated.div>
    </div>
  );
};

const FeaturesMain: React.FC<FeaturesMainProps> = ({ verticalData }) => {
  const featuresMain = verticalData.features;
  const [activeFeatureIndices, setActiveFeatureIndices] = useState<number[]>(
    []
  );

  const timers = useRef<(NodeJS.Timeout | null)[]>([]);

  const observerRefs = useMemo(
    () =>
      featuresMain
        ? featuresMain.pillars.map(() => React.createRef<HTMLDivElement>())
        : [],
    [featuresMain]
  );

  const startTimer = useCallback(
    (pillarIndex: number) => {
      clearTimer(pillarIndex);
      const maxFeatures = featuresMain!.pillars[pillarIndex].feature.length;

      timers.current[pillarIndex] = setInterval(() => {
        setActiveFeatureIndices((prev) => {
          const newIndices = [...prev];
          newIndices[pillarIndex] = (newIndices[pillarIndex] + 1) % maxFeatures;
          return newIndices;
        });
      }, 5000);
    },
    [featuresMain]
  );

  const clearTimer = useCallback((pillarIndex: number) => {
    if (timers.current[pillarIndex]) {
      clearInterval(timers.current[pillarIndex]!);
      timers.current[pillarIndex] = null;
    }
  }, []);

  const handleIntersection = useCallback(
    (entry: IntersectionObserverEntry, pillarIndex: number) => {
      if (entry.isIntersecting) {
        setActiveFeatureIndices((prev) => {
          const newIndices = [...prev];
          newIndices[pillarIndex] = 0;
          return newIndices;
        });

        if (!timers.current[pillarIndex]) {
          startTimer(pillarIndex);
        }
      } else {
        clearTimer(pillarIndex);
        setActiveFeatureIndices((prev) => {
          const newIndices = [...prev];
          newIndices[pillarIndex] = -1;
          return newIndices;
        });
      }
    },
    [startTimer, clearTimer]
  );

  useEffect(() => {
    if (!featuresMain) return;

    const observers = featuresMain.pillars.map((_, pillarIndex) => {
      const observer = new IntersectionObserver(
        ([entry]) => handleIntersection(entry, pillarIndex),
        { threshold: 0.5 }
      );

      const currentRef = observerRefs[pillarIndex]?.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        const currentRef = observerRefs[index]?.current;
        if (currentRef) {
          observer.unobserve(currentRef);
        }
        clearTimer(index);
      });
    };
  }, [featuresMain, observerRefs, handleIntersection]);

  const getFontAwesomeIcon = (iconName: keyof typeof Icons) => {
    const icon = Icons[iconName] as IconProp;
    return icon ? <FontAwesomeIcon icon={icon} className="fill-white" /> : null;
  };

  return (
    <div className="w-full max-w-[1234px] mt-[40px] mx-auto flex flex-col">
      <div className="flex flex-col items-center text-center text-text-black space-y-4 w-full">
        {featuresMain && (
          <>
            <h1 className="text-4xl font-bold font-title">
              {featuresMain.heading}
            </h1>
            <p className="text-xl font-body tracking-negative-1.1">
              {featuresMain.description}
            </p>
          </>
        )}
      </div>

      {featuresMain &&
        featuresMain.pillars.map((pillar, pillarIndex) => (
          <div
            className={`flex mt-[120px] ${
              pillarIndex % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={pillarIndex}
            ref={observerRefs[pillarIndex]}
          >
            <div className="flex flex-col space-y-6 w-[515px] h-auto">
              <h2 className="text-text-black font-title text-3xl font-bold">
                {pillar.title}
              </h2>
              {pillar.feature.map((feature, featureIndex) => (
                <div className="flex w-full h-fit" key={featureIndex}>
                  {pillarIndex % 2 === 0 && (
                    <SequentialProgressBars
                      totalScreenshots={1}
                      activeIndex={
                        activeFeatureIndices[pillarIndex] === featureIndex
                          ? 0
                          : -1
                      }
                    />
                  )}
                  <div
                    className={`flex flex-col space-y-2 rounded-br-md rounded-tr-md w-full p-4 overflow-hidden transition-all duration-500 ${
                      activeFeatureIndices[pillarIndex] === featureIndex
                        ? "bg-green bg-opacity-5 max-h-[200px]"
                        : "max-h-12"
                    }`}
                  >
                    <h3 className="font-title text-2xl text-text-black font-bold">
                      {feature.title}
                    </h3>
                    <p
                      className={`text-text-grey font-title transition-opacity duration-500 ${
                        activeFeatureIndices[pillarIndex] === featureIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {pillarIndex % 2 !== 0 && (
                    <SequentialProgressBars
                      totalScreenshots={1}
                      activeIndex={
                        activeFeatureIndices[pillarIndex] === featureIndex
                          ? 0
                          : -1
                      }
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="w-[40px] h-auto"></div>

            <div className="relative flex items-center justify-center bg-dark-grey flex-grow w-1/2 h-[562px] rounded-lg shadow-lg overflow-hidden">
              {pillar.feature.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-text-grey transition-opacity duration-1000 ease-in-out ${
                    activeFeatureIndices[pillarIndex] === featureIndex
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div className="text-4xl mb-5 border-green border-4 p-2 text-red rounded-2xl">
                    {getFontAwesomeIcon(
                      feature.screenshot.icon as keyof typeof Icons
                    )}
                  </div>
                  <h5 className="text-lg font-bold mb-2">
                    {feature.screenshot.title}
                  </h5>
                  <p className="text-center">
                    {feature.screenshot.description}
                  </p>
                  <div className="flex flex-col items-start">
                    {feature.screenshot.datapoint?.map((data, index) => (
                      <p
                        key={index}
                        className="text-center text-sm text-gray-500 mt-2"
                      >{`DATA POINT ${index + 1} - ${data}`}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeaturesMain;
