function Hero () {
    return (
        <main className="grid md:grid-cols-2 mt-16 z-10">
            <section className="md:col-start-2">
                <img className="h-full w-auto" src="/images/illustration-devices.svg" alt="illustration of devices" />
            </section>
            <section className="flex flex-col justify-center gap-4 md:row-start-1 z-20 ">
                <span className="flex items-center gap-1 text-gray-500 py-8">
                    <span 
                        className="text-white bg-[hsl(230,29%,20%)] py-1 px-2 rounded-2xl"
                    >
                        NEW
                    </span>
                    MONOGRAPH DASHBOARD
                </span>
                <h1 className="text-xl md:text-3xl font-extrabold">
                    POWERFUL INSIGHTS INTO YOUR TEAM
                </h1>
                <p className="text-gray-500 font-semibold">
                    Project planning and time tracking for agile teams
                </p>
                <div className="flex items-center gap-2">
                    <button 
                        className="text-white bg-[hsl(0,100%,68%)] hover:bg-[hsl(0,100%,80%)] transition duration-150 ease-in-out cursor-pointer px-4 py-2 rounded-md">
                        SCHEDULE A DEMO
                    </button>
                    <span className="text-gray-500">
                        TO SEE A PREVIEW
                    </span>
                </div>
            </section>
        </main>
    );
}

export default Hero