import "../types";

/** @param {CartProduct[]} array */
export const totalProducts = (array) => {
  return array.reduce((acc, { quantityClothes }) => acc + quantityClothes, 0);
};
/**@param {CartProduct[]}  array  @return {number}*/
export const totalPrice = (array) => {
  return array.reduce(
    (/** @type {number} */ acc, /** @type {CartProduct} */ item) =>
      acc + (item.price * item.quantityClothes || 0),
    0
  );
};

/**@param {number} a @param {number} b */
export const totalPriceItem = (a, b) => {
  return a * b;
};
