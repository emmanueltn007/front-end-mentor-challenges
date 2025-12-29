function Header () {
    return (
        <header className="flex justify-between">
            <div>
                <img src="/assets/images/logo.svg" alt="Weather-Now logo" />
            </div>
            <nav className="bg-[hsl(243,23%,24%)] flex items-center gap-2 rounded-md px-4 cursor-pointer">
                <img 
                    className="h-4 w-auto"
                    src="/assets/images/icon-units.svg" 
                    alt="icon units" 
                />
                <span className="text-[hsl(0,0%,100%)]">
                    Units
                </span>
                <img 
                    className="h-2 w-auto"
                    src="/assets/images/icon-dropdown.svg" 
                    alt="icon dropdown" 
                />
            </nav>
        </header>
    );
}

export default Header