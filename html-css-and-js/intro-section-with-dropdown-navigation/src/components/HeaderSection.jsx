import { useState } from "react";

function HeaderSection () {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

    function handleToggleMenu () {
        setIsOpen(prev => !prev);
    }

    function handleFeaturesDropdown () {
        setIsFeaturesDropdownOpen(prev => !prev);
    }

    function handleCompanyDropdown () {
        setIsCompanyDropdownOpen(prev => !prev);
    }

    return (
        <header className="flex items-center justify-between pl-4 pr-4 pt-8 pb-8 relative">
            <div className="flex gap-8">
                <div>
                    <img src="/images/logo.svg" alt="logo image" />
                </div>
                <nav className="">
                    {/* MOBILE SIDEBAR */}
                        {isOpen && (
                            <ul className="bg-white absolute top-0 right-0 h-screen w-[50%]">
                                <li>
                                    <img src="/images/icon-arrow-down.svg" alt="arrow icon" />
                                    <span>Features</span>
                                </li>
                                <li>
                                    <img src="/images/icon-arrow-down.svg" alt="arrow icon" />
                                    <span>Company</span>
                                </li>
                                <li>Careers</li>
                                <li>About</li>
                            </ul>
                        )}
                    <ul className="flex gap-4 max-md:hidden text-[hsl(0,0%,41%)] font-semibold relative">
                        <li 
                            onClick={handleFeaturesDropdown}
                            className="flex gap-2 items-center cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 
                                        ease-in-out"
                            >
                            <span>
                                Features
                            </span>
                            <img 
                                className={`w-4 h-2 transition duration-150 ease-in-out ${isFeaturesDropdownOpen ? "rotate-180" : ""}`} 
                                src="/images/icon-arrow-down.svg" 
                                alt="arrow icon" 
                            />
                        </li>
                        <li 
                            onClick={handleCompanyDropdown}
                            className="flex gap-2 items-center cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                            <span>
                                Company
                            </span>
                            <img 
                                className={`w-4 h-2  transition duration-150 ease-in-out ${isCompanyDropdownOpen ? "rotate-180" : ""}`} 
                                src="/images/icon-arrow-down.svg" 
                                alt="arrow icon" />
                        </li>
                        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                            Careers
                        </li>
                        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] transition-all duration-150 ease-in-out">
                            About
                        </li>

                        {/* FEATURES DESKTOP DROPDOWN */}
                        {isFeaturesDropdownOpen && (
                            <ul className="absolute bg-white p-4 translate-y-[50%] shadow-md shadow-gray-500 rounded-md">
                                <li className="flex gap-4">
                                    <img src="/images/icon-todo.svg" alt="todo icon" />
                                    <span>Todo List</span>
                                </li>
                                <li className="flex">
                                    <img src="/images/icon-calendar.svg" alt="calendar icon" />
                                    <span>Calendar</span>
                                </li>
                                <li className="flex">
                                    <img src="/images/icon-reminders.svg" alt="reminders icon" />
                                    <span>Reminders</span>
                                </li>
                                <li className="flex">
                                    <img src="/images/icon-planning.svg" alt="planning icon" />
                                    <span>Planning</span>
                                </li>
                            </ul>
                        )}

                         {/* COMPANY DESKTOP DROPDOWN */}
                        {isCompanyDropdownOpen && (
                            <ul className="bg-white p-4 rounded-md shadow-md shadow-gray-500 absolute translate-x-full translate-y-[50%]">
                                <li>History</li>
                                <li>Our Team</li>
                                <li>Blog</li>
                            </ul>
                        )}
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