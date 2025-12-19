import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";

function HeaderAndHeroSections () {
    return (
        <section className="grid grid-cols-1 grid-rows-2">
            <HeaderSection />
            <HeroSection />
        </section>
    );
}

export default HeaderAndHeroSections