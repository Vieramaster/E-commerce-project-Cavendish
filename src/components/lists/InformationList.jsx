import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";
import { useState } from "react";

/** @param {{ arrayObject: informationList[] }} props*/

export const InformationList = ({ arrayObject }) => {
  const [isOpenFaq, setIsOpenFaq] = useState(10);

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleFaq = (event) => {
    const {
      currentTarget: {
        dataset: { id },
      },
    } = event;
    const idNumber = Number(id);

    setIsOpenFaq((prev) => (prev === idNumber ? 10 : idNumber));
  };

  return (
    <ul className="w-full">
      {arrayObject?.map(({ text, title }, index) => {
        const isOpen = isOpenFaq === index;

        return (
          <li
            key={index}
            className="w-full border-b border-border overflow-hidden"
          >
            <button
              className="min-h-14  w-full text-start text-lg flex justify-between items-center gap-10"
              onClick={handleFaq}
              data-id={index}
            >
              {title}{" "}
              <span className="w-4 h-auto mr-3 fill-textColor ">
                {<MinimalistArrow directionArrow={isOpen ? "top" : "bottom"} />}
              </span>
            </button>
            <div
              className={`transition-[max-height] duration-1000 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="italic pb-6 ">{text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
