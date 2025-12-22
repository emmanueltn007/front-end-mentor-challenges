function DownloadingSection () {
    return (
        <section className="flex flex-col gap-4 items-center text-center pt-8 pb-8 pl-8 pr-8 md:pl-20 md:pr-20">
            <div>
                <h2 className="text-2xl text-[hsl(229,31%,21%)] font-semibold">
                    Download the extension
                </h2>
                <p className="text-gray-500 font-medium">
                    We've got more browsers in the pipeline.
                    Please do let us know if you've got a favourite you'd like us to prioritize.
                </p>
            </div>
            <div className="w-full flex flex-col md:items-center md:flex-row gap-8 md:relative">
                <div className="shadow-md shadow-gray-500 flex flex-col gap-8 items-center rounded-md p-4">
                    <div className="flex flex-col items-center gap-4 pt-8">
                        <img 
                            className="w-20"
                            src="/images/logo-chrome.svg" 
                            alt="chrome-logo"
                        />
                        <h3 className="text-md text-[hsl(229,31%,21%)] font-semibold">
                            Add to Chrome
                        </h3>
                        <p className="text-gray-500 font-medium">
                            Minimum version 62
                        </p>
                    </div>
                    <img src="/images/bg-dots.svg" alt="dots-image" />
                    <div className="pl-4 pr-4 w-full">
                         <button className="bg-[hsl(231,69%,60%)] text-white font-semibold pt-4 pb-4 w-full rounded-md">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
                <div className="shadow-md shadow-gray-500 flex flex-col gap-8 items-center rounded-md p-4 md:absolute
                                md:left-[50%] md:-translate-x-[50%] md:translate-y-8">
                    <div className="flex flex-col items-center gap-4 pt-8">
                        <img 
                            className="w-20"
                            src="/images/logo-firefox.svg" 
                            alt="firefox-logo"
                        />
                        <h3 className="text-md text-[hsl(229,31%,21%)] font-semibold">
                            Add to Firefox
                        </h3>
                        <p className="text-gray-500 font-medium">
                            Minimum version 55
                        </p>
                    </div>
                    <img src="/images/bg-dots.svg" alt="dots-image" />
                    <div className="pl-4 pr-4 w-full">
                         <button className="bg-[hsl(231,69%,60%)] text-white font-semibold pt-4 pb-4 w-full rounded-md">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
                <div className="shadow-md shadow-gray-500 flex flex-col gap-8 items-center rounded-md p-4 md:absolute md:right-0
                                md:translate-y-16">
                    <div className="flex flex-col items-center gap-4 pt-8">
                        <img 
                            className="w-20"
                            src="/images/logo-opera.svg" 
                            alt="opera-logo"
                        />
                        <h3 className="text-md text-[hsl(229,31%,21%)] font-semibold">
                            Add to Opera
                        </h3>
                        <p className="text-gray-500 font-medium">
                            Minimum version 46
                        </p>
                    </div>
                    <img src="/images/bg-dots.svg" alt="dots-image" />
                    <div className="pl-4 pr-4 w-full">
                         <button className="bg-[hsl(231,69%,60%)] text-white font-semibold pt-4 pb-4 w-full rounded-md">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default DownloadingSection