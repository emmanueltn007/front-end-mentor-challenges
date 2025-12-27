function SearchingSection () {
    return (
        <section className="flex flex-col gap-8 text-[hsl(0,0%,100%)] mt-8">
            <h1 className="text-5xl font-semibold text-center">
                How's the sky looking today?
            </h1>
            <div className="flex flex-col  md:justify-center md:flex-row gap-4">
                <input 
                    className="bg-[hsl(243,23%,24%)] pl-8 pr-4 py-2 rounded-md md:w-4/10 cursor-pointer"
                    type="text" 
                    placeholder="Search for a place..." />
                <button className="bg-[hsl(233,67%,56%)] py-2 px-4 rounded-md cursor-pointer">
                    Search
                </button>
            </div>
        </section>
    );
}

export default SearchingSection