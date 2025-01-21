import { ImageBanner } from "../components/ImageBanners";
import { ArticleAbout } from "../components/Articles/ArticleAbout";
import { TypeTwoSection } from "../components/sections/TypeTwoSection";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { TypeOneSection } from "../components/sections/TypeOneSection";

const OurFabrics = () => {
  useDocumentTitle("Our fabric");
  return (
    <>
      <ImageBanner
        title="Our fabrics"
        defaultImage="/images/main/our-fabrics-banner-default.webp"
        smallImage="/images/main/our-fabrics-banner-small.webp"
        altImage="our fabrics banner"
      />
      <div className="w-5/6 h-auto grid gap-32 mx-auto text-mainColor py-10">
        <ArticleAbout
          labelledby="Argentine cotton"
          title="Fabric made with 100% Argentine cotton"
          text="As a specialist brand, Cavendish focuses on the latest fabrics and techniques to produce excellent garments that are lightweight, technical, comfortable and specifically designed for the most discerning customer."
        />
        <TypeTwoSection
          title="Argentine-quality"
          text="Designed and woven in Mar del Plata, our Argentine-made fabrics are created with 100% pure cotton and treated with a Teflon® finish that is resistant to moisture and stains."
          firstImageDefault="images/main/our-fabric-image-article-1-default.webp"
          firstImageSmall="images/main/our-fabric-image-article-1-small.webp"
          firstAltImage="example of quality in clothing"
          secondImageDefault="images/main/our-fabric-image-article-2-default.webp"
          secondImageSmall="images/main/our-fabric-image-article-2-small.webp"
          secondAltImage="fabric visual"
          mainImageDefault="images/main/our-fabric-image-article-3-default.webp"
          mainImageSmall="images/main/our-fabric-image-article-3-small.webp"
          mainAltImage="outfit"
          labelledBy="Argentine-quality"
        />
        <TypeOneSection
          reverse={false}
          title="GORE-TEX®"
          labelledBy="GORE-TEX®"
          text="The interaction between Cavendish and GORE-TEX® results in products that provide protection and comfort, perfect for extreme weather conditions. Cavendish has been working with GORE-TEX® for over 30 years to offer highly functional garm"
          mainImageDefault="images/main/our-fabric-typeOneSection-1-main-default.webp"
          mainImageSmall="images/main/our-fabric-typeOneSection-1-main-default.webp"
          secondaryImageDefault="images/main/our-fabric-typeOneSection-1-secondary-default.webp"
          secondaryImageSmall="images/main/our-fabric-typeOneSection-1-secondary-small.webp"
          altImage="GORE-TEX® example"
        />

        <TypeTwoSection
          labelledBy="Pontetorto-fleece"
          title="Pontetorto fleece"
          text="The premium Italian-milled Tecnopile fleece used to make many of our gilets, jackets and quarter zips comes from Pontetorto, a company famed for its quality fabrics. Smooth in appearance, its structure ensures lightweight warmth, breathability, and durability."
          firstImageDefault="images/main/our-fabric-typeTwoSection-2-secondary-1-default.webp"
          firstImageSmall="images/main/our-fabric-typeTwoSection-2-secondary-1-small.webp"
          firstAltImage="sport outfit"
          secondImageDefault="images/main/our-fabric-typeTwoSection-2-secondary-2-default.webp"
          secondImageSmall="images/main/our-fabric-typeTwoSection-2-secondary-2-small.webp"
          secondAltImage="fabric visual"
          mainImageDefault="images/main/our-fabric-typeTwoSection-2-main-default.webp"
          mainImageSmall="our-fabric-typeTwoSection-2-main-small.webp"
          mainAltImage="outfit"
        />
        <TypeOneSection
          reverse={false}
          labelledBy="Venturi"
          title="Venturi"
          text="In Venturi, Schöffel has created its own high quality weatherproof clothing technology, with the membrane providing the utmost protection, so the wearer can be sure to enjoy a unique outdoor experience, whatever the weather. Venturi is a closed membrane, soft to the touch and with no openings or pores through which water or wind can penetrate."
          mainImageDefault="images/main/our-fabric-typeOneSection-2-main-default.webp"
          mainImageSmall="images/main/our-fabric-typeOneSection-2-main-default.webp"
          secondaryImageDefault="images/main/our-fabric-typeOneSection-2-secondary-default.webp"
          secondaryImageSmall="images/main/our-fabric-typeOneSection-2-secondary-small.webp"
          altImage="GORE-TEX® example"
        />
      </div>
    </>
  );
};

export default OurFabrics;
