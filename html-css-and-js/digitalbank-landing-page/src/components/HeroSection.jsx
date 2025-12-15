function HeroSection () {
    return (
        <section className="p-4 md:p-16">
            <div className="flex justify-center max-md:bg-[url('/images/bg-intro-mobile.svg')] md:bg-[url('/images/bg-intro-desktop.svg')]
            bg-no-repeat bg-top-right bg-cover">
                 <img   
                    src="/images/image-mockups.png" 
                    alt="mockups-image"
                    className="w-[90%]" 
                />
            </div>
           <div>
            <h1>
                Next Generation digital banking.
            </h1>
            <p>
                Take your financial life online. Your DigitalBank will be a one-stop-shop for spending, saving, budgeting,
                investing, and much more.
            </p>
           </div>
        </section>
    );
}

export default HeroSection