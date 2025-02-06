import { InformationList } from "../components/lists/InformationList";
import { ImageBanner } from "../components/ImageBanners";
import { ProductCareData } from "../components/data/ProductCareData";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ProductCare = () => {
  useDocumentTitle("Product care");
  return (
    <>
      <ImageBanner
        title="Product care"
        defaultImage="images/main/product-care-image-default.webp"
        smallImage="images/main/product-care-image-small.webp"
        altImage="image banner"
      />
      <section
        className="w-5/6 mx-auto text-textColor py-10"
        aria-labelledby="general care"
      >
        <h2 id="general care" className="text-3xl font-bold">
          General care
        </h2>
        <InformationList arrayObject={ProductCareData} />
      </section>
    </>
  );
};

export default ProductCare;
