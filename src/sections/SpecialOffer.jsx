import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-xl:flex-col-reverse gap-10 py-16 sm:py-24"
      aria-label="Special Offer Promotion"
    >
      {/* Image */}
      <div className="flex-1 w-full">
        <img
          src={offer}
          alt="Shoe Promotion"
          className="object-contain w-full max-w-[773px] h-auto"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <h2 className="text-4xl font-palanquin font-bold leading-tight">
          <span className="text-coral-red">Special </span> Offer
        </h2>

        <p className="info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} aria-label="Shop now" />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            hoverEffect
            aria-label="Learn more about the special offer"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
