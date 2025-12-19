function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse pl-8 pr-8 md:pl-16 md:pr-16">
      <div className="md:w-[50%] max-md:flex max-md:items-center">
        <img
          className=""
          src="/images/illustration-intro.svg"
          alt="hero-image"
        />
      </div>
      <div className="flex flex-col max-md:items-center max-md:text-center gap-4 md:w-[50%]">
        <h1 className="text-[hsl(228,39%,23%)] text-4xl font-bold">
          Bring everyone together to build better products.
        </h1>
        <p className="text-gray-500 font-medium">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in reach.
        </p>
        <button
          className="bg-[hsl(12,88%,59%)] text-white pt-2 pb-2 pl-6 pr-6 rounded-3xl font-semibold md:w-[35%]
            shadow-md shadow-[hsl(12,100%,74%)] hover:opacity-75 hover:scale-105 cursor-pointer transition-all duration-150 ease-in-out"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
