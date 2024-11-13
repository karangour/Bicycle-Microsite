import React from "react";

const FeaturesMain = () => {
  return (
    <div className="w-full max-w-[1234px] mt-[40px] mx-auto flex flex-col space-y-14">
      {/* Outer Frame */}
      <div className="flex flex-col items-center text-center text-text-black space-y-4 w-full h-[169px]">
        {/* Title */}
        <h1 className="text-4xl font-bold font-title">
          Key Features Tailored for Success
        </h1>

        {/* Description */}
        <p className="text-xl font-body tracking-negative-1.1">
          Explore Bicycle's powerful features designed to enhance operational
          efficiency and drive growth. From seamless integrations to real-time
          analytics, each tool transforms data into actionable insights,
          empowering businesses to make informed decisions and boost
          performance.
        </p>
      </div>
      <div className="flex">
        {/* left section */}
        <div className="flex flex-col space-y-6 w-[515px] h-[394px]">
          {/* Feature Title */}
          <h2 className="text-text-black font-title text-3xl font-bold">
            Auto Onboarding
          </h2>

          {/* Feature Description */}
          <div className="flex items-start space-x-4 bg-green bg-opacity-5 p-6 rounded-md w-full mb-6">
            <div className="flex flex-col space-y-2">
              <h3 className="text-text-black font-title text-2xl font-bold">
                1-click data onboarding
              </h3>
              <p className="text-text-grey font-title">
                Ingest data seamlessly with hundreds of integrations. Bicycle’s
                LLM-powered engine auto-discovers relationships using built-in
                industry context.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40px] h-[562px]"></div>
        {/* right section */}
        <div className="relative flex items-center justify-center bg-dark-grey flex-grow w-1/2 h-[562px] rounded-lg shadow-lg">
          <p className="text-text-grey text-4xl font-outfit">SCREENSHOT</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesMain;
