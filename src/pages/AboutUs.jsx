import { ImageBanner } from "../components/ImageBanners";
import { ArticleTypeOne } from "../components/ArticleTypeOne";

const AboutUs = () => {
  return (
    <section className="w-full h-auto bg-background pt-28">
      <ImageBanner
        title="Our Story"
        defaultImage="/public/images/main/about-us-image-default.webp"
        smallImage="/public/images/main/about-us-image-small.webp"
        altImage="image banner"
      />
      <div className="w-5/6 h-auto mx-auto text-textColor">
        <article className="w-full h-auto py-10 flex flex-col gap-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <h3 className="text-2xl font-bold lg:w-1/2 ">
              Born in Mar del Plata, Made in Argentina, for Argentines
            </h3>
            <p className="lg:w-1/2">
              {" "}
              Founded in 1985 in the beautiful city of Mar del Plata,{" "}
              <strong>Cavendish</strong> started as a small family business
              focused on creating high-quality products. What began as a
              workshop with only two people and big dreams has now become a
              leading company in its industry. From the very beginning, we were
              convinced that hard work, passion, and a commitment to our values
              would take us far.
            </p>
          </div>
          <ArticleTypeOne
            title="A perfect partnership"
            text="In the early 1990s, the Cavnedish family partnered with Jorge Alvareti, a fashion enthusiast and CEO of Bradshaw, to develop a range of streetwear tailored to the needs of the Argentine sports market."
            mainImageDefault="/images/main/story-image-1-default.webp"
            mainImageSmall="/images/main/story-image-1-small.webp"
            secondaryImageDefault="/images/main/story-image-2-default.webp"
            secondaryImageSmall="/images/main/story-image-2-default.webp"
            altImage="story images"
          />
        </article>
      </div>
    </section>
  );
};
export default AboutUs;
