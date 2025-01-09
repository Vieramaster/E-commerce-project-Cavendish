import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { ObjectPropertyShop } from "../components/ObjectPropertyShop";
import { ClientBenefitList } from "../components/lists/ClientBenefitList";
import { Shopbutton } from "../components/buttons/ShopButton";
import { useCart } from "../hooks/useZustand";
import { LoaderPage } from "../components/loaders/LoaderPage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "../types";

const ShopProduct = () => {
  const [changeClothesColor, setChangeClothesColor] = useState(0);
  const [selectSize, setSelectSize] = useState("");
  const [quantityClothes, setQuantityClothes] = useState(0);
  const [finishBuy, setFinishBuy] = useState(false);

  const { idProduct: idClothes, category: categoryProduct } = useParams();

  const { data: dataCategory } = useFetch(
    "/data/clothes_for_e-commerse.json",
    categoryProduct,
    null
  );

  const idClothesNumber = idClothes && Number(idClothes);

  const productData = Array.isArray(dataCategory)
    ? dataCategory.find((item) => item.idProduct === idClothesNumber)
    : null;

  useDocumentTitle( productData ? productData.name : "shipping!")
  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleChangeClothes = ({ currentTarget }) => {
    const indexValue = /** @type {FiltersString} */ (currentTarget.value);
    setChangeClothesColor(parseInt(indexValue));
  };

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleChoiseSize = ({ currentTarget }) => {
    setSelectSize(currentTarget.value);
  };

  const handleminorQuantity = () => {
    setQuantityClothes((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handlegreaterQuantity = useCallback(() => {
    if (selectSize !== "") {
      const stockSize =
        productData?.colors?.[changeClothesColor]?.sizes?.[selectSize];

      if (stockSize !== undefined) {
        setQuantityClothes((prev) => (prev < stockSize ? prev + 1 : stockSize));
      }
    }
  }, [productData, changeClothesColor, selectSize]);

  const { addToCart } = useCart();

  const handleShop = useCallback(() => {
    if (productData) {
      const { price, idProduct, name, colors } = productData;
      const colorChoise = colors[changeClothesColor];
      const purchageProduct = {
        price,
        idProduct,
        name,
        colorChoise,
        selectSize,
        quantityClothes,
      };
      addToCart(purchageProduct);
      setFinishBuy(true);
    }
  }, [productData, changeClothesColor, selectSize, quantityClothes]);


  

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      {!productData ? (
        <LoaderPage />
      ) : (
        <div className="w-5/6 h-auto mx-auto py-10 gap-10 lg:flex ">
          <div className="h-auto py-5 lg:h-full lg:w-1/2 lg:py-0">
            <ImagesShopSlider
              maxSizeArrows={true}
              itsALink={false}
              array={productData}
              {...{ changeClothesColor }}
            />
          </div>
          <div className="flex flex-col justify-start gap-10 lg:w-1/2 ">
            <ObjectPropertyShop
              product={productData}
              disabledColor={changeClothesColor}
              disabledSize={selectSize}
              quantityPurchased={quantityClothes}
              {...{
                handleChangeClothes,
                handleChoiseSize,
                handlegreaterQuantity,
                handleminorQuantity,
                changeClothesColor,
              }}
            />
            <Shopbutton
              onClick={handleShop}
              disabled={quantityClothes === 0 || finishBuy === true}
            >
              {finishBuy ? "added!" : "Add to bag"}
            </Shopbutton>
            <ClientBenefitList />
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopProduct;
