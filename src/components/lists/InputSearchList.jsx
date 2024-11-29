/**@param {{list: SearchList[], value: string, handleChosenClothes : ()=> void}} props */
export const InputSearchList = ({ list, value, handleChosenClothes }) => {
  return (
    <ul
      className={`${
        value && list.length > 0 ? "block" : "hidden"
      } absolute top-[2.9rem] lg:top-[4.1rem] w-full max-h-96 overflow-y-auto bg-white `}
    >
      {list.map(({ name, idProduct }, index) => (
        <li
          key={name}
          className="font-alternative text-lightCarbon h-10 hover:bg-lightGrey flex items-center"
        >
          <button
            className="pl-10"
            data-id={idProduct}
            data-name={name}
            onClick={handleChosenClothes}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};
