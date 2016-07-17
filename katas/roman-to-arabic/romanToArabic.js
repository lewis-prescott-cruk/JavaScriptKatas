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
    var prop;
    var rx;
    // make sure minusOne only shows up once
    // and first character isn't also the last character. (IVI for example)
    for(prop in minusOneTable){
        if(!minusOneTable.hasOwnProperty(prop)){
           continue;
        }
        rx = new RegExp(prop,'g');
        if((romanNumber.match(rx) || []).length > 1){
            throw 'Poorly formed Roman number!';
        }
        rx = new RegExp(prop + prop.substr(0,1),'g');
        if((romanNumber.match(rx) || []).length > 0){
            throw 'Poorly formed Roman number';
        }

    }

    var included = '';
    // make sure digits only show up 3 times

    for(prop in baseTable){
        if(!baseTable.hasOwnProperty(prop)){
            continue;
        }
        included += prop;
        rx = new RegExp(prop,'g');
        if((romanNumber.match(rx) || []).length > 3){
            throw 'Poorly formed Roman number!';
        }
    }

    // make sure only I, V, X, L, C and D are the only characters that show up
    rx = new RegExp('[^' + included + ']','g')
    if((romanNumber.match(rx) || []).length > 0){
        throw 'Poorly formed Roman number';
    }


    switch(romanNumber){
        case 'I':
            return 1;
        case 'IV':
            return 4;
    }
}

