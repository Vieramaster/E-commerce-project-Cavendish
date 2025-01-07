import { InformationList } from "../components/lists/InformationList";

const olClass = "list-disc pl-5 flex flex-col gap-2";
const productCareList = [
  {
    title: "Gentle care instructions",
    text: (
      <>
        <p>
          Before washing your product, it's important to follow these steps:
        </p>
        <ol className={olClass}>
          <li className="mt-5">
            Check the care label for specific instructions.
          </li>
          <li>Empty any pockets.</li>
          <li>
            For 3-in-1 jackets, separate the parts and wash them separately.
          </li>
          <li>Ensure all zippers, Velcro fasteners, and poppers are closed.</li>
          <li>Turn the product inside out.</li>
          <li>Avoid using fabric softener on technical garments.</li>
          <li>Rinse thoroughly after washing.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Gentle cycle",
    text: (
      <>
        <p>
          The "gentle cycle" refers to a washing setting with a low number of
          spin cycles and a low temperature. This minimises agitation, reducing
          the risk of damage or deformation to clothing. Washing machine
          manufacturers may use terms like "easy care" or "delicate laundry."
        </p>
        <br />
        <p>
          Ensure the spin speed and temperature are set low, adjusting manually
          if necessary.
        </p>
      </>
    ),
  },
  {
    title: "Laundry detergents",
    text: (
      <>
        <p>
          For washing Schöffel products, use non-bio washing powder or gel and
          follow the label instructions to maintain your product effectively.
        </p>
        <br />
        <p>
          Bleaching: Avoid using bleach on functional textiles, as it can damage
          the material.
        </p>
      </>
    ),
  },
  {
    title: "Washing & impregnating products with a membrane",
    text: (
      <>
        <ol className={olClass}>
          <li className="mt-5">
            Follow the general care instructions and those on the product's care
            label.
          </li>
          <li> Avoid fabric softeners, as they can damage the membrane.</li>
          <li>
            Use special detergents available at sports retailers, such as Nikwax
            or Grangers.
          </li>
          <li>
            Wash on a gentle cycle at the specified temperature, not exceeding
            40°C.
          </li>
          <li>Rinse thoroughly to remove detergent residues.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Washing & waterproofing products with down filling",
    text: (
      <>
        <ol className={olClass}>
          <li className="mt-5">
            Unless otherwise stated, wash your down filled product at 30°C on a
            gentle cycle.
          </li>
          <li>
            {" "}
            Reduce the spin speed and use a special detergent for down filling.
          </li>
          <li>Wash down filled products alone in the laundry drum.</li>
          <li>
            Ensure your washing machine has a capacity of at least six kilos.
          </li>
          <li>Rinse thoroughly to remove detergent residues.</li>
        </ol>
        <br />
        <p>
          All down and feathers used in Schöffel products are RDS certified,
          reflecting our commitment to animal welfare under the Responsible Down
          Standard (RDS) certification.
        </p>
      </>
    ),
  },
];
const ProductCare = () => {
  return (
    <section className="w-full h-auto bg-background pt-28">
      <picture className="w-full h-auto bg-cover relative">
        <h1 className="absolute text-white text-2xl font-bold font-alternative top-1/2 pl-10 md:text-4xl lg:text-5xl 2xl:text-6xl">
          Product care
        </h1>
        <source
          srcSet="images/main/product-care-image-default.webp"
          media="(min-width: 800px)"
        />
        <source
          srcSet="images/main/product-care-image-small.webp"
          media="(max-width: 799px)"
        />
        <img
          src="images/main/product-care-image-default.webp"
          alt="A responsive image example"
        />
      </picture>
      <div className="w-5/6 mx-auto h-auto text-textColor">
        <h3 className="text-3xl font-bold my-10">General care</h3>
        <InformationList arrayObject={productCareList} />
      </div>
    </section>
  );
};

export default ProductCare;
