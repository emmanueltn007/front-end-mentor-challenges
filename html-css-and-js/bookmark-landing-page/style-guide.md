# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Blue 600: hsl(231, 69%, 60%)
- Red 400: hsl(0, 94%, 66%)

### Neutral

- Grey 50: hsl(0, 0%, 97%)
- Blue 950: hsl(229, 31%, 21%)

## Typography

### Body Copy

- Font size: 18px

### Fonts

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 400, 500

## Icons

For the icons in the design, you can choose between using the icons provided or a font icon library.

Some library suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.


import { useState } from "react";

function SignupSection() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function submitEmail() {
        const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.trim() === "") {
            setError("Whoops, email field cannot be empty!");
        } else if (!validEmail.test(email)) {
            setError("Whoops, make sure it's an email!");
        } else {
            setError("");
            // success logic here (API call, etc.)
        }
    }

    return (
        <section className="bg-[hsl(231,69%,60%)] flex flex-col items-center gap-4 pl-8 pr-8 pt-16 pb-16">
            <p className="text-xs text-white font-medium">
                35,000+ ALREADY JOINED
            </p>

            <h2 className="text-white font-semibold text-2xl">
                Stay up-to-date with what we're doing
            </h2>

            <div className="flex flex-col md:flex-row gap-4 max-md:w-full">
                <div>
                    <input
                        className="bg-white pt-2 pb-2 pl-2 pr-8 rounded-md"
                        type="text"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && (
                        <p className="text-white text-xs italic">
                            {error}
                        </p>
                    )}
                </div>

                <button
                    onClick={submitEmail}
                    className="bg-[hsl(0,94%,66%)] text-white rounded-md pt-2 pb-2 pl-4 pr-4"
                >
                    Contact Us
                </button>
            </div>
        </section>
    );
}

export default SignupSection;
