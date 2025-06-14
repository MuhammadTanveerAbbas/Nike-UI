const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-gray-800">
      <div
        className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full"
        aria-label={`${label} icon`}
        role="img"
      >
        <img src={imgURL} alt={label} width={24} height={24} loading="lazy" />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-gray-100">
        {label}
      </h3>

      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-gray-300">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
