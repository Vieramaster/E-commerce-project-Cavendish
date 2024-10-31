/** Clothes array.
 * @typedef {object} ClothesColor
 * @property {string} nameColor
 * @property {string} hex
 * @property {string[]} imagesColor
 */

/**
 * @typedef  ClothesObject
 * @property {string} idProduct
 * @property {string} name
 * @property {string} description
 * @property {string} category
 * @property {number} price
 * @property {number} realPrice
 * @property {boolean} discount
 *  * @property {boolean} newArrival
 * @property {boolean} outlet
 * @property {ClothesColor[]} colors
 * 

 */
/**
 * @typedef ClothesCategory
 * @property {ClothesObject[]} jackets_and_coats
 * @property {ClothesObject[]} pants
 * @property {ClothesObject[]} polos_and_t_shirts
 * @property {ClothesObject[]} shirts
 * @property {ClothesObject[]} sweaters
 * @property {ClothesObject[]} sweatshirts_and_hoodies
 * @property {ClothesObject[]} best_sellers
 */

/** ArrowCards
 * @typedef {Object} ArrowsFunctionProps
 * @property {number} index
 * @property {string[]} array
 * @returns {number}
 */

/**
 * @typedef {'jackets_and_coats' | 'pants' | 'polos_and_t_shirts' | 'shirts' | 'sweaters' | 'sweatshirts_and_hoodies' | 'best_sellers'} CategoryKey
 */

/** ArrowCards
 * @typedef {Function}  sliceCardFunction
 * @property {number} prevNumber
 * @property {number} newNumber
 * @property {ClothesObject[]} array
 * @returns {ClothesObject[]}
 */
/**
 * 
 * @typedef {Object} FilterFunction
 * @property {ClothesObject[]} data 
 * @property {React.Dispatch<React.SetStateAction<ClothesObject[]>>} setState
 */
