import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl">
      {/* Product Image */}
      <img
        src={imgURL}
        alt={name}
        width={282}
        height={282}
        className="w-[282px] h-[282px] object-contain rounded-xl"
      />

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <img
          src={star}
          alt="rating icon"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="font-montserrat text-lg leading-none text-gray-300">
          (4.5)
        </p>
      </div>

      {/* Product Title */}
      <h3 className="mt-1 text-xl font-palanquin font-semibold leading-snug text-gray-100">
        {name}
      </h3>

      {/* Price */}
      <p className="mt-1 text-xl font-montserrat font-semibold text-coral-red leading-snug">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
