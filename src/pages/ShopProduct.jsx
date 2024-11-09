import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "../types";
import { ColorButton } from "../components/buttons/ColorButton";
const ShopProduct = () => {
  const { idProduct: idClothes, category: categoryProduct } = useParams();

  const { data: dataCategory } = useFetch(categoryProduct);

  const dataProduct = dataCategory?.find(
    (item) => item.idProduct === idClothes
  );

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      {dataProduct ? (
        <div className="w-5/6 mx-auto pt-10">
          <div className="w-full h-1/2">
            <ImagesShopSlider
              maxSizeArrows={true}
              itsALink={false}
              category=""
              array={dataProduct}
            />
          </div>
          <div className="w-full h-1/2">
            <h2>{dataProduct.name}</h2>
            <p>{dataProduct.description}</p>
            <p>${dataProduct.price}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ratione quibusdam aspernatur beatae fugiat.
            </p>
            <ul className="flex gap-3">
              {dataProduct.colors.map((color, index) => {
                return (
                  <li
                    className="w-16 h-8 hover:border-b-black"
                    key={index + color.colorName}
                  >
                    <ColorButton
                      hex={color.hex}
                      name={color.colorName}
                      mainProduct={true}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <p>no se encontro nada we</p>
      )}
    </section>
  );
};

export default ShopProduct;
