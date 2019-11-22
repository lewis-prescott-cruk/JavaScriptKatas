export function romanToNumber(romanNumber) {
    let number;
    if (romanNumber == "IV") {
        return 5 - 1;
    };
    if (romanNumber == "V") {
        return 5;
    };

    if (romanNumber == "X") {
        return 10;
    };

    if (romanNumber == "IX") {
        return 10 - 1;
    };
    if (romanNumber.includes("I")) {
        // return  romanNumber.split("I").length-1;
        number = romanNumber.split("I").length - 1;
        /*  console.log(number)
         return number;   */
        //
    };

    if (romanNumber.startsWith("V") && (romanNumber.split("I").length - 1) > 0) {
        const countOfI = romanNumber.split("I").length - 1;
        switch (countOfI) {
            case 1:
                return 5 + 1;
            case 2:
                return 5 + 2;
            case 3:
                return 5 + 3;
        };
    };

    if (romanNumber.startsWith("X") && (romanNumber.split("I").length - 1) > 0) {
        const countOfI = romanNumber.split("I").length - 1;
        switch (countOfI) {
            case 1:
                return 10 + 1;
            case 2:
                return 10 + 2;
            case 3:
                return 10 + 3;
            
        };
    };

   /* if (romanNumber.startsWith("X") ){
        if ((romanNumber.substring(1, 2) == "V") && romanNumber.length == 2) {
             return 15;
        }
    };*/

    if (romanNumber.startsWith("X") && romanNumber.endsWith("V")){
    const countOfI=romanNumber.split("").length ;
    switch(countOfI)
    {
        case 2:
            return 15;
            case 3:
                return 14;
    }
    };
    return number;
}
