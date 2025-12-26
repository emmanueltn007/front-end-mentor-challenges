function MainSection () {
    return (
        <main className="flex flex-col  md:flex-row-reverse md:pr-24 md:pb-24 md:pl-24">
            <div>
                <img 
                    className="md:hidden"
                    src="/images/image-hero-mobile.png" 
                    alt="mobile hero image" 
                />
                <img 
                    className="max-md:hidden"
                    src="/images/image-hero-desktop.png" 
                    alt="desktop hero image" 
                />
            </div>
            <div className="flex flex-col max-md:gap-4 pl-8 pr-8">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Make remote work
                </h1>
                <p className="text-[hsl(0,0%,41%)] font-semibold">
                    Get your team sync, no matter your location.
                    Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <button 
                    className="bg-[hsl(0,0%,8%)] font-semibold rounded-xl text-white pt-2 pb-2 pl-4 pr-4 border-2 border-transparent cursor-pointer
                                 hover:border-[hsl(0,0%,8%)] hover:text-[hsl(0,0%,8%)] hover:bg-white transition-all duration-150 ease-in-out">
                    Learn more
                </button>
                <div className="flex gap-2 md:justify-between">
                    <img className="h-4 w-auto" src="/images/client-databiz.svg" alt="databiz icon" />
                    <img className="h-8 w-auto" src="/images/client-audiophile.svg" alt="audiophile icon" />
                    <img className="h-6 w-auto" src="/images/client-meet.svg" alt="meet icon" />
                    <img className="h-8 w-auto" src="/images/client-maker.svg" alt="maker icon" />
                </div>
            </div>
        </main>
    );
}

export default MainSection 