function NavLinks ({ className = "" }) {
    const navItems = ["PRODUCTS", "FEATURES", "PRICING"];

    return (
        <ul className={className}>
            {navItems.map((item) => {
                return (
                    <li key={item}>{item}</li>
                );
            })}
        </ul>
        
    );
}

export default NavLinks