function romanToArabic(romanNumber){
    var poorlyFormedNumber = 'Poorly formed Roman number';
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
    var minusOneSub = {
        IV: 'v',
        IX: 'x',
        XL: 'l',
        XC: 'c',
        CD: 'd',
        CM: 'm'
    };
    var compositeValueTable = {
        I: 1,
        v: 4,
        V: 5,
        x: 9,
        X: 10,
        l: 40,
        L: 50,
        c: 90,
        C: 100,
        d: 400,
        D: 500,
        m: 900,
        M: 1000
    };

    // This block is probably inefficient, but it is
    // easy to reason about.
    var prop;
    var rx;

    // make sure first character isn't also the last character. (IVI for example)
    var rxString = '(';
    for(prop in minusOneTable){
        if(!minusOneTable.hasOwnProperty(prop)){
            continue;
        }
        rxString += prop + prop.substr(0,1) + '|';
    }

    // make sure only I, V, X, L, C and D are the only characters that show up
    var included = '';
    for(prop in baseTable){
        if(!baseTable.hasOwnProperty(prop)){
            continue;
        }
        included += prop;
    }
    rxString += '[^' + included + ']|';

    // make sure digits only show up 3 times
    rxString += '(.)\\2{3,})'; // 3 because we already captured the first

    rx = new RegExp(rxString,'g');
    if((romanNumber.match(rx) || []).length > 0){
        throw poorlyFormedNumber;
    }

    // substitute the minusOnes with tokens we can use to compute value.
    for(prop in minusOneTable){
        if(!minusOneTable.hasOwnProperty(prop)){
            continue;
        }
        rx = new RegExp(prop,'g');
        romanNumber = romanNumber.replace(rx,minusOneSub[prop]);
    }

    var romanNumberArray = romanNumber.split('');
    var returnValue = 0;
    var lastValue = 0;
    var currentValue = 0;
    for(var numberIndex = 0;numberIndex < romanNumberArray.length;numberIndex++){
        currentValue = compositeValueTable[romanNumberArray[numberIndex]];
        returnValue += currentValue;
        if(numberIndex > 0 && currentValue > lastValue){
            throw poorlyFormedNumber;
        }
        lastValue = currentValue;
    }
    return returnValue;

}

