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
 * @property {string} selectSize
 * @property {number} quantityClothes

 */

/**
 * @typedef {Object} SearchList
 * @property {string} name
 * @property {number} idProduct
 */

/**
 * @typedef {Object[]} payButtonlist
 * @property { "shopPay" | "paypal" | "googlePay"} name
 * @property {React.FC} Component
 */

/**
 * @typedef {Object} paymentFormData
 * @property {string} country
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} address
 * @property {string} apartament
 * @property {string} city
 * @property {string} postalCode
 * @property {string} phone
 * @property {string} cardNumber
 * @property {string} expirationDay
 * @property {string} expirationYear
 * @property {string} securityCode
 * @property {string} nameOnCard
 */
/**
 * @param {Object} props
 * @param {Object} props.formData
 * @param {string} props.formData.country
 * @param {string} props.formData.firstName
 * @param {string} props.formData.lastName
 * @param {string} props.formData.address
 * @param {string} props.formData.apartament
 * @param {string} props.formData.city
 * @param {string} props.formData.postalCode
 * @param {string} props.formData.phone
 * @param {Function} props.handleInputChange
 * @returns {JSX.Element}
 */

/**
 * @typedef {object} source
 * @property {string} id
 * @property {string} name
 */
/**
 * @typedef {object} news
 * @property {string} author
 * @property {string} content
 * @property {string} description
 * @property {string} publishedAt
 * @property {string} title
 * @property {string} url
 * @property {string} urlToImage
 * @property {object} source
 */
/**
 * @typedef {object} TdText
 * @property {string} country
 * @property {string} DeliveryMethod
 * @property {string} cost
 * @property {string} DeliveryTimes
 */

/**
 * @typedef {object} DeliveryTableItem
 * @property {string[]} thTitles
 * @property {TdText[]} tdText
 */

