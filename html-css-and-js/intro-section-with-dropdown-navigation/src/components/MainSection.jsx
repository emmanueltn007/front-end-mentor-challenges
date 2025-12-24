function MainSection () {
    return (
        <main className="grid grid-rows-[1fr_1fr]">
            <div>
                <img src="/images/image-hero-mobile.png" alt="hero mobile mobile" />
            </div>
            <div className="max-md:text-center max-md:gap-8 flex flex-col items-center max-md:items-center p-8">
                <h1 className="text-3xl text-[hsl(0,0%,8%)] font-bold">
                    Make remote work
                </h1>
                <p className="font-semibold text-[hsl(0,0%,41%)]">
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, watch productivity soar.
                </p>
                <button 
                    className="text-white font-semibold bg-[hsl(0,0%,8%)] pt-2 pb-2 pr-4 pl-4 border border-transparent rounded-xl cursor-pointer
                                hover:text-[hsl(0,0%,8%)] hover:bg-white hover:border-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out"
                >
                    Learn more
                </button>
                <div className="flex justify-between">
                    <img 
                        className="h-4 w-auto"
                        src="/images/client-databiz.svg" 
                        alt="databiz logo" 
                    />
                    <img 
                        className="h-8 w-auto"
                        src="/images/client-audiophile.svg" 
                        alt="audiophile logo" 
                    />
                    <img 
                        className="h-6 w-auto"
                        src="/images/client-meet.svg" 
                        alt="meet logo" 
                    />
                    <img 
                        className=""
                        src="/images/client-maker.svg" 
                        alt="maker logo" 
                    />
                </div>
            </div>
        </main>
    );
}

export default MainSection 