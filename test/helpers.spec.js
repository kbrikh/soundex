const { diacritical, exclude } = require('../src/code-fr.json');
const helper = require('../src/helpers');

describe('Module: Helpers', () => {
    describe('generateSoundex fn', () => {
        it('should return the right segment', () => {
            const long = 4;
            const str = ['K', 'M', 'L', 'B', 'R'];

            expect(helper.generateSoundex(long, str)).toEqual('KMLBR');
        });

        it('should complete with zero when length is too short', () => {
            const long = 4;
            const str = ['K', 'M', 'L'];

            expect(helper.generateSoundex(long, str)).toEqual('KML00');
        });

        it('should return NULL when the string is EMPTY', () => {
            const long = 4;
            const str = [];

            expect(helper.generateSoundex(long, str)).toEqual(null);
        });
    });

    describe('encodeSoundex fn', () => {
        it('should return a converted string according to pattern', () => {
            const arr = ['A', 'B', 'C'];
            const code = {
                A: 1, B: 2, C: 3, D: 4,
            };

            expect(helper.encodeSoundex(arr, code)).toEqual(['A', 2, 3]);
        });
    });

    describe('cleanStringArr fn', () => {
        it('should remove NON alphabetical characters', () => {
            const str = ['@', 'K', '1', 'm', 'L', ' ', '/'];

            expect(helper.cleanStringArr(str)).toEqual(['K', 'M', 'L']);
        });
    });

    describe('excludeUnusedChar fn', () => {
        it('should remove unused char according to list provided', () => {
            const strArr = ['K', 'E', 'B', 'O'];
            expect(helper.excludeUnusedChar(strArr, exclude)).toEqual(['K', 'B']);
        });

        it('should remove unused char according to list provided BUT NOT THE FIRST ONE', () => {
            const strArr = ['E', 'I', 'B', 'O'];
            expect(helper.excludeUnusedChar(strArr, exclude)).toEqual(['E', 'B']);
        });
    });

    describe('substituteAccent fn', () => {
        it('should replace accent char', () => {
            const str = ['é', 'K', 'à', 'M'];
            helper.normalizeDiacriticalChar(str, diacritical);
            expect(str).toEqual(['E', 'K', 'A', 'M']);
        });
    });
});
