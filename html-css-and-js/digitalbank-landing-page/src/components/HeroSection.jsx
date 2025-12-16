function HeroSection() {
  return (
    <section className="bg-[hsl(0,0%,98%)] flex flex-col max-md:h-[60%] md:flex-row-reverse pl-4 pr-4 md:pl-16 md:pr-16">
      <div
        className="flex justify-center max-md:bg-[url('/images/bg-intro-mobile.svg')] md:bg-[url('/images/bg-intro-desktop.svg')]
            bg-no-repeat md:bg-right bg-cover md:bg-contain"
      >
        <img
          src="/images/image-mockups.png"
          alt="mockups-image"
          className="w-[90%] md:w-[80%]"
        />
      </div>
      <div className="pt-16 pb-16 flex flex-col max-md:h-[40%] max-md:items-center max-md:text-center gap-8">
        <h1 className="text-5xl">Next Generation digital banking.</h1>
        <p className="text-[hsl(233,8%,62%)] font-semibold">
          Take your financial life online. Your DigitalBank will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button
          className="w-[50%] pt-2 pb-2 pl-6 pr-6 text-white font-bold rounded-3xl
                        bg-[linear-gradient(45deg,hsl(192,69%,51%),hsl(136,64%,51%))]
                        hover:opacity-50 transition-all duration-150 ease-in-out cursor-pointer"
        >
          Request Invite
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
