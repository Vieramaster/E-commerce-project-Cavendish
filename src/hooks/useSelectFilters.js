/** @param {ClothesObject[]} data  @param {boolean} ascending */
export const alphabeticFilter = (data, ascending) => {
  return data.toSorted((a, b) =>
    ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
};

/** @param {ClothesObject[]} data @param {boolean} ascending */
export const priceFilter = (data, ascending) => {
  return data.toSorted((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
};
/** @param {ClothesObject[]} data*/
export const defaultFilter = (data) => {
  return data.toSorted((a, b) => a.idProduct - b.idProduct);
};

/**@param {ClothesObject[]} array  @return {Array<{name: string, hex: string}>}*/
export const colorFilter = (array) => {
  const uniqueMap = new Map();
  array.flatMap((element) =>
    element.colors.forEach((item) => {
      const key = `${item.colorName}-${item.hex}`;
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, { name: item.colorName, hex: item.hex });
      }
    })
  );

  return Array.from(uniqueMap.values());
};

/**@param {ClothesObject[]} array  @returns {Object<string, boolean>} */
export const sizesFilter = (array) => {
  /**@type {Object<string, boolean>} */
  const sizeAvailability = {};

  array.forEach((product) => {
    product.colors.forEach((color) => {
      Object.entries(color.sizes).forEach(([size, quantity]) => {
        if (!(size in sizeAvailability)) {
          sizeAvailability[size] = false;
        }
        if (quantity > 0) {
          sizeAvailability[size] = true;
        }
      });
    });
  });

  return sizeAvailability;
};

/**@param {ClothesObject[]} array @return {Array<string>} */
export const typeFilter = (array) => {
  return [...new Set(array.flatMap((element) => element.category))];
};

//name filters

/** @param {ClothesObject[]} data @param {string} valueSearch */
export const useProductFinder = (data, valueSearch) => {
  return data.filter((product) =>
    product.name?.toLowerCase().includes(valueSearch.toLowerCase())
  );
};
