const LF = /\n/g;

/**
 * Checks string, if there is spaces in new lines, it removes it.
 *
 * @param {string} [str=""]
 * @param {RegExp} reg
 * @param {RegExp} [expression=""]
 * @returns {string} - modified replaced with expression
 */
function replaceWith(str = "", reg, expression = "") {
  return reg.test(str) ? str.replace(reg, expression) : str;
}

/**
 * Replaces \r or \r\n with \n. Which enables us to deal with unique new line
 * character.
 *
 * Note:
 * \r = CR (Carriage Return) → Used as a new line character in Mac OS before X
 * \n = LF (Line Feed) → Used as a new line character in Unix/Mac OS X
 * \r\n = CR + LF → Used as a new line character in Windows
 *
 * @see {https://stackoverflow.com/a/15433225/6348157}
 * @param {string} [str=""]
 * @param {RegExp} [newLineExp=LF] -  LF new line.
 * @returns {string} modified with str with \n as new line
 */
function unifyNewLineChar(str, newLineExp = LF) {
  const reg = /\r|\r\n/g;

  return replaceWith(str, reg, newLineExp);
}

/**
 * Checks string, if there is spaces in new lines, it removes it.
 *
 * @param {string} [str=""]
 * @param {*} [newLineExp=LF] - LF new line.
 * @returns {string} modified with str with \n as new line
 */
function replaceSpacesFromStart(str, newLineExp = LF) {
  const reg = /\n\s+/g;

  return replaceWith(str, reg, newLineExp);
}

/**
 *
 * Splits each line of given string to array element.
 *
 * @param {string} str
 * @param {RegExp} [newLineExp=LF] - LF new line.
 * @returns
 */
function toArray(str, newLineExp = LF) {
  return str.split(newLineExp);
}

function getMatch(str = "", reg) {
  return str.match(reg) || [];
}

/**
 * Counts matching regex expression in a given string.
 *
 * @param {string} [str=""]
 * @param {RegExp} reg
 * @returns {number} of matched pattern.
 */
function countBasedOn(str = "", reg) {
  // console.log(str.match(reg) || []);
  return (str.match(reg) || []).length;
}

module.exports = {
  LF,
  replaceWith,
  unifyNewLineChar,
  replaceSpacesFromStart,
  toArray,
  getMatch,
  countBasedOn
};
