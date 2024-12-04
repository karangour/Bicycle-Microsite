
import circle from "../assets/logos/circle.svg";

const KeepInTouch = () => {
  return (
    <div className="relative flex flex-col items-center bg-light-grey w-full mt-[81px] h-[517px]">
      {/* Background */}
      <div className="absolute w-full h-full bg-grey"></div>

      {/* Decorative Circles */}
      <img
        src={circle}
        alt="Decorative Circle"
        className="absolute top-0 left-0 w-[300px]"
      />
      <img
        src={circle}
        alt="Decorative Circle"
        className="absolute bottom-0 right-0 w-[300px] rotate-180"
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-8 mt-28 mb-28">
        {/* Heading */}
        <h1 className="text-5xl font-semibold font-body text-text-black">
          Keep in Touch
        </h1>
        <h1 className="text-2xl font-body text-text-black mt-8 w-4/5">
          Book a five minute demo to transform your operations.
        </h1>
        <div className="flex items-center mt-16">
          {/* Input Text Bar */}
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[580px] h-[54px] px-4 py-2 text-lg font-body rounded-lg focus:outline-none focus:ring-2 mr-4"
          />

          {/* Call-to-Action Button */}
          <button className="w-[193px] px-6 py-2 h-[54px] bg-red text-white text-xl font-medium rounded-lg hover:bg-[#d93951] active:scale-95 transform transition-all duration-150">
            BOOK A DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeepInTouch;
