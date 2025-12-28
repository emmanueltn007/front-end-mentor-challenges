import { useState } from "react";

function Header () {
    const [isDark, setIsDark] = useState(false);

    function handleLightSwitch () {
        setIsDark(prev => !prev);
    }

    return (
        <header className="flex justify-between items-center">
            <div>
                <img src="/assets/images/logo.svg" alt="logo image" />
            </div>
            <button onClick={handleLightSwitch}>
                <img src={isDark ? "/assets/images/icon-moon.svg" : "/assets/images/icon-sun.svg"} alt="light control icons" />
            </button>
        </header>
    );
}

export default Header