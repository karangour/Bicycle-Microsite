import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { VerticalDataType } from "../types";

interface UseCaseIntroProps {
  verticalData: VerticalDataType;
}

const UseCaseIntro: React.FC<UseCaseIntroProps> = ({ verticalData }) => {
  const useCaseIntro = verticalData.usecase.intro; // Access intro data
  const exampleCount = useCaseIntro.examples.length;

  const getFontAwesomeIcon = (iconName: string): IconProp => {
    const icon = Icons[iconName as keyof typeof Icons] as IconProp;
    return icon || Icons.faLightbulb;
  };
  
  return (
    <div className="relative w-[1234px] h-[459px] mx-auto mt-[200px]">
      <div className="flex flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center w-[1000px]">
          <h2 className="text-text-black text-[2.5rem] font-bold font-title">
            {useCaseIntro.heading}
          </h2>
          <p className="text-text-black text-xl font-body font-normal">
            {useCaseIntro.subheading}
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          {useCaseIntro.examples.map((example, index) => (
            <div
              key={index}
              className={`flex flex-col items-start bg-white p-4 ${
                exampleCount === 3 ? "w-1/3" : "w-1/2"
              }`} // adjust width based on example count
            >
              <div className="w-[62px] h-[62px] flex items-start justify-start">
                <FontAwesomeIcon
                  icon={getFontAwesomeIcon(example.icon)}
                  className="text-green h-full"
                />
              </div>
              <h3 className="text-text-black text-2xl mt-4 font-bold font-title">
                {example.title}
              </h3>
              <p className="text-text-black text-xl font-body mt-3">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCaseIntro;
