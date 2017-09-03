import _toLower from 'lodash/toLower'
import { convert } from 'util/convert'

/**
 * Converts string, as a whole, to lower case just like String#toLowerCase.
 * @function
 * @memberof object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @return {Object} Returns the updated object.
 * @example toLower({ nested: { a: "A STRING" } }, 'nested.a') // => { nested: { a: "a string" } }
 * @see {@link https://lodash.com/docs#toLower|lodash.toLower} for more information.
 * @see {@link https://mdn.io/String/toLowerCase|String.toLowerCase} for more information.
 * @since 0.3.0
 */
const toLower = convert(_toLower)
export { toLower, toLower as default }