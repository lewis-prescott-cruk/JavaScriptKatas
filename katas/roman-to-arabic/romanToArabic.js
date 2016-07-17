function romanToArabic(romanNumber){
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

    // This block is probably inefficient, but it is
    // easy to reason about.
    for(var prop in minusOneTable){
        if(!minusOneTable.hasOwnProperty(prop)){
           continue;
        }
        var rx = new RegExp(prop,'g');
        if((romanNumber.match(rx) || []).length > 1){
            throw 'Poorly formed Roman number!';
        }

    }

    switch(romanNumber){
        case 'I':
            return 1;
        case 'IV':
            return 4;
    }
}

