/** @param {ClothesObject[]} data @param {React.Dispatch<React.SetStateAction<ClothesObject[]>>} setState @param {boolean} ascending */
export const alphabeticFilter = (data, setState, ascending) => {
  const sorted = [...data].sort((a, b) =>
    ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
  setState(sorted);
};

/** @param {ClothesObject[]} data @param {React.Dispatch<React.SetStateAction<ClothesObject[]>>} setState @param {boolean} ascending */
export const priceFilter = (data, setState, ascending) => {
  const sorted = [...data].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
  setState(sorted);
};
