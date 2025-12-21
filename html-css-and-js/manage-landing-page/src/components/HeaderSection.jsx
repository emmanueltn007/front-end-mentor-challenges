import { useState } from "react";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  let navItems = ["Pricing", "Product", "About Us", "Careers", "Community"];

  function menuToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="flex justify-between pl-8 pr-8 pt-16 pb-16 md:pl-16 md:pr-16 relative">
      <div>
        <img src="/images/logo.svg" alt="manage-logo-image" />
      </div>
      <nav className="flex justify-center">
        <ul className="max-md:hidden flex gap-4 font-semibold text-[hsl(228,39%,23%)]">
          {navItems.map((navItem) => {
            return (
              <li
                className="hover:text-gray-500 hover:scale-105 transition-all duration-150 ease cursor-pointer"
                key={navItem}
              >
                {navItem}
              </li>
            );
          })}
        </ul>
        <ul
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } absolute p-4 z-99 rounded-xl bg-white w-[90%] h-75 border border-red top-32 left-[50%] -translate-x-[50%] flex flex-col justify-between items-center`}
        >
          {navItems.map((hiddenNavItem) => {
            return (
              <li
                className="text-[hsl(228,39%,23%)] font-bold hover:text-gray-500 transition-all duration-150 ease-in-out cursor-pointer"
                key={hiddenNavItem}
              >
                {hiddenNavItem}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-center">
        <button onClick={menuToggle} className="md:hidden cursor-pointer">
          <img
            src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
            alt="menu-icon"
          />
        </button>
        <button
          className="max-md:hidden bg-[hsl(12,88%,59%)] text-white pt-2 pb-2 pl-6 pr-6 rounded-3xl font-semibold
        shadow-md shadow-[hsl(12,100%,74%)] hover:opacity-75 hover:scale-105 cursor-pointer transition-all duration-150 ease-in-out"
        >
          Get Started
        </button>
      </div>
      
    </header>
  );
}

export default HeaderSection;