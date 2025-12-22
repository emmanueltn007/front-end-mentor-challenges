function SignupSection () {
    return (
        <section className="bg-[hsl(231,69%,60%)] flex flex-col items-center gap-4 pl-8 pr-8 pt-16 pb-16">
            <p className="text-xs text-white font-medium">
                35,000+ ALREADY JOINED
            </p>
            <h2 className="text-white font-semibold text-2xl">
                Stay up-to-date with what we're doing
            </h2>
            <div className="flex flex-col md:flex-row gap-4 max-md:w-full">
                <input 
                    className="bg-white pt-2 pb-2 pl-2 pr-8 rounded-md"
                    type="text" 
                    placeholder="Enter your email address" />
                <button className="bg-[hsl(0,94%,66%)] text-white rounded-md pt-2 pb-2 pl-4 pr-4">
                    Contact Us
                </button>
            </div>
        </section>
    );
}

export default SignupSection