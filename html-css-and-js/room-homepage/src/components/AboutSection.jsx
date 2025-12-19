function AboutSection () {
return(
    <section className="grid grid-rows-[1fr_1fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1fr_1fr]">
        <div>
            <img className="w-full h-full" src="/images/image-about-dark.jpg" alt="about-dark-image" />
        </div>
        <div className="p-6">
            <h3 className="font-bold text-md">
                ABOUT OUR FURNITURE
            </h3>
            <p className="text-[hsl(0,0%,63%)] font-bold">
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.

            </p>
        </div>
        <div>
            <img className="w-full h-full" src="/images/image-about-light.jpg" alt="about-light-image" />
        </div>
    </section>
);
}

export default AboutSection