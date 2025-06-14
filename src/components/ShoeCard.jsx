import PropTypes from "prop-types";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const { bigShoe, thumbnail } = imgURL;

  const handleClick = () => {
    if (bigShoe !== bigShoeImg) changeBigShoeImage(bigShoe);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      className="rounded-xl cursor-pointer max-sm:flex-1 outline-none active:scale-95 transition-transform duration-100"
      aria-label="Select shoe image"
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={thumbnail}
          alt="Shoe collection thumbnail"
          width={127}
          height={103}
          className="object-contain"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  imgURL: PropTypes.shape({
    bigShoe: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  changeBigShoeImage: PropTypes.func.isRequired,
  bigShoeImg: PropTypes.string.isRequired,
};

export default ShoeCard;
