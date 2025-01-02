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

/**  calculate the percentage between realprice and price
 * @param {number} numb1 @param {number} numb2 @returns {number}
 * */

export const usePercentage = (numb1, numb2) => {
  const diff = Math.abs(numb1 - numb2);
  const prom = (numb1 + numb2) / 2;
  return Math.floor((diff / prom) * 100);
};
