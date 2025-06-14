import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container py-16 sm:py-24 flex justify-between items-center gap-10 max-lg:flex-col"
      aria-labelledby="super-quality-heading"
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-6">
        <h2
          id="super-quality-heading"
          className="text-4xl font-palanquin font-bold leading-tight lg:max-w-lg capitalize"
        >
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>

        <p className="info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-4">
          <Button label="View details" className="button-animated" />
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center w-full">
        <img
          src={shoe8}
          alt="High-quality Nike shoe product"
          width={570}
          height={522}
          className="object-contain w-full max-w-[570px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
