import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-sm mx-auto px-4 py-2">
      {/* Customer Image */}
      <img
        src={imgURL}
        alt={`${customerName} profile picture`}
        className="rounded-full object-cover w-[120px] h-[120px]"
        loading="lazy"
      />

      {/* Feedback Text */}
      <p className="mt-6 font-montserrat text-gray-300 text-base leading-relaxed">
        {feedback}
      </p>

      {/* Rating */}
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain"
          aria-hidden="true"
          loading="lazy"
        />
        <p className="text-lg font-montserrat text-gray-300">({rating})</p>
      </div>

      {/* Customer Name */}
      <h3 className="mt-2 font-palanquin text-2xl font-bold text-gray-100">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
