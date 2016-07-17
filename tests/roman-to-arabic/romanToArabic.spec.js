
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
    var baseTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
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
    var prop;
    for(prop in minusOneTable){
        if(!minusOneTable.hasOwnProperty(prop)){
            continue;
        }
        describe('When ' + prop + prop + ' is added',(function(propCopy){
            it('should throw an exception',function(){
                expect(function(){romanToArabic(propCopy+propCopy)}).toThrow();
            });
        }).bind(this,prop));
    }
    for(prop in minusOneTable){
        if(!minusOneTable.hasOwnProperty(prop)){
            continue;
        }
        describe('When ' + prop + 'I' + prop + ' is added',(function(propCopy){
            it('should throw an exception',function(){
                expect(function(){romanToArabic(propCopy + 'I' + propCopy)}).toThrow();
            });
        }).bind(this,prop));
    }
    for(prop in baseTable){
        if(!baseTable.hasOwnProperty(prop)){
            continue;
        }
        describe('When ' + prop + prop + prop + prop + ' is added',(function(propCopy){
            it('should throw an exception',function(){
                expect(function(){romanToArabic(propCopy+propCopy+propCopy+propCopy)}).toThrow();
            });
        }).bind(this,prop));
    }
});
