import { VerticalDataType } from "../types";

interface TitleProps {
  verticalData: VerticalDataType;
}

function Title({
  verticalData,
}: TitleProps) {
  const {
    title,
    title: { heroimage },
  } = verticalData;

  const selectedOption = new URL(`../${heroimage}`, import.meta.url).href;

  return (
    <div className="bg-dark-grey">
      <header className="max-w-[1282px] mx-auto px-5 py-8">
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
                className="inline-block bg-red text-white px-[16px] py-[10px] rounded-lg hover:bg-[#d93951] active:scale-95 transform transition-all duration-150 text-2xl font-title font-medium"
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
