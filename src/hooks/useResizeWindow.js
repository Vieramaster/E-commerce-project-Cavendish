import { useEffect } from "react";

/**@param {number} windowSize* @param {React.Dispatch<React.SetStateAction<boolean>>} setState  */

export const useResizeWindow = (windowSize, setState) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < windowSize) {
        setState(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup para remover el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
