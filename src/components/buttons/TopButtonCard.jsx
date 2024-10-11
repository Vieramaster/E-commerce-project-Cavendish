const TopButtonCard = ({
  parentMethod,
  label,
  color = "primary",
  children,
}) => {
  const classTopButtonCard = {
    primary: "bg-darkGrey rounded-full",
    secondary: "",
  };

  return (
    <button
      onClick={parentMethod}
      className={`${classTopButtonCard[color]} absolute  top-5 right-5 size-10 hover:scale-105 duration-200 ease-in-out`}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default TopButtonCard;
