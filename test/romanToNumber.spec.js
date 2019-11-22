import { romanToNumber } from '../roman-to-number/romanToNumber';
const expect = require('chai').expect;

describe('Roman To Number', () => {
    describe('Roman Numerals I - III', () => {
        it('should return 1 for I', () => {
            expect(romanToNumber('I')).to.equal(1);
        });
    });
    describe('Roman Numerals IV - VIII', () => {
        it('should return 4 for IV', () => {
            expect(romanToNumber('IV')).to.equal(4);
        });
        it('should return 5 for V', () => {
            expect(romanToNumber('V')).to.equal(5);
        });
        it('should return 6 for VI', () => {
            expect(romanToNumber('VI')).to.equal(6);
        });
        it('should return 7 for VII', () => {
            expect(romanToNumber('VII')).to.equal(7);
        });
        it('should return 8 for VIII', () => {
            expect(romanToNumber('VIII')).to.equal(8);
        });
    });
    describe('Roman Numerals IX - XIII', () => {
        it('should return 9 for IX', () => {
            expect(romanToNumber('IX')).to.equal(9);
        });
        it('should return 10 for X', () => {
            expect(romanToNumber('X')).to.equal(10);
        });
        describe('Roman Numerals XI - XIII', () => {
            it('should return 11 for XI', () => {
                expect(romanToNumber('XI')).to.equal(11);
            });
        });
    });
    describe('Roman Numerals XIV - XVIII', () => {
        it('should return 14 for XIV', () => {
            expect(romanToNumber('XIV')).to.equal(14);
        });
        it('should return 15 for XV', () => {
            expect(romanToNumber('XV')).to.equal(15);
        });
        it('should return 16 for XVI', () => {
            expect(romanToNumber('XVI')).to.equal(16);
        });
        it('should return 17 for XVII', () => {
            expect(romanToNumber('XVII')).to.equal(17);
        });
    });
});
