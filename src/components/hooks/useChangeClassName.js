/**
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setState
 * @param {string} className
 * @param {React.RefObject<HTMLImageElement>} ref
 * @param {number} actionTime
 */
export const useChangeClassName = (setState, className, ref, actionTime) => {
  setState(true);
  if (ref.current) {
    ref.current.classList.add(className);
  }
  setTimeout(() => {
    setState(false);
    if (ref.current) {
      ref.current.classList.remove(className);
    }
  }, actionTime);
};
