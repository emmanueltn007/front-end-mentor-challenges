import { useState } from "react";
import NavLinks from "./NavLinks";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center">
      <div>
        <img src="/images/logo.svg" alt="logo icon" />
      </div>

      {/* MOBILE NAV */}
      <nav className="md:hidden">
        <button 
            onClick={handleMenuToggle}
            className="cursor-pointer"
        >
          <img
            src={
              isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
            }
            alt="menu icons"
          />
        </button>

        <div className={`
                        ${isOpen ? "block" : "hidden"}
                      bg-white shadow-md shadow-gray-500 absolute top-24 left-8 right-8 rounded-md p-8
                        flex flex-col items-center gap-4 font-semibold
                      `}>
          <NavLinks className="flex flex-col text-center gap-4 text-[hsl(230,29%,20%)]" />
          <hr className="w-full text-gray-500" />
          <button 
            className="text-gray-500 cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0
                        after:h-0.5 after:w-full after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            LOGIN
          </button>
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav className="max-md:hidden flex items-center flex-row gap-4 font-semibold">
        <NavLinks className="flex gap-4 text-[hsl(230,29%,20%)]" />
        <span className="bg-gray-500 h-1 w-1 rounded-full"></span>
        <button 
          className="font-semibold text-gray-500 cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-0.5 after:w-full after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          LOGIN
        </button>
      </nav>
    </header>
  );
}

export default Header;