import React from 'react';
import { useState } from 'react';

function HeaderSection () {
    const navItems = ["FEATURES", "PRICING", "CONTACT"];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle () {
        setIsMenuOpen(prev => !prev);
    }

  return (
    <header className='flex justify-between items-center relative pt-8 pb-8 pl-8 pr-8 md:pl-20 md:pr-20'>
        <div>
            <img src="/images/logo-bookmark.svg" alt="bookmark-logo" />
        </div>
        <nav className='flex gap-8'>
            {/* MOBILE MENU */}

            <div className={`${isMenuOpen ? 'block' : 'hidden'} flex flex-col gap-8 md:hidden absolute left-0 right-0 top-0 bg-[hsl(229,31%,21%)] pt-8 pb-8 pl-8 pr-8`}>
                <div>
                    <img src="/images/logo-bookmark.svg" alt="bookmark-logo" />
                </div>
                <div className='text-white flex flex-col items-center gap-4'>
                    <ul className='flex flex-col items-center gap-4'>
                        {navItems.map((mobileMenuItem) => (
                            <li 
                                className='cursor-pointer'
                                key={mobileMenuItem}
                            >
                                {mobileMenuItem}
                            </li>
                        ))}
                    </ul>
                    <button>
                        LOGIN
                    </button>
                </div>
                
            </div>
            

            {/* DESKTOP MENU */}

            <ul className='max-md:hidden flex items-center gap-8'>
                {navItems.map((desktopMenuItem) => (
                    <li 
                        className='cursor-pointer hover:text-[hsl(0,94%,66%)] transition-all duration-150 ease-in-out'
                        key={desktopMenuItem}>
                        {desktopMenuItem}
                    </li>
                ))}
            </ul>
            <div>
                <button 
                    className='md:hidden cursor-pointer absolute'
                    onClick={handleMenuToggle}>
                    <img src={isMenuOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} alt="menu-icon" />
                </button>
                <button className='max-md:hidden font-semibold bg-[hsl(0,94%,66%)] text-white pt-2 pb-2 pl-6 pr-6 rounded-md cursor-pointer
                                    hover:bg-white hover:border hover:border-[hsl(0,94%,66%)] hover:text-[hsl(0,94%,66%)]
                                    transition-all duration-150 ease-in-out shadow-md shadow-[hsl(0,0%,55%)]'>
                    LOGIN
                </button>
            </div>
            
        </nav>
    </header>
  );
}

export default HeaderSection