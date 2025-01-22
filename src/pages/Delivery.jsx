import { Link } from "react-router-dom";
import { DeliveryTablePage } from "../components/DeliveyTablePage";
import { DeliveryInfoData } from "../components/data/DeliveryInfoData";
import { DeliveryTableData } from "../components/data/DeliveryTableData";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Delivery = () => {
  useDocumentTitle("Delivery");
  return (
    <>
      <div className="w-5/6 grid gap-10 mx-auto text-textColor py-16">
        <section className="grid gap-3" aria-labelledby="delivery-table">
          <h1 id="delivery-table" className="text-3xl font-semibold">
            Delivery
          </h1>
          <h3>Delivery options</h3>
          <DeliveryTablePage arrayTable={DeliveryTableData} />
        </section>

        <section aria-labelledby="delivery-rules">
          {DeliveryInfoData?.map(({ title, points }, index) => (
            <div key={index}>
              <h3 id={`rules-${index}`} className="font-semibold">
                {title}
              </h3>
              <ol className="list-disc list-outside pl-8 sm:pl-10">
                {points.map((item, idx) => (
                  <li key={idx} className="pl-2 sm:pl-4 my-2">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>

        <section aria-labelledby="more-info">
          <h3 id="more-info">Latin America & International delivery</h3>
          <p>
            Please
            <span>
              {" "}
              <Link to="/contact" className="text-lightCarbon underline">
                contact
              </Link>{" "}
            </span>
            us if you need any further information.
          </p>
        </section>
      </div>
    </>
  );
};
export default Delivery;
