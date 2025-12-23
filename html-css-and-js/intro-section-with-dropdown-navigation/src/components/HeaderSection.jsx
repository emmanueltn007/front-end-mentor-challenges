import { useState } from "react";

function HeaderSection () {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

    function handleToggleMenu () {
        setIsOpen(prev => !prev);
    }

    function handleFeaturesDropdown () {
        setIsFeaturesDropdownOpen(prev => !prev);
    }

    return (
        <header className="flex items-center justify-between pl-4 pr-4 pt-8 pb-8">
            <div className="flex gap-8">
                <div>
                    <img src="/images/logo.svg" alt="logo image" />
                </div>
                <nav>
                    <ul className="flex gap-4 max-md:hidden text-[hsl(0,0%,41%)] font-semibold">
                        <li 
                            onClick={handleFeaturesDropdown}
                            className="flex gap-2 items-center cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 
                                        ease-in-out"
                            >
                            <span>
                                Features
                            </span>
                            <img className={`w-4 h-2 ${isFeaturesDropdownOpen ? "rotate-180 transition duration-150 ease-in-out" : ""}`} src="/images/icon-arrow-down.svg" alt="arrow icon" />
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                            <span>
                                Company
                            </span>
                            <img className="w-4 h-2" src="/images/icon-arrow-down.svg" alt="arrow icon" />
                        </li>
                        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                            Careers
                        </li>
                        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                            About
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-4 text-[hsl(0,0%,41%)] font-semibold">
                <button className="max-md:hidden cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                    Login
                </button>
                <button className="max-md:hidden cursor-pointer border-2 border-[hsl(0,0%,41%)] pt-2 pb-2 pr-4 pl-4 rounded-md
                                    hover:text-[hsl(0,0%,8%)] hover:border-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                    Register
                </button>
                <button 
                    onClick={handleToggleMenu}
                    className="md:hidden cursor-pointer">
                    <img 
                        src={isOpen ? "/images/icon-close-menu.svg" : "/images/icon-menu.svg"} 
                        alt="menu icon" 
                    />
                </button>
            </div>
        </header>
    );
}

export default HeaderSection