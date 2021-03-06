import { capitalize as _capitalize } from 'lodash'
import { convert } from 'immutadot'

/**
 * Converts the first character of string to upper case and the remaining to lower case.
 * @function
 * @memberof string
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @return {Object} Returns the updated object.
 * @example capitalize({ nested: { a: "a string" } }, 'nested.a') // => { nested: { a: "A string" } }
 * @see {@link https://lodash.com/docs#capitalize|lodash.capitalize} for more information.
 * @since 1.0.0
 */
const capitalize = convert(_capitalize)
export { capitalize }
