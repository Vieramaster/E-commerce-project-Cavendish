const firstClass = "px-2 md:py-3 border border-border";
const secondClass = `${firstClass} bg-lightGrey`;

/** @param {{arrayTable: DeliveryTableItem[]}} props */
export const DeliveryTablePage = ({ arrayTable }) => {
  return (
    <>
      {arrayTable?.map(({ thTitles, tdText }, tableIndex) => (
        <table
          key={tableIndex}
          className="w-full h-auto border rounded-md border-border text-center text-textColor flex-wrap my-4"
        >
          <thead className="border border-border ">
            <tr>
              {thTitles?.map((item, index) => (
                <th
                  key={index}
                  className={index % 2 === 0 ? firstClass : secondClass}
                  scope="col"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border border-border">
            {tdText?.map(
              ({ cost, country, DeliveryMethod, DeliveryTimes }, rowIndex) => (
                <tr key={rowIndex}>
                  <td className={firstClass}>{country}</td>
                  <td className={secondClass}>{DeliveryMethod}</td>
                  <td className={firstClass}>{cost}</td>
                  <td className={secondClass}>{DeliveryTimes}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ))}
    </>
  );
};
