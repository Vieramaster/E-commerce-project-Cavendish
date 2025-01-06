const firstClass = "w-1/6 p-3 border border-border";
const secondClass = "w-2/6 p-3 border border-border bg-lightGrey";

/** @param {{arrayTable: DeliveryTableItem[]}} props */
export const DeliveryTablePage = ({ arrayTable }) => {
  return (
    <table className="w-full h-auto border-2 rounded-md border-border text-center text-textColor flex-wrap">
      <thead className="border border-border bg-gray-100">
        <tr>
          <th className={firstClass} scope="col">
            Country
          </th>
          <th className={secondClass} scope="col">
            Delivery Method
          </th>
          <th className={firstClass} scope="col">
            Cost
          </th>
          <th className={secondClass} scope="col">
            Delivery Time
          </th>
        </tr>
      </thead>
      <tbody className="border border-border">
        {arrayTable?.map(
          ({ country, DeliveryMethod, cost, DeliveryTimes }, index) => (
            <tr key={index} className="text-sm lg:text-base">
              <td className={firstClass}>{country}</td>
              <td className={secondClass}>{DeliveryMethod}</td>
              <td className={firstClass}>{cost}</td>
              <td className={secondClass}>{DeliveryTimes}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
