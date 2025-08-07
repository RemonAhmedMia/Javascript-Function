function sumOfOperation(numbers) {
    let sum = 0;
    for(const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum
}
const numbs = [12,52,33,90];
const sumJug = sumOfOperation(numbs);
console.log(sumJug);


// =========================

function sumOfOperation(numbers) {
    let add = 0; // ✅ add variable initialize
    for (const number of numbers) {
        console.log(number);
        add = add + number;
    }
    return add; // ✅ return result
}

const nums = [120, 152, 35, 90];
const sumAdd = sumOfOperation(nums);
console.log("Total sum is:", sumAdd); // Output: Total sum is: 187
