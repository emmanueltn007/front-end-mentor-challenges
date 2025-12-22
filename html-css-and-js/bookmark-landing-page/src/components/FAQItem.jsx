import { useState } from "react";

function FAQItem ({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleFAQ () {
        setIsOpen(prev => !prev);
    }

    return (
        <div>
            <button 
                className={`flex justify-between w-full pt-4 pb-4 border-gray-500 cursor-pointer ${isOpen ? "" : "border-b"}`}
                onClick={toggleFAQ}>
                <span className="hover:text-[hsl(0,94%,66%)] transition duration-150 ease-in-out">
                    {question}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    className={`transition-transform ${
                        isOpen
                        ? "rotate-180 text-[hsl(0,94%,66%)]"
                        : "text-[hsl(231,69%,60%)]"
                    }`}
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        d="M1 1l8 8 8-8"
                    />
                </svg>
            </button>

            {isOpen && <p className="text-gray-500 font-medium pb-4 border-b border-gray-500">{answer}</p>}
        </div>
    );
}

export default FAQItem