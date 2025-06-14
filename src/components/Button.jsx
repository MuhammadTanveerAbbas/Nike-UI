const Button = ({
  label,
  iconURL,
  iconAlt = "button icon",
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
  fullWidth = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`
        flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        transition-all duration-300 ease-in-out
        ${backgroundColor} ${textColor} ${borderColor}
        ${fullWidth ? "w-full" : "w-auto"}
        hover:brightness-90 focus:brightness-90 focus:outline-none focus:ring-2 focus:ring-coral-red
      `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt={iconAlt}
          className="ml-2 w-5 h-5 object-contain"
          aria-hidden="true"
          draggable={false}
        />
      )}
    </button>
  );
};

export default Button;
