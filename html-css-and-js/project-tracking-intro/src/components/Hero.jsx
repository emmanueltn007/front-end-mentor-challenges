function Hero () {
    return (
        <main className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mt-16">
            <section className="md:col-start-2">
                <img className="" src="/images/illustration-devices.svg" alt="illustration of devices" />
            </section>
            <section className="flex flex-col gap-4 md:row-start-1">
                <span className="flex items-center gap-1 text-gray-500">
                    <span 
                        className="text-white bg-[hsl(230,29%,20%)] py-1 px-2 rounded-2xl"
                    >
                        NEW
                    </span>
                    MONOGRAPH DASHBOARD
                </span>
                <h1 className="text-xl md:text-3xl font-bold">
                    POWERFUL INSIGHTS INTO YOUR TEAM
                </h1>
                <p className="text-gray-500 font-semibold">
                    Project planning and time tracking for agile teams
                </p>
                <div className="flex items-center gap-2">
                    <button className="text-white bg-[hsl(0,100%,68%)] px-4 py-2 rounded-md">
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