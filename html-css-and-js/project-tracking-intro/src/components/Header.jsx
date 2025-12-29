import { useState } from "react";

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
          <ul className="flex flex-col text-center gap-4 text-[hsl(230,29%,20%)]">
            <li>PRODUCT</li>
            <li>FEATURES</li>
            <li>PRICING</li>
          </ul>
          <hr className="w-full text-gray-500" />
          <button className="text-gray-500 cursor-pointer">LOGIN</button>
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav className="max-md:hidden flex flex-row gap-4 font-semibold">
        <ul className="flex gap-4 text-[hsl(230,29%,20%)]">
          <li>PRODUCT</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <button className="font-semibold text-gray-500 cursor-pointer">LOGIN</button>
      </nav>
    </header>
  );
}

export default Header;
