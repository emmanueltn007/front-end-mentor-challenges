function FooterSection() {
  const socialIcons = [
    {
      social: "facebook",
      alt: "facebook-icon",
      icon: "/images/icon-facebook.svg",
    },
    {
      social: "youtube",
      alt: "youtube-icon",
      icon: "/images/icon-youtube.svg",
    },
    {
      social: "twitter",
      alt: "twitter-icon",
      icon: "/images/icon-twitter.svg",
    },
    {
      social: "pinterest",
      alt: "pinterest-icon",
      icon: "/images/icon-pinterest.svg",
    },
    {
      social: "instagram",
      alt: "instagram-icon",
      icon: "/images/icon-instagram.svg",
    },
  ];

  function submitEmail() {
    const alertMessage = document.querySelector(".alert-message");
    const userInput = document.querySelector("input");
    const userInputEmail = userInput.value;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userInputEmail === "") {
      alertMessage.textContent = "Field cannot be empty!";
      userInput.style.borderColor = "red";
      userInput.style.borderWidth = "2px";
    } else if (!validEmail.test(userInputEmail)) {
      alertMessage.textContent = "Please insert a valid email!";
      userInput.style.borderWidth = "2px";
      userInput.style.borderColor = "red";
    } else {
      alertMessage.textContent = "";
      userInput.style.borderWidth = "";
      userInput.style.borderColor = "";
    }
  }

  return (
    <footer className="flex flex-col justify-between gap-12 md:flex-row bg-[hsl(233,12%,13%)] pl-8 pr-8 pt-16 pb-16 md:pl-16 md:pr-16">
      <div className="flex flex-col gap-4 items-center max-md:hidden">
        <img
          className="w-40 flex"
          src="/images/logo.svg"
          alt="manage-logo-image"
        />
        <div className="flex gap-8 max-md:hidden">
          {socialIcons.map((social) => {
            return (
              <img
                key={social.social}
                className="w-8 cursor-pointer"
                src={social.icon}
                alt={social.alt}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 w-full relative md:hidden">
        <input
          className="outline-none bg-white pt-2 pb-2 pl-6 pr-6 rounded-3xl w-[70%]"
          type="text"
          placeholder="Updates in your inbox..."
        />
        <p className="alert-message text-red-500 italic text-sm absolute bottom-0 translate-y-full"></p>
        <button
          onClick={submitEmail}
          className="cursor-pointer hover:scale-110 hover:bg-[hsl(12,70%,76%)] transition-all duration-150 ease-in-out text-white bg-[hsl(12,88%,59%)] pt-2 pb-2 pl-6 pr-6 rounded-3xl font-semibold w-[30%]"
        >
          Go
        </button>
      </div>
      <div className="flex justify-around text-[hsl(0,0%,98%)] font-semibold">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[hsl(12,88%,59%)] cursor-pointer transition-all duration-150 ease-in-out">
            Home
          </li>
          <li className="hover:text-[hsl(12,88%,59%)] cursor-pointer transition-all duration-150 ease-in-out">
            Pricing
          </li>
          <li className="hover:text-[hsl(12,88%,59%)] cursor-pointer transition-all duration-150 ease-in-out">
            Products
          </li>
          <li className="hover:text-[hsl(12,88%,59%)] cursor-pointer transition-all duration-150 ease-in-out">
            About Us
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[hsl(12,88%,59%)] cursor-pointer transition-all duration-150 ease-in-out">
            Careers
          </li>
          <li className="hover:text-[hsl(12,88%,59%)] cursor-pointer transition-all duration-150 ease-in-out">
            Community
          </li>
          <li className="hover:text-[hsl(12,88%,59%)] cursor-pointer transition-all duration-150 ease-in-out">
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="max-md:hidden">
          <input
            className="outline-none bg-white pt-2 pb-2 pl-6 pr-6 rounded-3xl w-[70%]"
            type="text"
            placeholder="Updates in your inbox..."
          />
          <p className="alert-message text-red-500 italic text-sm absolute bottom-0 translate-y-full"></p>
          <button
            onClick={submitEmail}
            className="cursor-pointer hover:scale-110 hover:bg-[hsl(12,70%,76%)] transition-all duration-150 ease-in-out text-white bg-[hsl(12,88%,59%)] pt-2 pb-2 pl-6 pr-6 rounded-3xl font-semibold w-[30%]"
          >
            Go
          </button>
        </div>
        <div className="flex gap-8 md:hidden">
          {socialIcons.map((social) => {
            return (
              <img
                key={social.social}
                className="w-8 cursor-pointer"
                src={social.icon}
                alt={social.alt}
              />
            );
          })}
        </div>
        <img
          className="w-40 flex md:hidden"
          src="/images/logo.svg"
          alt="manage-logo-image"
        />
        <p className="text-gray-500 font-semibold">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
