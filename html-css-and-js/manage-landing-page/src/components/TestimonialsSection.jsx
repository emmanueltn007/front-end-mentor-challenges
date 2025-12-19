//import { useState } from "react";

function TestimonialsSection() {
  //const [showCustomer, setShowCustomer] = useState(isVisible);

  const testimonialsDetails = [
    {
      avatar: "/images/avatar-anisha.png",
      alt: "anisha-profile-picture",
      name: "Anisha Li",
      testimonialMessage:
        "Manage has supercharged our team’s workflow. The ability to  maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      avatar: "/images/avatar-ali.png",
      alt: "ali-profile-picture",
      name: "Ali Bravo",
      testimonialMessage:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      avatar: "/images/avatar-richard.png",
      alt: "richard-profile-picture",
      name: "Richard Watts",
      testimonialMessage:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” Shanai Gough “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];

  return (
    <section className="flex flex-col gap-16">
      <h3 className="text-3xl text-center text-[hsl(228,39%,23%)] font-bold">
        What they've said
      </h3>
      <div className="max-md:hidden flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr] gap-4">
        {testimonialsDetails.map((customer) => {
          return (
            <div
              key={customer.name}
              className="bg-[hsl(0,0%,98%)] text-center flex flex-col items-center gap-2 p-6 relative"
            >
              <div className="w-16 absolute -translate-y-[50%] top-0">
                <img src={customer.avatar} alt={customer.alt} />
              </div>

              <span className="font-bold text-md text-[hsl(228,39%,23%)] mt-4">
                {customer.name}
              </span>
              <p className="text-gray-500 font-medium">
                {customer.testimonialMessage}
              </p>
            </div>
          );
        })}
      </div>

      {testimonialsDetails.forEach((client) => {
        return (
          <div>
            <div
              key={client.name}
              className="bg-[hsl(0,0%,98%)] text-center flex flex-col items-center gap-2 p-6 relative"
            >
              <div className="w-16 absolute -translate-y-[50%] top-0">
                <img src={client.avatar} alt={client.alt} />
              </div>

              <span className="font-bold text-md text-[hsl(228,39%,23%)] mt-4">
                {client.name}
              </span>
              <p className="text-gray-500 font-medium">
                {client.testimonialMessage}
              </p>
            </div>
            <div className="flex gap-4 md:hidden">
              <div className="border border-[hsl(12,88%,59%)] h-2 w-2 rounded-full cursor-pointer"></div>
            </div>
          </div>
        );
      })}

      <button
        className="flex items-center ml-auto mr-auto bg-[hsl(12,88%,59%)] text-white pt-2 pb-2 pl-6 pr-6 rounded-3xl font-semibold
      shadow-md shadow-[hsl(12,100%,74%)] hover:opacity-75 hover:scale-105 cursor-pointer transition-all duration-150 ease-in-out"
      >
        Get Started
      </button>
    </section>
  );
}

export default TestimonialsSection;
