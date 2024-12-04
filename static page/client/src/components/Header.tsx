import { useState } from "react";
import logo from "../assets/logos/bicycle_logo.svg";

type VerticalKey = "Travel" | "Fintech" | "Retail" | "Others";

function Header({ updateVerticalSelection }: { updateVerticalSelection: (selection: VerticalKey) => void }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-dark-grey">
      <header className="max-w-[1282px] mx-auto px-5 py-8">
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
              {["Travel", "Fintech", "Retail", "Others"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    updateVerticalSelection(option as VerticalKey); // Pass the selected vertical
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 active:scale-95 transform transition-transform duration-150"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="hover:text-red active:scale-95 transform transition-transform duration-150">
          RESOURCES
        </button>

        <button className="bg-red text-white px-4 py-2.5 rounded-lg hover:bg-[#d93951] active:scale-95 transform transition-all duration-150">
          BOOK A DEMO
        </button>
      </div>
              </nav>
          </header>
          </div>
  );
}

export default Header;
