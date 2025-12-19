function SignupSection () {
    return (
        <section className="mt-8 bg-[hsl(12,88%,59%)] bg-[url('/images/bg-tablet-pattern.svg')]
                            bg-cover bg-left bg-no-repeat
                            flex flex-col gap-4 items-center max-md:text-center md:flex-row md:justify-between
                            pt-16 pb-16 pl-8 pr-8">
            <h1 className="text-black text-4xl font-bold">
                Simplify your team works today.
            </h1>
            <button className="text-[hsl(12,88%,59%) bg-white pt-2 pb-2 pl-6 pr-6 rounded-3xl font-semibold">
                Get Started
            </button>
        </section>
    );
}

export default SignupSection