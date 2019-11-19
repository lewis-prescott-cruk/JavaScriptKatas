export function romanToNumber(romanNumber) {
    let number;
    if (romanNumber.includes("I")) {
        number = romanNumber.split("I").length - 1;
    };
    if (romanNumber == "IV") {
        return 5 - 1;
    };
    if (romanNumber == "V") {
        return 5;
    };
    if (romanNumber.includes("V") && (romanNumber.split("I").length - 1) > 0) {
        const countOfI = romanNumber.split("I").length - 1;
        switch(countOfI) {
            case 1:
                return 5 + 1;
            case 2:
                return 5 + 2;
            case 3:
                return 5 + 3;
        };
    };
    return number;
}
