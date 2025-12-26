function Dropdown ({ label, isOpen, onToggle, children }) {
    return (
        <li 
            onClick={onToggle}
            className="cursor-pointer"
        >
            <div className="flex gap-4 items-center">
                <span>{label}</span>
                <img 
                    className={`w-4 h-2 transition duration-150 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                    src="/images/icon-arrow-down.svg" 
                    alt="arrow icon" 
                />
            </div>
            {isOpen && children}
        </li>
    );
}

export default Dropdown