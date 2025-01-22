import { ImageBanner } from "../components/ImageBanners";
import { TypeOneSection } from "../components/sections/TypeOneSection";
import { TriadImages } from "../components/sections/TriadImages";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { ArticleAbout } from "../components/Articles/ArticleAbout";
import {
  galeryImageData,
  firstTypeOneSectionData,
  secondTypeOneSectionData,
  articleAboutData,
} from "../components/data/OurStoryData";

const OurStory = () => {
  useDocumentTitle("Our story");

  return (
    <>
      <ImageBanner
        title="Our Story"
        defaultImage="images/main/story-image-banner-default.webp"
        smallImage="images/main/story-image-banner-default.webpp"
        altImage="image banner"
      />
      <div className="w-5/6 h-auto mx-auto text-textColor grid py-16 gap-20">
        <ArticleAbout {...articleAboutData} />
        <TypeOneSection {...firstTypeOneSectionData} />
        <article className="grid gap-3">
          <h3 className="text-3xl font-semibold">
            The success of the sports team
          </h3>
          <p>
            It all started with the Exudus hoodie, the idea for which came to
            Jorge during a training day in Varesse. The week before he had run a
            marathon (quite comfortably) in 31 degrees, wearing Cavendish
            sportswear.
          </p>
          <p>
            Uninspired by the performance of the ubiquitous Exudus hoodie, Jorge
            convinced Mariano Cavendish to let him take the GORE-TEX fabric
            technology, which was widely used in the brand’s running and outdoor
            clothing ranges, and use it to create the Argentinean’s first 100%
            waterproof, windproof, breathable and machine washable coat for the
            sports market.
          </p>
        </article>
        <TriadImages imageArray={galeryImageData} />
        <TypeOneSection {...secondTypeOneSectionData} />
      </div>
    </>
  );
};
export default OurStory;
