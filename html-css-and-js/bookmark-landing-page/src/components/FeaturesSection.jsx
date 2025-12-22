import { useState } from "react";

function FeaturesSection() {
  const [currentItem, setCurrentItem] = useState(0);

  const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  const featuresItems = [
    {
      heading: "Bookmark in one click",
      paragraph:
        "Organize your bookmarks however you want. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "/images/illustration-features-tab-1.svg",
    },
    {
      heading: "Intelligent search",
      paragraph:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: "/images/illustration-features-tab-2.svg",
    },
    {
      heading: "Share your bookmarks",
      paragraph:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: "/images/illustration-features-tab-3.svg",
    },
  ];

  return (
    <section className="flex flex-col gap-4 pt-8 pb-8 pl-8 pr-8 md:pl-20 md:pr-20">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-2xl text-[hsl(229,31%,21%)] font-semibold">
          Features
        </h2>
        <p className="font-medium text-gray-500">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div
          className="flex flex-col md:ml-auto md:mr-auto md:flex-row items-center justify-center md:gap-16 md:pb-1 md:border-b
                         md:border-gray-500"
        >
          {tabs.map((tab, index) => (
            <button
              className={`relative pb-3 pl-4 pr-4 max-md:border-t max-md:border-b max-md:border-gray-500 max-md:w-full font-medium transition-colors cursor-pointer ${
                currentItem === index
                  ? "text-[hsl(229,31%,21%)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.75 after:w-full after:bg-red-500 transition-all duration-150 ease-in-out"
                  : "text-gray-500 hover:text-[hsl(0,94%,66%)]"
              }`}
              key={tab}
              onClick={() => setCurrentItem(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-rows-[1fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1fr]">
          <div className="flex max-md:ml-auto max-md:mr-auto">
            <img
              className="w-90"
              src={featuresItems[currentItem].image}
              alt="feature-image"
            />
          </div>
          <div className="flex flex-col max-md:items-center max-md:text-center gap-4 justify-center">
            <h2 className="text-2xl text-[hsl(229,31%,21%)] font-semibold">
              {featuresItems[currentItem].heading}
            </h2>
            <p className="font-medium text-gray-500">
              {featuresItems[currentItem].paragraph}
            </p>
            <button 
              className="shadow-md shadow-gray-500 max-md:hidden w-fit bg-[hsl(231,69%,60%)] text-white font-semibold pt-4 pb-4 pl-6 pr-6 rounded-md cursor-pointer">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
