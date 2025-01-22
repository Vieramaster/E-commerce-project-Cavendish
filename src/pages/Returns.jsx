import { InformationList } from "../components/lists/InformationList";
import { ReturnsData } from "../components/data/ReturnsData";
import useDocumentTitle from "../hooks/useDocumentTitle";

const h3Class = "text-lg font-medium mt-5";

const Returns = () => {
  useDocumentTitle("Returns");
  return (
    <div className="w-5/6 flex flex-col gap-4 mx-auto py-16 text-textColor">
      <article aria-labelledby="returns-and-exchanges">
        <h1 className="text-3xl font-semibold mb-5">Returns & Exchanges</h1>
        <p>
          At Cavendish Country, we are committed to ensuring your complete
          satisfaction. Should you wish to make a return or an exchange, you can
          do so for free within 28 days of ordering. Please ensure items are
          returned in their original packaging, and with all the labels and
          tags.
        </p>
        <h3 className={h3Class}>Extended Christmas returns period</h3>
        <p>
          We’re pleased to offer an extended returns period for orders placed
          between <strong>1st November and 25th December</strong>. This means
          you can shop with confidence, knowing that any gifts or purchases made
          during this time are eligible for returns until{" "}
          <strong>31st January</strong>.
        </p>
      </article>
      <section>
        <h3 className={h3Class}>Returns FAQs</h3>
        <InformationList arrayObject={ReturnsData} />
      </section>
    </div>
  );
};

export default Returns;
