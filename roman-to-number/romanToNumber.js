function countI(romanNumber) {
    return romanNumber.split("I").length - 1;
}

export function romanToNumber(romanNumber) {
    let number;
    if (romanNumber.includes("I")) {
        number = countI(romanNumber);
    };
    if (romanNumber == "IV") {
        return 4;
    };
    if (romanNumber == "V") {
        return 5;
    };
    if (romanNumber.includes("V") &&  !romanNumber.includes("X") && countI(romanNumber) > 0) {
        const countOfI = countI(romanNumber);
        return 5 + countOfI;
    };
    if (romanNumber == "IX") {
        return 9;
    };
    if (romanNumber == "X") {
        return 10;
    };
    if (romanNumber.includes("X") && !romanNumber.includes("V") && countI(romanNumber) > 0) {
        const countOfI = countI(romanNumber);
        return 10 + countOfI;
    };
    if (romanNumber.includes("V") && romanNumber.includes("X") && romanNumber.includes("I")) {
        const listOfI = romanNumber.split("I");
        return listOfI[1] != "V" ? 15 + countI(romanNumber) : 14;
    };
    if (romanNumber.includes("V") && romanNumber.includes("X")) {
        return 15;
    };
    return number;
}
