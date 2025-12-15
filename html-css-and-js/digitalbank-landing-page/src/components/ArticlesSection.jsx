function ArticlesSection () {
    return (
        <section className="p-4 md:p-16">
            <h3>
                Latest Articles
            </h3>
            <div className="md:flex">
                <div>
                    <div>
                        <img 
                            className=""
                            src="/images/image-currency.jpg" alt="currency-image" />
                    </div>
                    <div className="flex flex-col">
                        <span>
                            By Claire Robinson
                        </span>
                        <span>
                             Receive money in any currency with no fees
                        </span>
                        <p>
                            The world is getting smaller and we’re becoming more mobile.
                            So why should you be forced to only receive money in a single …
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img 
                            src="/images/image-restaurant.jpg" 
                            alt="restaurant-image" />
                    </div>
                    <div className="flex flex-col">
                        <span>
                            By Wilson Hutton
                        </span>
                        <span>
                            Treat yourself without worrying about money
                        </span>
                        <p>
                            Our simple budgeting feature allows you to separate out your spending and
                            set realistic limits each month. That means you … 
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img 
                            src="/images/image-plane.jpg" 
                            alt="plane-image" />
                    </div>
                    <div className="flex flex-col">
                        <span>
                            By Wilson Hutton
                        </span>
                        <span>
                            Take your Digitalbank card wherever you go.
                        </span>
                        <p>
                            We want you to enjoy your travels. This is why we don’t charge any fees on
                            purchases while you’re abroad. We’ll even show you …
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img 
                            src="/images/image-confetti.jpg" 
                            alt="confetti-image" />
                    </div>
                    <div className="flex flex-col">
                        <span>
                            By Claire Robinson
                        </span>
                        <span>
                            Our invite-only Beta accounts are now live!
                        </span>
                        <p>
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