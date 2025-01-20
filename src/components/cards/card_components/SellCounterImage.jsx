import { DefaultButtonLink } from "../../links/DefaultButtonLink";
import { ShoppingCartIco } from "../../SVGs/icons/ShoppingCartIco";

/**
 * @param {{
 * discount:number,
 * image:string,
 * imageAlt:string,
 * afterPrice:number,
 * beforePrice:number,
 * page:string
 * }} props
 */
export const SellCounterImage = ({
  discount,
  image,
  imageAlt,
  afterPrice,
  beforePrice,
  page,
}) => {
  return (
    <div className="w-full flex flex-col gap-3 text-white lg:w-96 2xl:w-[30rem] ">
      <p className="font-alternative font-bold text-4xl text-center lg:pl-3 lg:text-start 2xl:text-5xl">
        {discount}% OFF
      </p>
      <img src={image} alt={imageAlt} className="w-full" />
      <div className="flex justify-center  items-center gap-5 lg:justify-start 2xl:gap-8">
        <div className="flex gap-3 border border-background px-3 py-1 rounded-md">
          <p className="font-alternative font-bold line-through text-2xl 2xl:text-3xl ">
            $ {afterPrice}
          </p>
          <p className=" font-alternative font-bold text-2xl   2xl:text-3xl">
            $ {beforePrice}
          </p>
        </div>

        <DefaultButtonLink color="banner" toPage={page}>
          <ShoppingCartIco />
        </DefaultButtonLink>
      </div>
    </div>
  );
};
