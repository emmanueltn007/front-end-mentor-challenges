import { useState } from "react";

function HeaderSection() {
    const [isOpen, setIsOpen] = useState(false);

    function menuToggle() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <header className="bg-white flex justify-between md:justify-around items-center relative max-md:p-4">
        <div>
          <img src="/images/logo-dark.svg" alt="logo-image" />
        </div>
        <nav>
          <ul className="max-md:hidden flex items-center leading-none gap-4 font-semibold text-[hsl(233,8%,62%)]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>

          <div
            className={`${isOpen ? "hidden" : "block"} absolute text-[hsl(233,8%,62%)] font-semibold flex flex-col gap-4 items-center bg-white left-[50%] -translate-x-[50%]
                        translate-y-16 p-4 border border-red-600 w-[90%] rounded-md md:hidden`}
          >
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span>Blog</span>
            <span>Careers</span>
          </div>
        </nav>
        <div>
          <button
            className="max-md:hidden pt-2 pb-2 pl-6 pr-6 text-white font-bold rounded-3xl
                        bg-[linear-gradient(45deg,hsl(192,69%,51%),hsl(136,64%,51%))]"
          >
            Request Invite
          </button>

          <button className="md:hidden">
            <img
              src={isOpen ? '../images/icon-hamburger.svg' : '../images/icon-close.svg'}
              alt="hamburger-icon"
              className={`cursor-pointer ${isOpen ? "w-6 h-6" : "w-6 h-6"}`}
              onClick={menuToggle}
            />
          </button>
        </div>
      </header>
    </>
  );
}

export default HeaderSection;
