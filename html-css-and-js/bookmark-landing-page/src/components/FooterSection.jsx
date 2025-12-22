function FooterSection () {
    return (
        <footer className="bg-[hsl(229,31%,21%)] flex flex-col md:flex-row max-md:items-center max-md:justify-center md:justify-between text-center
                             gap-8 md:gap-4 pt-8 pb-8 pl-8 pr-8 md:pl-20 md:pr-20">
            <div className="flex flex-col md:flex-row gap-4">
                <img src="/images/logo-bookmark.svg" alt="bookmark-logo-image" />
                <nav>
                    <ul className="text-white flex flex-col md:flex-row gap-4">
                        <li className="hover:text-[hsl(0,94%,66%)] transition-all duration-150 ease-in-out cursor-pointer">
                            FEATURES
                        </li>
                        <li className="hover:text-[hsl(0,94%,66%)] transition-all duration-150 ease-in-out cursor-pointer">
                            PRICING
                        </li>
                        <li className="hover:text-[hsl(0,94%,66%)] transition-all duration-150 ease-in-out cursor-pointer">
                            CONTACT
                        </li>
                    </ul>
                </nav>
            </div>
            <nav className="flex flex-col items-center md:flex-row gap-8">
                    <a href="#">
                        <img src="/images/icon-facebook.svg" alt="facebook-icon" />
                    </a>
                    <a href="#">
                        <img src="/images/icon-twitter.svg" alt="twitter-icon" />
                    </a>
            </nav>
        </footer>
    );
}

export default FooterSection