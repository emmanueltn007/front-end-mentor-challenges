function NavLinks ({ className = "" }) {
    const navItems = ["PRODUCTS", "FEATURES", "PRICING"];

    return (
        <ul className={className}>
            {navItems.map((item) => {
                return (
                    <li 
                        key={item} 
                        className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-0.5 after:w-full after:bg-[hsl(230,29%,20%)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
        
    );
}

export default NavLinks