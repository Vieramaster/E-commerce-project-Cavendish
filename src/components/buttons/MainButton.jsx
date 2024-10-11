const MainButton = ({ parentMethod, children }) => {
  return (
    <button
      onClick={parentMethod}
      className="bg-yellow rounded-lg  py-3 px-3 text-darkEsmerald font-semibold mt-4 text-sm mx-auto lg:mx-0 lg:text-base 2xl:text-xl  hover:bg-white hover:text-carbon duration-200 ease-in-out"
    >
      {children}
    </button>
  );
};

export default MainButton;
