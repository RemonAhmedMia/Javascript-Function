function add(price1 , price2) {
    const total = price1 + price2 ;
    return total;
}

const bill = add(30, 80);
console.log(bill);

// Return Shortcut=============

function add2(price1 , price2) {
    return price1 + price2;
}

const bill2 = add2(5,5);
console.log(bill2);


// DO SOME MATH================

function doMath(num1 , num2) {
    let sum = num1 + num2 ;
    let sub = num1 - num2 ;
    let diff = sum * sub ;
    let finalResult = diff / 2 ;
    return  finalResult
}
const finalResult = doMath(10, 5);
console.log(finalResult);
