const HoverButton = ({ color = "primary", label, parentMethod, children }) => {
  const classHoverButton = {
    primary: "bg-yellow hover:bg-esmerald",
    secondary:
      "bg-yellow hover:bg-carbon lg:bg-carbon lg:hover:bg-semiEsmerald",
  };
  return (
    <button
      className={`p-3 rounded-lg duration-200 ease-in-out group ${classHoverButton[color]}`}
      onClick={parentMethod}
      aria-label={label}
    >
      {children}
    </button>
  );
};
export default HoverButton;
