function HeroSection () {
    return (
        <section className="flex flex-col md:flex-row-reverse pt-8 pb-8 pl-8 pr-8 md:pl-20 md:pr-20">
            <div>
                <img src="/images/illustration-hero.svg" alt="illustration-hero-image" />
            </div>
            <div className="flex flex-col gap-8">
                <h1 className="text-3xl text-[hsl(229,31%,21%)] font-semibold">
                    A Simple Bookmark Manager
                </h1>
                <p className="text-gray-500 font-medium">
                    A clean and simple interface to organize your favourite websites.
                    Open a new browser tab and see your sites load instantly.
                    Try it for free.
                </p>
                <div className="flex gap-4 font-bold">
                    <button className="bg-[hsl(231,69%,60%)] text-white pt-2 pb-2 pl-6 pr-6 rounded-md hover:text-[hsl(231,69%,60%)] shadow-md shadow-gray-400
                                         border-2 border-transparent hover:bg-white hover:border-[hsl(231,69%,60%)] transition-all duration-150 ease-in-out cursor-pointer">
                        Get it on Chrome
                    </button>
                    <button className="bg-[hsl(0,0%,97%)] text-gray-500 pt-2 pb-2 pl-6 pr-6 rounded-md border-2 border-transparent hover:border-gray-400
                                        hover:bg-white shadow-md shadow-gray-400 transition-all duration-150 ease-in-out cursor-pointer">
                        Get it on Firefox
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection