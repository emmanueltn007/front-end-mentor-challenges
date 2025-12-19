import { useState } from "react";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  function menuToggle() {
    setIsOpen((prev) => !prev);
  }

  const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <>
      <header className="bg-white flex justify-between items-center relative p-4 md:pl-16 md:pr-16">
        <div>
          <img src="/images/logo-dark.svg" alt="logo-image" />
        </div>
        <nav>
          <ul className="max-md:hidden flex items-center leading-none gap-4 font-semibold text-[hsl(233,8%,62%)]">
            {navItems.map((navItem) => {
              return (
                <li key={navItem} className="cursor-pointer relative">
                  <span
                    className="after:content-[''] after:absolute after:left-0 after:-bottom-2
                        after:h-0.5 after:w-0 after:bg-[linear-gradient(45deg,hsl(192,69%,51%),hsl(136,64%,51%))]
                        hover:after:w-full after:transition-all after:duration-150 after:ease-in-out"
                  >
                    {navItem}
                  </span>
                </li>
              );
            })}
          </ul>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute text-[hsl(233,8%,62%)] font-semibold flex flex-col gap-4 items-center bg-white left-[50%] -translate-x-[50%]
                        translate-y-16 p-4 w-[90%] rounded-md md:hidden`}
          >
            {
              navItems.map((hiddenNavItem) => {
                return (
                  <span key={hiddenNavItem} className="cursor-pointer">{hiddenNavItem}</span>
                );
              })
            }
          </div>
        </nav>
        <div>
          <button
            className="max-md:hidden pt-2 pb-2 pl-6 pr-6 text-white font-bold rounded-3xl
                        bg-[linear-gradient(45deg,hsl(192,69%,51%),hsl(136,64%,51%))] 
                        hover:opacity-50 transition-all duration-150 ease-in-out cursor-pointer"
          >
            Request Invite
          </button>

          <button className="md:hidden" onClick={menuToggle}>
            <img
              src={
                isOpen
                  ? "../images/icon-close.svg"
                  : "../images/icon-hamburger.svg"
              }
              alt="menu-icon"
              className={`cursor-pointer ${isOpen ? "w-6 h-6" : "w-6 h-6"}`}
            />
          </button>
        </div>
      </header>
    </>
  );
}

export default HeaderSection