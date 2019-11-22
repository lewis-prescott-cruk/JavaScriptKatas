import { romanToNumber } from '../roman-to-number/romanToNumber';
const expect = require('chai').expect;

describe('Roman To Number', () => {
    describe('Roman Numerals I - III', () => {
        it('should return 1 for I', () => {
            expect(romanToNumber('I')).to.equal(1);
        });
        it('should return 2 for II', () => {
            expect(romanToNumber('II')).to.equal(2);
        });
        it('should return 3 for III', () => {
            expect(romanToNumber('III')).to.equal(3);
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
    describe('Roman Numerals IX - XI', () => {
        it('should return 9 for IX', () => {
            expect(romanToNumber('IX')).to.equal(9);
        });
        it('should return 10 for X', () => {
            expect(romanToNumber('X')).to.equal(10);
        });
        it('should return 11 for XI', () => {
            expect(romanToNumber('XI')).to.equal(11);
        });
       
    });
    describe('Roman Numerals XIV', () => {
        it('should return 14 for XIV', () => {
            expect(romanToNumber('XIV')).to.equal(14);
        });

        it('should return 15 for XV', () => {
            expect(romanToNumber('XV')).to.equal(15);
        });
       
        
    });


});
