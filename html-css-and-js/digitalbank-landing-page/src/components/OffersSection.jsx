function OffersSection() {
  return (
    <section className="flex flex-col gap-8 p-4 md:p-16 bg-[hsl(220,16%,96%)]">
      <div className="flex flex-col gap-2 max-md:text-center">
        <h3 className="text-4xl font-semibold">Why choose DigitalBank?</h3>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="max-md:text-center flex flex-col gap-4 md:flex-row">
        <div>
          <img src="/images/icon-online.svg" alt="online-banking-icon" />
          <h4 className="text-3xl">Online Banking</h4>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img src="/images/icon-budgeting.svg" alt="simple-budgeting-icon" />
          <h4 className="text-3xl">Simple Budgeting</h4>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div>
          <img src="/images/icon-onboarding.svg" alt="fast-onboarding-icon" />
          <h4 className="text-3xl">Fast Onboarding</h4>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div>
          <img src="/images/icon-api.svg" alt="open-api-icon" />
          <h4 className="text-3xl">Open API</h4>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
