import { useState } from "react";
import Dropdown from "./Dropdown";
import FeaturesList from "./FeaturesList";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  {
    /* MOBILE SIDEBAR */
  }

  const [isMobileFeaturesDropdownOpen, setIsMobileFeaturesDropdownOpen] =
    useState(false);
  const [isMobileCompanyDropdownOpen, setIsMobileCompanyDropdownOpen] =
    useState(false);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);

  const handleMobileFeaturesDropdown = () =>
    setIsMobileFeaturesDropdownOpen((prev) => !prev);

  const handleMobileCompanyDropdown = () =>
    setIsMobileCompanyDropdownOpen((prev) => !prev);

  {
    /* DESKTOP FUNCTIONS */
  }

  const handleFeaturesDropdown = () =>
    setIsFeaturesDropdownOpen((prev) => !prev);

  const handleCompanyDropdown = () => setIsCompanyDropdownOpen((prev) => !prev);
  return (
    <header className="flex items-center justify-between pl-4 pr-4 pt-8 pb-8 md:pl-16 md:pr-16 relative">
      <div className="flex gap-8">
        <div>
          <img src="/images/logo.svg" alt="logo image" />
        </div>
        <nav>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* DESKTOP NAVBAR */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <ul className="flex gap-4 max-md:hidden text-[hsl(0,0%,41%)] font-semibold">
            <Dropdown
              label="Features"
              isOpen={isFeaturesDropdownOpen}
              onToggle={handleFeaturesDropdown}
            >
              <FeaturesList className="bg-white flex flex-col gap-2 rounded-md shadow-md shadow-gray-500 p-4 absolute" />
            </Dropdown>
            <Dropdown
              label="Company"
              isOpen={isCompanyDropdownOpen}
              onToggle={handleCompanyDropdown}
            >
              <ul className="flex flex-col gap-2 absolute bg-white shadow-md shadow-gray-500 rounded-md p-4">
                <li className="hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">History</li>
                <li className="hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">Our Team</li>
                <li className="hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">Blog</li>
              </ul>
            </Dropdown>
            <li>Careers</li>
            <li>About</li>
          </ul>

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* MOBILE NAVBAR */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div 
              className={`bg-white flex flex-col gap-4 text-[hsl(0,0%,41%)] font-semibold md:hidden fixed w-1/2 pl-8 pr-8 pt-16 h-screen right-0 top-0 ${
                isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
            >
            <ul >
              <Dropdown
                label="Features"
                isOpen={isMobileFeaturesDropdownOpen}
                onToggle={handleMobileFeaturesDropdown}
              >
                <FeaturesList className="ml-8" />
              </Dropdown>
              <Dropdown
                label="Company"
                isOpen={isMobileCompanyDropdownOpen}
                onToggle={handleMobileCompanyDropdown}
              >
                <ul>
                  <li className="ml-8 hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">History</li>
                  <li className="ml-8 hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">Our Team</li>
                  <li className="ml-8 hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">Blog</li>
                </ul>
              </Dropdown>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">About</li>
            </ul>
            <div className="flex flex-col gap-4">
              <button 
                className="pt-2 pb-2 cursor-pointer hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out"
              >
                Login
              </button>
              <button 
                className="border-2 border-[hsl(0,0%,41%)] rounded-md pt-2 pb-2 cursor-pointer hover:text-[hsl(0,0%,8%)] hover:border-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out"
              >
                Register
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex gap-4 text-[hsl(0,0%,41%)] font-semibold">
        <button className="max-md:hidden cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
          Login
        </button>
        <button
          className="max-md:hidden cursor-pointer border-2 border-[hsl(0,0%,41%)] pt-2 pb-2 pr-4 pl-4 rounded-md
                    hover:text-[hsl(0,0%,8%)] hover:border-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out"
        >
          Register
        </button>
        <button
          onClick={handleToggleMenu}
          className="md:hidden cursor-pointer absolute w-6 h-6 right-8 top-8"
        >
          <img
            className="w-6 h-6"
            src={
              isOpen ? "/images/icon-close-menu.svg" : "/images/icon-menu.svg"
            }
            alt="menu icon"
          />
        </button>
      </div>
    </header>
  );
}

export default HeaderSection;