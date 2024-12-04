import React from "react";
import bicycle from "../assets/logos/bicycle_logo.svg";
import founded_by from "../assets/logos/founded_by.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-black text-light-grey w-full py-12">
      <div className="w-[1358px] mx-auto mt-10">
        <div className="flex justify-between">
          <div className="mb-6 flex flex-col items-left gap-6">
            <img src={bicycle} className="w-[190px]" />
            <p className="font-outfit text-sm">© 2023 Bicycle</p>
          </div>
          <div className="flex font-title text-xl gap-16">
            <div className="flex flex-col gap-4">
              <p>Home</p>
              <p>Customers</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Book a Demo</p>
              <p>Contact Us</p>
              <p>Legal</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={founded_by} className="w-[872px] items-center mt-16" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
