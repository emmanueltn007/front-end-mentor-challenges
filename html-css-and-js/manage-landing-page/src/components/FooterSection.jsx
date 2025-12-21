function FooterSection() {
  const socialLinks = [
    { social: "facebook", icon: "/images/icon-facebook.svg" },
    { social: "youtube", icon: "/images/icon-youtube.svg" },
    { social: "twitter", icon: "/images/icon-twitter.svg" },
    { social: "pinterest", icon: "/images/icon-pinterest.svg" },
    { social: "instagram", icon: "/images/icon-instagram.svg" },
  ];

  function handleSubmit () {
    const userInput = document.querySelector('.user-input');
    const alertMessage = document.querySelector('.alert-message');

    const emailInput = userInput.value.trim();
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInput === '') {
      alertMessage.textContent = 'Field cannot be empty';
    } else if (!validEmail.test(emailInput)) {
      alertMessage.textContent = 'Please insert a valid email';
    } else {
      alertMessage.textContent = '';
    }
  }

  function handleSecondSubmit () {
    const userInput = document.querySelector('.user-second-input');
    const alertMessage = document.querySelector('.alert-second-message');

    const emailInput = userInput.value.trim();
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInput === '') {
      alertMessage.textContent = 'Field cannot be empty';
    } else if (!validEmail.test(emailInput)) {
      alertMessage.textContent = 'Please insert a valid email';
    } else {
      alertMessage.textContent = '';
    }
  }

  return (
    <section className="bg-[hsl(233,12%,13%)] pl-8 pr-8 pt-16 pb-16 md:pl-16 md:pr-16 flex justify-between md:flex-row flex-col gap-16">
      <div className="md:flex md:flex-col md:justify-between">
        <div className="max-md:hidden">
          <img src="/images/logo.svg" alt="logo-image" />
        </div>
        <div className="flex gap-4 items-center justify-center md:hidden relative">
          <input
            className="user-input outline-none bg-[hsl(0,0%,98%)] p-4 rounded-4xl max-md:w-[80%]"
            type="text"
            placeholder="Updates in your inbox..."
          />
          <p className="alert-message italic text-red-500 text-sm absolute left-4 bottom-0 translate-y-full"></p>
          <button
            onClick={handleSubmit}
            className="submitBtn bg-[hsl(12,88%,59%)] text-[hsl(0,0%,98%)] pt-4 pb-4 pl-8 pr-8 rounded-4xl max-md:w-[20%]
            cursor-pointer hover:bg-[hsl(12,56%,83%)] transition-all duration-150 ease-in-out"
          >
            Go
          </button>
        </div>
        <div className="flex gap-4 max-md:hidden">
          {socialLinks.map((socialLink) => (
            <a href="#" key={socialLink.social}>
              <img
                className="w-6"
                src={socialLink.icon}
                alt={`${socialLink.social}-icon`}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex max-md:justify-around md:gap-8 text-[hsl(0,0%,98%)] font-semibold leading-12 text-center">
        <ul className="flex flex-col items-start md:justify-between">
          <li className="hover:text-[hsl(12,88%,59%)] transition-all duration-150 cursor-pointer ease-in-out">Home</li>
          <li className="hover:text-[hsl(12,88%,59%)] transition-all duration-150 cursor-pointer ease-in-out">Pricing</li>
          <li className="hover:text-[hsl(12,88%,59%)] transition-all duration-150 cursor-pointer ease-in-out">Products</li>
          <li className="hover:text-[hsl(12,88%,59%)] transition-all duration-150 cursor-pointer ease-in-out">About Us</li>
        </ul>
        <ul className="flex flex-col items-start">
          <li className="hover:text-[hsl(12,88%,59%)] transition-all duration-150 cursor-pointer ease-in-out">Careers</li>
          <li className="hover:text-[hsl(12,88%,59%)] transition-all duration-150 cursor-pointer ease-in-out">Community</li>
          <li className="hover:text-[hsl(12,88%,59%)] transition-all duration-150 cursor-pointer ease-in-out">Privacy Policy</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4 md:justify-between md:items-end">
        <div className="flex gap-4 md:hidden">
          {socialLinks.map((socialLink) => (
            <a href="#" key={socialLink.social}>
              <img
                className="w-8"
                src={socialLink.icon}
                alt={`${socialLink.social}-icon`}
              />
            </a>
          ))}
        </div>
        <div className="flex gap-4 items-center justify-center max-md:hidden relative">
          <input
            className="user-second-input outline-none bg-[hsl(0,0%,98%)] p-4 rounded-4xl"
            type="text"
            placeholder="Updates in your inbox..."
          />
          <p className="alert-second-message italic text-red-500 text-sm absolute left-4 bottom-0 translate-y-full"></p>
          <button onClick={handleSecondSubmit} className="bg-[hsl(12,88%,59%)] text-[hsl(0,0%,98%)] pt-4 pb-4 pl-8 pr-8 rounded-4xl cursor-pointer hover:bg-[hsl(12,56%,83%)] transition-all duration-150 ease-in-out">
            Go
          </button>
        </div>
        <div className="md:hidden">
          <img src="/images/logo.svg" alt="logo-image" />
        </div>
        <div>
          <p className="text-gray-500 font-semibold">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
