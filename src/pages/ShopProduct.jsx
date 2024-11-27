import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ObjectPropertyShop } from "../components/ObjectPropertyShop";
import { ClientBenefitList } from "../components/lists/clientBenefitList";
import { useState, useEffect } from "react";
import "../types";

const ShopProduct = () => {
  const [loadingProduct, setLoadingProduct] = useState(false);

  const { idProduct: idClothes, category: categoryProduct } = useParams();

  const { data: dataCategory } = useFetch(categoryProduct);

  const idClothesNumber = idClothes ? Number(idClothes) : null;

  const dataProduct = Array.isArray(dataCategory)
    ? dataCategory.find((item) => item.idProduct === idClothesNumber)
    : null;

  useEffect(() => {
    setLoadingProduct(!dataCategory);
  }, [dataCategory]);

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      {loadingProduct ? (
        <h3>Cargando producto...</h3>
      ) : !dataProduct ? (
        <h3>No hay producto disponible</h3>
      ) : (
        <div className="w-5/6 h-auto mx-auto py-10 gap-10 lg:flex ">
          <div className="h-auto py-5 lg:h-full lg:w-1/2 lg:py-0">
            <ImagesShopSlider
              maxSizeArrows={true}
              itsALink={false}
              array={dataProduct}
            />
          </div>
          <div className="flex flex-col justify-start gap-10 lg:w-1/2 ">
            <ObjectPropertyShop product={dataProduct} />
            <button className="w-full font-alternative h-10 bg-mainColor text-white mx-auto rounded-md hover:bg-hover active:opacity-90 duration-200 ease-out lg:w-96 lg:ml-0">
              Add to bag
            </button>
            <ClientBenefitList />
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopProduct;
