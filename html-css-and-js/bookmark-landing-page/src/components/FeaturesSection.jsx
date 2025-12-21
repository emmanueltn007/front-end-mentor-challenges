import { useState } from "react";

function FeaturesSection() {
  const [currentItem, setCurrentItem] = useState(0);

  const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  const featuresItems = [
    {
      heading: "Bookmark in one click",
      paragraph: "Organize your bookmarks however you want. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "/images/illustration-features-tab-1.svg",
    },
    {
      heading: "Intelligent search",
      paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need tp trawl through all of your bookmarks.",
      image: "/images/illustration-features-tab-2.svg",
    },
    {
      heading: "Share your bookmarks",
      paragraph: "Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button.",
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
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 md:pb-8 md:border-b
                         md:border-gray-500"
        >
         {tabs.map((tab, index) => (
            <span key={tab} onClick={() => setCurrentItem(index)}>
                {tab}
            </span>
         ))}
        </div>
        <div className="grid grid-rows-[1fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1fr]">
            <div>
                <img className="w-90" src={featuresItems[currentItem].image} alt="feature-image" />
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <h2 className="text-2xl text-[hsl(229,31%,21%)] font-semibold">
                    {featuresItems[currentItem].heading}
                </h2>
                <p className="font-medium text-gray-500">
                    {featuresItems[currentItem].paragraph}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
