function Dropdown ({ label, isOpen, onToggle, children }) {
    return (
        <li 
            onClick={onToggle}
            className="cursor-pointer flex flex-col gap-4"
        >
            <div className="flex gap-4 items-center">
                <span className={`cursor-pointer  hover:text-[hsl(0,0%,8%)] ${isOpen ? "text-[hsl(0,0%,8%)]" : ""}`}>{label}</span>
                <svg 
                    className={`w-3 h-2 text-[hsl(0,0%,41%)] transition duration-150 ease-in-out ${isOpen ? "rotate-180 text-[hsl(0,0%,8%)]" : ""}`}
                    width="10" height="6" xmlns="http://www.w3.org/2000/svg"
                >
                    <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                </svg>
            </div>
            {isOpen && children}
        </li>
    );
}

export default Dropdown