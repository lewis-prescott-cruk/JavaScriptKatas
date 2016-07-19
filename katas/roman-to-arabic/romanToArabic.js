function romanToArabic(romanNumber){
    var poorlyFormedNumber = 'Poorly formed Roman number';
    var baseTable = {
        I: 1,
        IV: 'v',
        V: 5,
        IX: 'x',
        X: 10,
        XL: 'l',
        L: 50,
        XC: 'c',
        C: 100,
        CD: 'd',
        D: 500,
        CM: 'm',
        M: 1000
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


    // make sure only I, V, X, L, C and D are the only characters that show up
    var included = '';
    // make sure first character isn't also the last character. (IVI for example)
    var rxString = '(';
    // replace two 'digit' Roman with one 'digit' token
    var romanNumberTokens = romanNumber;
    for(prop in baseTable){
        if(!baseTable.hasOwnProperty(prop)){
            continue;
        }
        if(prop.length === 2){
            rxString += prop + prop.substr(0,1) + '|';
            rx = new RegExp(prop,'g');
            romanNumberTokens = romanNumberTokens.replace(rx,baseTable[prop]);        }
        else {
            included += prop;
        }
    }


    rxString += '[^' + included + ']|';

    // make sure digits only show up 3 times
    rxString += '(.)\\2{3,})'; // 3 because we already captured the first

    rx = new RegExp(rxString,'g');
    if((romanNumber.match(rx) || []).length > 0){
        throw poorlyFormedNumber;
    }

    var romanNumberArray = romanNumberTokens.split('');
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

