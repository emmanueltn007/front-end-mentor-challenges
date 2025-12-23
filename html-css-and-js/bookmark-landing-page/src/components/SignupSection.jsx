import { useState } from "react";

function SignupSection () {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
 
    function handleSubmit (e) {
        e.preventDefault();

        if (!email) {
            setMessage('Heyy... the email field is empty!');
            return;
        }

        const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!validEmail.test(email)) {
            setMessage('That email kinda looks suspicious');
            return;
        }

        alert('Email submitted succesfully!');
        setEmail("");
    }

    return (

        <section className="bg-[hsl(231,69%,60%)] flex flex-col items-center gap-4 pl-8 pr-8 pt-16 pb-16">
            <p className="text-xs text-white font-medium">
                35,000+ ALREADY JOINED
            </p>
            <h2 className="text-white font-semibold text-2xl">
                Stay up-to-date with what we're doing
            </h2>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-md:w-full relative">
                <div className={`w-full ${message ? "" : "bg-red"}`}>
                    <input 
                        className="bg-white pt-2 pb-2 pl-2 pr-8 rounded-md outline-none cursor-pointer max-md:w-full"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address" 
                    />
                    {
                        message && 
                        <p className="text-xs italic absolute bottom-0 translate-y-full">
                            {message}
                        </p>
                    }
                </div>
                
                <button 
                    type="submit"
                    className="font-semibold cursor-pointer bg-[hsl(0,94%,66%)] border-2 border-transparent hover:border-[hsl(0,94%,66%)] hover:text-[hsl(0,94%,66%)]
                                transition-all duration-150 ease-in-out hover:bg-white text-white rounded-md pt-2 pb-2 pl-4 pr-4">
                    Contact Us
                </button>

            </form>
        </section>
    );
}

export default SignupSection