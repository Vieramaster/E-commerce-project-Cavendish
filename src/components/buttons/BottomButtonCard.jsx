const BottomButtonCard = ({
  parentMethod,
  label,
  children,
  color = "primary",
}) => {
  const buttonStyles = {
    primary: "bg-carbon text-white hover:bg-esmerald",
    secondary: "bg-yellow text-darkEsmerald hover:bg-white hover:text-carbon",
  };

  return (
    <button
      onClick={parentMethod}
      aria-label={label}
      className={`${buttonStyles[color]} absolute bottom-5 right-5 px-4 py-2 rounded-lg text-sm xl:text-xl duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default BottomButtonCard;
