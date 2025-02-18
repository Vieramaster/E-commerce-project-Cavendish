/**
 * @param {{
 *   list: ClothesObject[] | undefined,
 *   value: string,
 *   handleChosenClothes: React.MouseEventHandler<HTMLButtonElement>
 * }} props
 */

export const InputSearchList = ({ list, value, handleChosenClothes }) => {
  const hiddenList = value && list !== undefined ? "block" : "hidden";

  return (
    <ul
      className={`
          absolute
          top-[2.9rem] 
          lg:top-[4.1rem] 
          w-full 
          max-h-96 
          overflow-y-auto 
          bg-white 
          ${hiddenList} 
         `}
    >
      {list?.map(({ name }) => (
        <li
          key={name}
          className="font-alternative 
          text-lightCarbon 
          h-10 
          hover:bg-lightGrey 
          flex 
          items-center"
        >
          <button
            className="pl-10"
            aria-label={`Select ${name}`}
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
