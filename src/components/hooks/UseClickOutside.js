import { useEffect } from "react";

/**
 * @param {React.RefObject<HTMLElement>} ref
 * @param {() => void} callback
 */
export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    /**
     * @param {MouseEvent} event
     */
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
