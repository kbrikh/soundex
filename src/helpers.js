/**
 * Provide basics methods to generate the SOUNDEX code
 *
 * @date 01/11/2020
 * @class Helper
 */
class Helper {
    /**
     * Generate the SOUNDEX
     *
     * @date 31/10/2020
     * @param {number} long numbre of digits
     * @param {string[]} cleanedStr Array of characters to use to generate the Soundex
     * @returns {string}
     */
    generateSoundex(long, cleanedStr) {
        let soundex = '';

        if (cleanedStr.length <= 0) {
            return null;
        }

        for (let index = 0; index <= long; index += 1) {
            if (index === 0 || index === 1) {
                soundex += cleanedStr[index];
            } else if (index > cleanedStr.length - 1) {
                soundex += 0;
            } else if (cleanedStr[index] !== cleanedStr[index - 1]) {
                soundex += cleanedStr[index];
            }
        }
        return soundex;
    }

    /**
     * Encode each character except the first according to the correlation table
     *
     * @date 01/11/2020
     * @param {string[]} arr array of characters to be encoded
     * @param {object} code correlation object
     * @returns {string[]} An endoded array
     * @memberof Helper
     */
    encodeSoundex(arr, code) {
        return arr.map((elm, index) => ((index > 0) ? code[elm] : elm));
    }

    /**
     * remove non alphabetical charaters
     *
     * @date 01/11/2020
     * @param {string[]} strArr Array of characters
     * @returns {string[]} Array of uppercase alphabecical characters
     * @memberof Helper
     */
    cleanStringArr(strArr) {
        return strArr.filter((elm) => {
            if (elm.match(/[a-zA-Z]/gi) !== null) {
                return elm;
            }
        }).map((element) => element.toUpperCase());
    }

    /**
     * Remove all unused characters for the soundex calculus
     *
     * @date 01/11/2020
     * @param {string[]} strArr An array of characters
     * @param {string[]} unusedChar Array of characters to exclude from the soundex calculus
     * @returns {string[]} Array of characters to generate the SOUNDEX
     * @memberof Helper
     */
    excludeUnusedChar(strArr, unusedChar) {
        return strArr.filter((elm, index) => {
            if (index !== 0) {
                if (unusedChar.indexOf(elm) === -1) {
                    return elm;
                }
            } else {
                return elm;
            }
        });
    }

    /**
     * Convert any diacritical characters to it's equivalent
     *
     * @date 01/11/2020
     * @param {string[]} strArr Array of characters
     * @param {object} spec Object of diacritacal correlation
     * @memberof Helper
     */
    normalizeDiacriticalChar(strArr, spec) {
        strArr.forEach((elm, index) => {
            if (elm in spec && Object.prototype.hasOwnProperty.call(spec, elm)) {
                strArr.splice(index, 1, spec[elm]);
            }
        });
    }
}

module.exports = new Helper();
