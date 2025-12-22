function FAQSection () {
    return (
        <section className="md:pl-64 md:pr-64 pt-8 pb-8 pl-8 pr-8 flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-center">
               <h2 className="text-2xl text-[hsl(229,31%,21%)] font-semibold">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-500 font-medium">
                    Here are some of our FAQs.
                    If you have any other questions you'd like answered please feel free to email us.
                </p> 
            </div>
            <div className="text-[hsl(229,31%,21%)] font-semibold w-full">
                
                <div className="flex justify-between pt-4 pb-4 border-b border-t border-gray-500">
                    <span>
                        What is Bookmark?
                    </span>
                    <img src="/images/icon-arrow.svg" alt="arrow-icon" />
                </div>
                <div className="flex justify-between pt-4 pb-4 border-b border-gray-500">
                    <span>
                        How can i request a new browser?
                    </span>
                    <img src="/images/icon-arrow.svg" alt="arrow-icon" />
                </div>
                <div className="flex justify-between pt-4 pb-4 border-b border-gray-500">
                    <span>
                        Is there a mobile app?
                    </span>
                    <img src="/images/icon-arrow.svg" alt="arrow-icon" />
                </div>
                <div className="flex justify-between pt-4 pb-4 border-b border-gray-500">
                    <span>
                        What about other Chromium browsers?
                    </span>
                    <img src="/images/icon-arrow.svg" alt="arrow-icon" />
                </div>
            </div>
        </section>
    );
}

export default FAQSection