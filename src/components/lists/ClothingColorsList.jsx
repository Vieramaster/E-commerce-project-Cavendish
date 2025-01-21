import { ColorButton } from "../buttons/ColorButton";

/**
 * @param {{
 * array: ClothesObject,
 * activeColorIndex: number,
 * handleChangeClothes: React.MouseEventHandler
 * }} props
 */
export const ClothingColorsList = ({
  array,
  activeColorIndex,
  handleChangeClothes,
}) => {
  return (
    <ul
      className="flex gap-3"
      role="list"
      aria-label="Available clothing colors"
    >
      {array?.colors?.map(({ hex, colorName }, index) => {
        const isColorActive =
          activeColorIndex === index
            ? "border-b-black"
            : "hover:border-b-black";
            
        return (
          <li
            key={`${colorName}-${index}`}
            className={`w-16 h-8 ${isColorActive}`}
          >
            <ColorButton
              isActive={activeColorIndex === index}
              disabled={activeColorIndex === index}
              style={{ backgroundColor: hex }}
              name={colorName}
              mainProduct
              id={colorName}
              value={index}
              onClick={handleChangeClothes}
              aria-label={`Select ${colorName} color`}
              title={`${colorName} color`}
            />
          </li>
        );
      })}
    </ul>
  );
};
