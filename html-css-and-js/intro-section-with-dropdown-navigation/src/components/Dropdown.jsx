function Dropdown ({ label, isOpen, onToggle, children }) {
    return (
        <li 
            onClick={onToggle}
            className="cursor-pointer flex flex-col gap-4"
        >
            <div className="flex gap-4 items-center">
                <span className={`cursor-pointer  hover:text-[hsl(0,0%,8%)] ${isOpen ? "text-[hsl(0,0%,8%)]" : ""}`}>{label}</span>
                <img 
                    className={`w-3 h-2 text-[hsl(0,0%,41%)] transition duration-150 ease-in-out ${isOpen ? "rotate-180 text-[hsl(0,0%,8%)]" : ""}`}
                    src="/images/icon-arrow-down.svg" alt="arrow icon"
                />
            </div>
            {isOpen && children}
        </li>
    );
}

export default Dropdown