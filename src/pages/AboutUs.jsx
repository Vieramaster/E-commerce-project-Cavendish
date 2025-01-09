import { ImageBanner } from "../components/ImageBanners";
const AboutUs = () => {
  return (
    <section className="w-full h-auto bg-background pt-28">
      <ImageBanner
        title="About us"
        defaultImage="/public/images/main/about-us-image-default.webp"
        smallImage="/public/images/main/about-us-image-small.webp"
        altImage="image banner"
      />
      <div className="w-5/6 h-auto mx-auto text-textColor">
        <h3 className="text-3xl font-bold mt-10 mb-3">Our Story</h3>
        <article className="w-full h-auto flex flex-col gap-3">
          <p>
            {" "}
            Founded in 1985 in the beautiful city of Mar del Plata,{" "}
            <strong>Cavendish</strong> started as a small family business
            focused on creating high-quality products. What began as a workshop
            with only two people and big dreams has now become a leading company
            in its industry. From the very beginning, we were convinced that
            hard work, passion, and a commitment to our values would take us
            far.
          </p>
          <picture className="w-full h-auto">

            
          </picture>
        </article>
      </div>
    </section>
  );
};
export default AboutUs;
