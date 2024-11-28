/** Clothes array.
 * @typedef {object} ClothesColor
 * @property {string} colorName
 * @property {string} hex
 * @property {string[]} imagesColor
 * @property {Object<string, number>} sizes
 */

/**
 * @typedef  ClothesObject
 * @property {number} idProduct
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
 * @typedef {object} Color
 * @property {string} name
 * @property {string} hex
 */

/** @typedef { [Object<string,boolean>, Color[], string[]] } ProductAttributes*/

/**
 * @typedef {Object} ExtendFilters
 * @property {string[]} size
 * @property {string[]} color
 * @property {string[]} type
 */

/**
 * @typedef {Object} Filters
 * @property {() => void} title_ascending
 * @property {() => void} title_descending
 * @property {() => void} price_ascending
 * @property {() => void} price_descending
 * @property {() => void} default
 */

/**
 * @typedef {"title_ascending" | "title_descending" | "price_ascending" | "price_descending" | "default"} FiltersString
 */

/**
 * @typedef {Object} CartProduct
 * @property {number} price
 * @property {number} idProduct
 * @property {string} name
 * @property {ClothesColor} colorChoise
 * @property {string} selectedSize
 * @property {number} amount

 */
