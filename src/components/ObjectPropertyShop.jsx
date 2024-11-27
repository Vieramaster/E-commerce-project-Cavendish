import { ShopSizeButton } from "./buttons/ShopSizeButton";
import { ColorButton } from "./buttons/ColorButton";
import "../types";

/**@param {{product: ClothesObject}} props*/
export const ObjectPropertyShop = ({ product }) => {
  return (
    <div className="w-full h-auto  flex flex-col gap-5   ">
      <article className="text-textColor flex flex-col gap-3">
        <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl">
          {product.name}
        </h2>
        <p className="italic lg:text-lg 2xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          ratione quibusdam aspernatur beatae fugiat.
        </p>
        <h3 className="font-bold font-alternative text-4xl lg:text-5xl">
          ${product.price}
        </h3>
      </article>
      <ul className="flex gap-3">
        {product.colors.map(({ hex, colorName }, index) => {
          return (
            <li
              className="w-16 h-8 hover:border-b-black"
              key={index + colorName}
            >
              <ColorButton
                isActive
                style={{ backgroundColor: hex }}
                name={colorName}
                mainProduct={true}
              />
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-3 h-auto w-full flex-wrap">
        {Object.entries(product?.colors[0].sizes).map((item, index) => {
          return (
            <li key={item[0] + index}>
              <ShopSizeButton
                disabled={item[1] === 0}
                borderButton={item[1] > 0}
                aria-label={`${item[0]} size button`}
                id={item[0]}
                onClick={() => "void"}
                data-id="sizeButton"
                selected={false}
              >
                {item[0]}
              </ShopSizeButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
