function MainSection () {
    return (
        <main className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:pl-24 md:pr-24 md:pb-24">
            <section className="md:col-start-2 flex justify-end">
                <img 
                    className="md:hidden"
                    src="/images/image-hero-mobile.png" 
                    alt="mobile hero image" 
                />
                <img 
                    className="max-md:hidden w-full max-w-md max-h-fit object-contain"
                    src="/images/image-hero-desktop.png" 
                    alt="desktop hero image" 
                />
            </section>
            <section className="md:row-start-1 flex flex-col max-md:items-center max-md:text-center justify-between max-md:pl-8 max-md:pr-8 max-md:pt-12 max-md:pb-12">
                <h1 className="text-4xl md:text-8xl text-[hsl(0,0%,8%)] font-bold">
                    Make remote work
                </h1>
                <p className="text-[hsl(0,0%,41%)] font-semibold">
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <button 
                    className="flex max-md:ml-auto max-md:mr-auto self-start bg-[hsl(0,0%,8%)] text-white font-semibold border-2 border-transparent pl-4 pr-4 pt-2 pb-2 rounded-xl cursor-pointer
                                hover:border-[hsl(0,0%,8%)] hover:text-[hsl(0,0%,8%)] hover:bg-white transition-all duration-150 ease-in-out">
                    Learn more
                </button>
                <div className="flex gap-4 md:gap-8 justify-between">
                    <img className="h-4 w-auto" src="/images/client-databiz.svg" alt="databiz icon" />
                    <img className="h-8 w-auto" src="/images/client-audiophile.svg" alt="audiophile icon" />
                    <img className="h-6 w-auto" src="/images/client-meet.svg" alt="meet icon" />
                    <img className="h-6 w-auto" src="/images/client-maker.svg" alt="maker icon" />
                </div>
            </section>
        </main>
    );
}

export default MainSection