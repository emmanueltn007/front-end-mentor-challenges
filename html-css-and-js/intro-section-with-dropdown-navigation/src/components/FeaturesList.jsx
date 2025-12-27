import features from "../../data/features";

function FeaturesList({ className="" }) {
  return (
    <ul className={className}>
      {features.map((feature) => {
        return (
          <li key={feature.dropdownItem} className="flex gap-4 items-center hover:text-[hsl(0,0%,8%)] transition duration-150 ease-in-out">
            <img className="h-4 w-auto" src={feature.image} alt={feature.alt} />
            <span>{feature.dropdownItem}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default FeaturesList;
