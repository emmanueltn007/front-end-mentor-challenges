import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import FeaturesList from "./FeaturesList";
import CompanyList from "./CompanyList";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  {
    /* MOBILE SIDEBAR */
  }

  const [isMobileFeaturesDropdownOpen, setIsMobileFeaturesDropdownOpen] = useState(false);
   
  const [isMobileCompanyDropdownOpen, setIsMobileCompanyDropdownOpen] = useState(false);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleToggleMenu = () => setIsOpen(true);

  const handleOpenMenu = () => setIsOpen(false);

  const handleMobileFeaturesDropdown = () => {
    setIsMobileFeaturesDropdownOpen((prev) => !prev);
    setIsMobileCompanyDropdownOpen(false);
  }
    
  const handleMobileCompanyDropdown = () => {
    setIsMobileCompanyDropdownOpen((prev) => !prev);
    setIsMobileFeaturesDropdownOpen(false);
  }
    

  {/* DESKTOP FUNCTIONS */}

  const handleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen((prev) => !prev);
    setIsCompanyDropdownOpen(false);
  }
  const handleCompanyDropdown = () => {
    setIsCompanyDropdownOpen((prev) => !prev);
    setIsFeaturesDropdownOpen(false);
  }

  return (
    <header className="flex items-center justify-between pl-4 pr-4 pt-8 pb-8 md:pl-16 md:pr-16 relative">
      {/* DARK BACKGROUND OVERLAY (MOBILE) */}
      {isOpen && (
        <div 
          onClick={handleToggleMenu}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      <div className="flex gap-8">
        {/* LOGO NAV */}
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
              <FeaturesList className="text-sm bg-white flex flex-col gap-2 rounded-md shadow-md shadow-gray-500 p-2 absolute top-20" />
            </Dropdown>
            <Dropdown
              label="Company"
              isOpen={isCompanyDropdownOpen}
              onToggle={handleCompanyDropdown}
            >
              <CompanyList 
                listClass="text-sm bg-white flex flex-col gap-2 rounded-md shadow-md shadow-gray-500 p-2 absolute top-20"
                itemClass="hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out"
              />
            </Dropdown>
            <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">Careers</li>
            <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">About</li>
          </ul>

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* MOBILE NAVBAR */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div 
              className={`bg-white flex flex-col gap-4 text-[hsl(0,0%,41%)] font-semibold md:hidden fixed w-1/2 pl-8 pr-8 pt-16 h-screen right-0 top-0 ${
                isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-100`}
            >
              <button onClick={handleOpenMenu} className="cursor-pointer absolute top-8 right-4">
                <img src="/images/icon-close-menu.svg" alt="close menu icon" />
              </button>
            <ul className="flex flex-col gap-4">
              <Dropdown
                label="Features"
                isOpen={isMobileFeaturesDropdownOpen}
                onToggle={handleMobileFeaturesDropdown}
              >
                <FeaturesList className="ml-8 flex flex-col gap-2" />
              </Dropdown>
              <Dropdown
                label="Company"
                isOpen={isMobileCompanyDropdownOpen}
                onToggle={handleMobileCompanyDropdown}
              >
                <CompanyList listClass="flex flex-col gap-2 ml-8" itemClass="hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out" />
              </Dropdown>
              <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">Careers</li>
              <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">About</li>
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
          className="md:hidden cursor-pointer w-6 h-6"
        >
          <img
            className="w-6 h-6"
            src="/images/icon-menu.svg"
            alt="menu icon"
          />
        </button>
      </div>
    </header>
  );
}

export default HeaderSection;