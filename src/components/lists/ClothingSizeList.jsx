import { ShopSizeButton } from "../buttons/ShopSizeButton";
/**
 * @param {{
 * array: ClothesObject,
 * disabledSize:string,
 * changeClothesColor: number
 * handleChoiseSize:  React.MouseEventHandler
 * }} props
 */
export const ClothingSizeList = ({
  array,
  changeClothesColor,
  handleChoiseSize,
  disabledSize,
}) => {
  return (
    <ul className="flex gap-3 h-auto w-full flex-wrap">
      {Object.entries(array?.colors[changeClothesColor].sizes).map(
        (item, index) => {
          return (
            <li key={item[0] + index}>
              <ShopSizeButton
                disabled={item[1] === 0}
                borderButton={item[1] > 0}
                aria-label={`${item[0]} size button`}
                value={item[0]}
                onClick={handleChoiseSize}
                data-id="sizeButton"
                selected={disabledSize === item[0]}
              >
                {item[0]}
              </ShopSizeButton>
            </li>
          );
        }
      )}
    </ul>
  );
};
