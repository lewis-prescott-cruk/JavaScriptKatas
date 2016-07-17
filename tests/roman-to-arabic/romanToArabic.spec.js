
describe('tests/roman-to-arabic/RomanToArabic.spec.js',function(){
    var returnValue;
    var minusOneTable = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    describe('When I is passed in',function(){
        beforeEach(function(){
            returnValue = romanToArabic('I');
        });
        it('should return 1',function(){
            expect(returnValue).toBe(1);
        });
    });
    describe('When IV is passed in', function(){
        beforeEach(function(){
            returnValue = romanToArabic('IV');
        });
        it('should return 4',function(){
            expect(returnValue).toBe(4);
        });
    });
    for(var prop in minusOneTable){
        if(!minusOneTable.hasOwnProperty(prop)){
            continue;
        }
        describe('When ' + prop + prop + ' is added',(function(propCopy){
            it('should throw an exception',function(){
                expect(function(){romanToArabic(propCopy+propCopy)}).toThrow();
            });
        }).bind(this,prop));
    }
});
