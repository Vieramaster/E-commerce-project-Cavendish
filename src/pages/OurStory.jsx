import { ImageBanner } from "../components/ImageBanners";
import { TypeOneSection } from "../components/sections/TypeOneSection";
import { TriadImages } from "../components/sections/TriadImages";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { ArticleAbout } from "../components/Articles/ArticleAbout";

const galeryImage = [
  {
    defaultImage: "/public/images/main/image-story-sport-1-default.webp",
    smallImage: "/public/images/main/image-story-sport-1-small.webp",
    altImage: "galery image 1",
  },
  {
    defaultImage: "/public/images/main/image-story-sport-2-default.webp",
    smallImage: "/public/images/main/image-story-sport-2-small.webp",
    altImage: "galery image 2",
  },
  {
    defaultImage: "/public/images/main/image-story-sport-3-default.webp",
    smallImage: "/public/images/main/image-story-sport-3-small.webp",
    altImage: "galery image 3",
  },
];
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
        <ArticleAbout
          title=" Born in Mar del Plata, Made in Argentina, for Argentines"
          text="Founded in 1985 in the beautiful city of Mar del Plata,
              Cavendish started as a small family business
              focused on creating high-quality products. What began as a
              workshop with only two people and big dreams has now become a
              leading company in its industry. From the very beginning, we were
              convinced that hard work, passion, and a commitment to our values
              would take us far."
        />
        <TypeOneSection
          reverse={false}
          title="A perfect partnership"
          text="In the early 1990s, the Cavnedish family partnered with Jorge Alvareti, a fashion enthusiast and CEO of Bradshaw, to develop a range of streetwear tailored to the needs of the Argentine sports market."
          mainImageDefault="/images/main/story-image-3-default.webp"
          mainImageSmall="/images/main/story-image-3-small.webp"
          secondaryImageDefault="/images/main/story-image-4-default.webp"
          secondaryImageSmall="/images/main/story-image-4-default.webp"
          altImage="story images"
        />
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
        <TriadImages imageArray={galeryImage} />
        <TypeOneSection
          reverse
          title="Thirty years on"
          text="More than three decades have passed and the relationship between the two family businesses continues to flourish. The Cavendish brand, which is now a true synonym for Argentine sport, has grown and developed to offer a wide range of stylish and practical clothing for well-dressed men."
          mainImageDefault="/images/main/story-image-1-default.webp"
          mainImageSmall="/images/main/story-image-1-small.webp"
          secondaryImageDefault="/images/main/story-image-2-default.webp"
          secondaryImageSmall="/images/main/story-image-2-default.webp"
          altImage="story images"
        />
      </div>
    </>
  );
};
export default OurStory;
