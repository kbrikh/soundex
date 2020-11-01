const soundex = require('../src/soundex');

describe('Module: Soundex', () => {
    it('should return null when string is null or undefined', () => {
        expect(soundex()).toEqual(null);
        expect(soundex(null)).toEqual(null);
        expect(soundex(undefined)).toEqual(null);
    });

    it('should NOT take into account non alphabetical char', () => {
        expect(soundex('Kamel1 ')).toEqual('K5400');
    });

    it('should return null when the word begins with a non alphabetical char', () => {
        expect(soundex('2Kamel ')).toEqual(null);
    });
});
