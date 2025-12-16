function ArticlesSection () {
    return (
        <section className="bg-[hsl(0,0%,98%)] p-4 md:p-16 flex flex-col gap-4">
            <h3 className="text-3xl font-semibold">
                Latest Articles
            </h3>
            <div className="grid grid-rows-4 gap-8 md:grid-rows-1 md:grid-cols-4">
                <div className="grid grid-rows-[200px_200px] md:grid-rows-[1fr_1fr] bg-white">
                    <div>
                        <img 
                            className="h-full w-full"
                            src="/images/image-currency.jpg" alt="currency-image" />
                    </div>
                    <div className="flex gap-2 flex-col p-8 md:p-2">
                        <span className="text-xs text-[hsl(233,8%,62%)] font-bold">
                            By Claire Robinson
                        </span>
                        <span className="text-xl font-semibold">
                             Receive money in any currency with no fees
                        </span>
                        <p className="text-[hsl(233,8%,62%)] font-semibold">
                            The world is getting smaller and we’re becoming more mobile.
                            So why should you be forced to only receive money in a single …
                        </p>
                    </div>
                </div>
                <div className="grid grid-rows-[200px_200px] md:grid-rows-[1fr_1fr] bg-white">
                    <div>
                        <img 
                            className="h-full w-full"
                            src="/images/image-restaurant.jpg" 
                            alt="restaurant-image" />
                    </div>
                    <div className="flex gap-2 flex-col p-2">
                        <span className="text-xs text-[hsl(233,8%,62%)] font-bold">
                            By Wilson Hutton
                        </span>
                        <span className="text-xl font-semibold">
                            Treat yourself without worrying about money
                        </span>
                        <p className="text-[hsl(233,8%,62%)] font-semibold">
                            Our simple budgeting feature allows you to separate out your spending and
                            set realistic limits each month. That means you … 
                        </p>
                    </div>
                </div>
                <div className="grid grid-rows-[200px_200px] md:grid-rows-[1fr_1fr] bg-white">
                    <div>
                        <img 
                            className="h-full w-full"
                            src="/images/image-plane.jpg" 
                            alt="plane-image" />
                    </div>
                    <div className="flex gap-2 flex-col p-2">
                        <span className="text-xs text-[hsl(233,8%,62%)] font-bold">
                            By Wilson Hutton
                        </span>
                        <span className="text-xl font-semibold">
                            Take your Digitalbank card wherever you go.
                        </span>
                        <p className="text-[hsl(233,8%,62%)] font-semibold">
                            We want you to enjoy your travels. This is why we don’t charge any fees on
                            purchases while you’re abroad. We’ll even show you …
                        </p>
                    </div>
                </div>
                <div className="grid grid-rows-[200px_200px] md:grid-rows-[1fr_1fr] bg-white">
                    <div>
                        <img 
                            className="h-full w-full"
                            src="/images/image-confetti.jpg" 
                            alt="confetti-image" />
                    </div>
                    <div className="flex gap-2 flex-col p-2">
                        <span className="text-xs text-[hsl(233,8%,62%)] font-bold">
                            By Claire Robinson
                        </span>
                        <span className="text-xl font-semibold">
                            Our invite-only Beta accounts are now live!
                        </span>
                        <p className="text-[hsl(233,8%,62%)] font-semibold">
                            After a lot of hard work by the whole team, we’re excited to launch our
                            closed beta. It’s easy to request an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticlesSection