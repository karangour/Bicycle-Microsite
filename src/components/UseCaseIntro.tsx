import React from 'react';

const UseCaseIntro: React.FC = () => {
  return (
    <div className="relative w-[1234px] h-[459px] mx-auto mt-[996px]">
      <div className="flex flex-col space-y-20">
        {/* Section 1 */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-text-black text-[2.5rem] font-semibold font-title">
            Overcoming OTA-Specific Challenges
          </h2>
          <p className="text-text-black text-lg font-body">
            As an OTA, you're inundated with data from bookings, suppliers, payments, and customer interactions. Yet, turning this fragmented information into meaningful action is a struggle. Common hurdles include:
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex space-x-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-[16px] shadow-lg p-4 w-[384px]">
            <div className="flex items-center justify-center w-[62px] h-[62px] bg-light-grey rounded-full">
              {/* Replace with your icon */}
              <span className="text-[#00C2A0]">💰</span>
            </div>
            <h3 className="text-text-black text-lg mt-4 font-semibold font-title">Data Silos</h3>
            <p className="text-text-black text-sm text-center font-body">
              Booking systems, supplier databases, and customer platforms don't communicate seamlessly, making it tough to get a unified view.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-[16px] shadow-lg p-4 w-[384px]">
            <div className="flex items-center justify-center w-[62px] h-[62px] bg-light-grey rounded-full">
              {/* Replace with your icon */}
              <span className="text-[#00C2A0]">🔍</span>
            </div>
            <h3 className="text-text-black text-lg mt-4 font-semibold font-title">Real-Time Issue Detection</h3>
            <p className="text-text-black text-sm text-center font-body">
              Identifying booking errors, supplier failures, or payment declines as they happen is critical but challenging.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-[16px] shadow-lg p-4 w-[384px]">
            <div className="flex items-center justify-center w-[62px] h-[62px] bg-light-grey rounded-full">
              {/* Replace with your icon */}
              <span className="text-[#00C2A0]">📊</span>
            </div>
            <h3 className="text-text-black text-lg mt-4 font-semibold font-title">Actionable Insights Lacking</h3>
            <p className="text-text-black text-sm text-center font-body">
              Traditional tools show what happened but not why, leaving teams guessing about root causes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseIntro;
