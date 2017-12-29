/**
 * all is in the name
 * @method capitalizeFirstLetter
 * @param  {string} string the string to capitalize
 * @return {string} the capitalized string
 */
const capitalizeFirstLetter = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`

module.exports = capitalizeFirstLetter
