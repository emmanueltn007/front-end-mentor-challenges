function FeaturesSection() {
  return (
    <section className="grid grid-rows-[0.5fr_1fr] md:grid-rows-[1fr] md:grid-cols-[1fr_1fr] pl-8 pr-8 md:pl-16 md:pr-16">
      <div>
        <h3 className="text-3xl text-[hsl(228,39%,23%)] font-bold">
          What's different about Manage?
        </h3>
        <p className="text-gray-500 font-medium">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern-digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full">
          <div className="relative md:w-full">
            <span
              className="text-white text-md font-bold bg-[hsl(12,88%,59%)] pt-2 pb-2 pl-6 pr-6 rounded-3xl 
              max-md:absolute max-md:-bottom-2 max-md:z-1 mx-md:-mr-8 md:mr-4"
            >
              01
            </span>
            <span className="max-md:bg-[hsl(13,100%,96%)] rounded-3xl font-bold text-md text-[hsl(228,39%,23%)] 
            max-md:pt-2 max-md:pb-2 max-md:pl-18 max-md:pr-6 z-99 md:w-full">
              Track company-wide progress
            </span>
          </div>
          <p className="text-gray-500 font-medium md:ml-20">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>

        <div>
          <div className="relative">
            <span
              className="text-white text-md font-bold bg-[hsl(12,88%,59%)] pt-2 pb-2 pl-6 pr-6 rounded-3xl max-md:absolute
               max-md:-bottom-2 max-md:z-1 mx-md:-mr-8 md:mr-4"
            >
              02
            </span>
            <span className="max-md:bg-[hsl(13,100%,96%)] rounded-3xl font-bold text-md text-[hsl(228,39%,23%)] max-md:pt-2 max-md:pb-2 max-md:pl-18 max-md:pr-6 z-99">
              Advanced built-in reports
            </span>
          </div>
          <p className="text-gray-500 font-medium md:ml-20">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>

        <div>
          <div className="relative md:w-full">
            <span
              className="text-white text-md font-bold bg-[hsl(12,88%,59%)] pt-2 pb-2 pl-6 pr-6 rounded-3xl max-md:absolute
               max-md:-bottom-2 max-md:z-1 mx-md:-mr-8 md:mr-4"
            >
              03
            </span>
            <span className="max-md:bg-[hsl(13,100%,96%)] rounded-3xl font-bold text-md text-[hsl(228,39%,23%)] max-md:pt-2 max-md:pb-2 max-md:pl-18 max-md:pr-6 z-99">
              Everything you need in one place
            </span>
          </div>
          <p className="text-gray-500 font-medium md:ml-20">
            Everything you need in one place Stop jumping from one service to
            another to communicate, store files, track tasks and share
            documents. Manage offers an all-in-one team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
