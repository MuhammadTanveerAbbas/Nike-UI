import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container py-16 sm:py-24" aria-label="Our Services">
      <div
        className="flex justify-center flex-wrap gap-10 sm:gap-12"
        role="list"
      >
        {services.map(({ label, ...rest }) => (
          <ServiceCard key={label} {...rest} label={label} role="listitem" />
        ))}
      </div>
    </section>
  );
};

export default Services;
