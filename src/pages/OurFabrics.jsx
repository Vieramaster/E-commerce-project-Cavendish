
import { ImageBanner } from "../components/ImageBanners";
import { ArticleAbout } from "../ArticleAbout";
import { TypeTwoSection } from "../components/sections/TypeTwoSection";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { TypeOneSection } from "../components/sections/TypeOneSection";
import {
  articleAboutData,
  firstTypeOneSectionData,
  secondTypeOneSectionData,
  firstTypeTwoSectionData,
  secondTypeTwoSelectionData,
} from "../components/data/OurFabricsData";

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
        <ArticleAbout {...articleAboutData} />
        <TypeTwoSection {...firstTypeTwoSectionData} />
        <TypeOneSection {...firstTypeOneSectionData} />

        <TypeTwoSection {...secondTypeTwoSelectionData} />
        <TypeOneSection {...secondTypeOneSectionData} />
      </div>
    </>
  );
};
export default OurFabrics;
