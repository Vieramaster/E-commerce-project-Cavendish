/**@param {React.Dispatch<React.SetStateAction<number[]>>} setState */
export const NextImageCard = (setState) => {
  setState((prevState) =>
    prevState[0] < 66.6 && prevState[1] < 2
      ? [prevState[0] + 33.3, prevState[1] + 1]
      : prevState
  );
};
/**@param {React.Dispatch<React.SetStateAction<number[]>>} setState */
export const PreviousImageCard = (setState) => {
  setState((prevState) =>
    prevState[0] !== 0 && prevState[1] !== 0
      ? [prevState[0] - 33.3, prevState[1] - 1]
      : prevState
  );
};
