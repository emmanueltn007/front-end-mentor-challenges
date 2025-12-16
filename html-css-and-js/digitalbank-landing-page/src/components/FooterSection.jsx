function FooterSection() {
  return (
    <footer
      className="bg-[hsl(233,26%,24%)] flex flex-col max-md:gap-4 justify-between md:flex-row items-center
         max-md:text-center p-4 md:p-16"
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <div>
          <img src="/images/logo-light.svg" alt="logo-image" />
        </div>
        <div className="flex justify-between">
          <a href="#" className="cursor-pointer">
            <img src="/images/icon-facebook.svg" alt="facebook-icon" />
          </a>
          <a href="#" className="cursor-pointer">
            <img src="/images/icon-youtube.svg" alt="youtube-icon" />
          </a>
          <a href="#" className="cursor-pointer">
            <img src="/images/icon-twitter.svg" alt="twitter-icon" />
          </a>
          <a href="#" className="cursor-pointer">
            <img src="/images/icon-pinterest.svg" alt="pinterest-icon" />
          </a>
          <a href="#" className="cursor-pointer">
            <img src="/images/icon-instagram.svg" alt="instagram-icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-16 md:flex-row">
        <ul className="flex flex-col gap-1 text-[hsl(220,16%,96%)]">
          <li className="hover:text-[hsl(136,64%,51%)] transition-all duration-150 ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="hover:text-[hsl(136,64%,51%)] transition-all duration-150 ease-in-out cursor-pointer">
            Contact
          </li>
          <li className="hover:text-[hsl(136,64%,51%)] transition-all duration-150 ease-in-out cursor-pointer">
            Blog
          </li>
        </ul>
        <ul className="flex flex-col gap-1 text-[hsl(220,16%,96%)]">
          <li className="hover:text-[hsl(136,64%,51%)] transition-all duration-150 ease-in-out cursor-pointer">
            Careers
          </li>
          <li className="hover:text-[hsl(136,64%,51%)] transition-all duration-150 ease-in-out cursor-pointer">
            Support
          </li>
          <li className="hover:text-[hsl(136,64%,51%)] transition-all duration-150 ease-in-out cursor-pointer">
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <button
          className="pt-2 pb-2 pl-6 pr-6 text-white font-bold rounded-3xl
                        bg-[linear-gradient(45deg,hsl(192,69%,51%),hsl(136,64%,51%))]
                        hover:opacity-50 transition-all duration-150 ease-in-out cursor-pointer"
        >
          Request Invite
        </button>
        <p className="text-[hsl(233,8%,62%)] font-semibold">© Digitalbank. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default FooterSection;
