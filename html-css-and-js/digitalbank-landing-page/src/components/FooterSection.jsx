function FooterSection() {
  return (
    <footer
      className="bg-[hsl(233,26%,24%)] flex flex-col max-md:gap-4 justify-between md:flex-row items-center
         text-center p-4 md:p-16"
    >
      <div className="flex flex-col justify-between">
        <div>
          <img src="/images/logo-light.svg" alt="logo-image" />
        </div>
        <div className="flex justify-between">
          <a href="">
            <img src="/images/icon-facebook.svg" alt="facebook-icon" />
          </a>
          <a href="">
            <img src="/images/icon-youtube.svg" alt="youtube-icon" />
          </a>
          <a href="">
            <img src="/images/icon-twitter.svg" alt="twitter-icon" />
          </a>
          <a href="">
            <img src="/images/icon-pinterest.svg" alt="pinterest-icon" />
          </a>
          <a href="">
            <img src="/images/icon-instagram.svg" alt="instagram-icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-4 md:flex-row">
        <ul className="flex flex-col gap-1 text-[hsl(220,16%,96%)]">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul className="flex flex-col gap-1 text-[hsl(220,16%,96%)]">
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <button
          className="pt-2 pb-2 pl-6 pr-6 text-white font-bold rounded-3xl
                        bg-[linear-gradient(45deg,hsl(192,69%,51%),hsl(136,64%,51%))] cursor-pointer"
        >
          Request Invite
        </button>
        <p>© Digitalbank. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default FooterSection;
