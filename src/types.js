/** Clothes array.
 * @typedef {object} ClothesColor
 * @property {string} colorName
 * @property {string} hex
 * @property {string[]} imagesColor
 * @property {Object<string, number>} sizes
 */

/**
 * @typedef  ClothesObject
 * @property {string} idProduct
 * @property {string} name
 * @property {string} description
 * @property {string} category
 * @property {string} clothes
 * @property {number} price
 * @property {number} realPrice
 * @property {boolean} discount
 * @property {boolean} newArrival
 * @property {boolean} outlet
 * @property {ClothesColor[]} colors
 * 



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

/**
 *
 * @typedef {object} Sizes
 * @property {boolean} s
 * @property {boolean} m
 * @property {boolean} l
 * @property {boolean} xl
 * @property {boolean} xxl
 */

/**
 * Objeto que representa un color.
 * @typedef {object} Color
 * @property {string} name
 * @property {string} hex
 */

/**  @typedef {string[]} ClothingTypes*/

/** @typedef { [Sizes, Color[], ClothingTypes] } ProductAttributes*/
