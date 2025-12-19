import { useState } from "react";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "shop", "about", "contact"];

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="flex absolute top-8 left-8 z-99 w-[50%] md:justify-between">
      <button onClick={toggle}>
        <img
          className="md:hidden"
          src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
          alt="menu-icon"
        />
      </button>
      <div className="">
        <img className="" src="/images/logo.svg" alt="room-logo-image" />
      </div>
      <nav className="text-white font-bold relative">
        <ul className="max-md:hidden flex gap-4">
          {navItems.map((navItem) => {
            return <li>{navItem}</li>;
          })}
        </ul>
        <ul className={`absolute ${isOpen ? "block" : "hidden"} md:hidden`}>
          {navItems.map((hiddenNavItem) => {
            return <li>{hiddenNavItem}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSection;
