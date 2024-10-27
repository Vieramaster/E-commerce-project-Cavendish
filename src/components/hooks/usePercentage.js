/**  calculate the percentage between realprice and price
 * @param {number} numb1 @param {number} numb2
 * @returns {number}
 * */

export const usePercentage = (numb1, numb2) => {
  const diff = Math.abs(numb1 - numb2);
  const prom = (numb1 + numb2) / 2;
  return Math.floor((diff / prom) * 100);
};
