import { useState } from "react";
import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";

/**
 * @param {{
 *  arrayObject: {title: string, text: JSX.Element}[]
 * }} props
 */
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
    <ul className="w-full py-10">
      {arrayObject?.map(({ text, title }, index) => {
        
        const isOpen = isOpenFaq === index;
        const expanded = isOpen ? "true" : "false";
        const open = isOpen ? "max-h-96" : "max-h-0";
        const changeDirectionArrow = isOpen ? "top" : "bottom";

        return (
          <li
            key={index}
            className="w-full border-b border-border overflow-hidden"
          >
            <button
              className="min-h-14 w-full text-start text-lg font-light flex justify-between items-center gap-10"
              onClick={handleFaq}
              data-id={index}
              aria-expanded={expanded}
            >
              {title}{" "}
              <span className="w-4 h-auto mr-3 fill-textColor">
                <MinimalistArrow directionArrow={changeDirectionArrow} />
              </span>
            </button>

            <article
              className={`transition-[max-height] duration-1000 ease-in-out overflow-hidden ${open}`}
            >
              <p className="italic pb-6">{text}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
