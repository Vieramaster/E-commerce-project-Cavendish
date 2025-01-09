import { useEffect } from "react";

/**@param {string} title */
const  useDocumentTitle = (title) => {
  useEffect(() => {
    document.title =  `Cavendish | ${title}`
  }, [title]);
};

export default  useDocumentTitle;
