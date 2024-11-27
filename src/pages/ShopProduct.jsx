import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { ObjectPropertyShop } from "../components/ObjectPropertyShop";
import { ClientBenefitList } from "../components/lists/ClientBenefitList";
import { Shopbutton } from "../components/buttons/ShopButton";

import "../types";

const ShopProduct = () => {
  const [changeClothes, setChangeClothes] = useState(0);
  const [selectSize, setSelectSize] = useState("");

  const { idProduct: idClothes, category: categoryProduct } = useParams();

  const { data: dataCategory } = useFetch(categoryProduct);

  const idClothesNumber = idClothes ? Number(idClothes) : null;

  const dataProduct = Array.isArray(dataCategory)
    ? dataCategory.find((item) => item.idProduct === idClothesNumber)
    : null;

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleChangeClothes = useCallback(({ currentTarget }) => {
    const indexValue = /** @type {FiltersString} */ (currentTarget.value);
    setChangeClothes(parseInt(indexValue));
  }, []);

  /**@type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleChoiseSize = ({ currentTarget }) => {
    setSelectSize(currentTarget.value);
  };
  console.log(selectSize);
  const handleShop = () => {
    let purchageProduct;
    if (dataProduct) {
      const { price, idProduct, name, colors } = dataProduct;
      const colorChoise = colors[changeClothes];
      purchageProduct = { price, idProduct, name, colorChoise, selectSize };
    }
    console.log(purchageProduct);
  };
  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      {!dataProduct ? (
        <h3> no hay nada we</h3>
      ) : (
        <div className="w-5/6 h-auto mx-auto py-10 gap-10 lg:flex ">
          <div className="h-auto py-5 lg:h-full lg:w-1/2 lg:py-0">
            <ImagesShopSlider
              maxSizeArrows={true}
              itsALink={false}
              array={dataProduct}
              {...{ changeClothes }}
            />
          </div>
          <div className="flex flex-col justify-start gap-10 lg:w-1/2 ">
            <ObjectPropertyShop
              product={dataProduct}
              disabledColor={changeClothes}
              disabledSize={selectSize}
              {...{ handleChangeClothes, handleChoiseSize }}
            />
            <Shopbutton onClick={handleShop} disabled={selectSize === ""}>
              Add to bag
            </Shopbutton>
            <ClientBenefitList />
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopProduct;
