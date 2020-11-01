const { exclude, code, diacritical } = require('./code-fr');
const helper = require('./helpers');

/**
 * Generate a SOUNDEX code for the word provided and with an expected digit
 * @param {string} str Word to be converted to SOUNDEX
 * @param {number} digit Number of digit to be used after the first letter
*/
function soundex(str, digit = 4) {
    const long = (digit < 3) ? 3 : digit;

    if (!str) {
        return null;
    }

    const strArr = Array.from(str);
    helper.normalizeDiacriticalChar(strArr, diacritical);

    if (strArr[0].match(/[^a-zA-Z]/)) {
        return null;
    }

    let cleanedStr = helper.excludeUnusedChar(helper.cleanStringArr(strArr), exclude);
    cleanedStr = helper.encodeSoundex(cleanedStr, code);

    return helper.generateSoundex(long, cleanedStr);
}

module.exports = soundex;
