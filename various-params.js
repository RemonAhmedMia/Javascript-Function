function evenSizeString(str) {
    const size = str.length;
    console.log(str ,size);
    if (size % 2 === 0) {
        console.log("Even Size");
    } else {
        console.log("Odd Size");
    }
}
evenSizeString("Dhaka");
evenSizeString("Faka");


// ==============++++++++++++++++

function doubleOrTripple(number , doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    } else {
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTripple(5 , true));
console.log(doubleOrTripple(5 , false));

// =======================================

function numberOfElement(numbers) {
    const lent = numbers.length;
    return lent;
}
const finalvalue =numberOfElement([12,34,988,3,5,7,9,39,98]);
console.log(finalvalue);
