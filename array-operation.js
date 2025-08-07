function sumOfOperation(numbers) {  //এখানে তুমি একটা function বানিয়েছো যার নাম sumOfOperation
// এটা একটা parameter নেয়: numbers, যা হলো একটা array of numbers
    let sum = 0;  //এখানে তুমি একটা variable বানালে যার নাম add,এটা শুরুতে 0, কারণ আমরা সব সংখ্যার যোগফল এখানেই জমা রাখবো
    for(const number of numbers) {
        console.log(number);
        sum = sum + number;

// প্রথমবার: number = 12, sum = 0 + 12 = 12

// দ্বিতীয়বার: number = 52, sum = 12 + 52 = 64

// তৃতীয়বার: number = 33, sum = 64 + 33 = 97

// চতুর্থবার: number = 90, sum = 97 + 90 = 187
    }
    return sum  // সব সংখ্যার যোগফল করার পর, তুমি sum variable টা return করো,অর্থাৎ এই function ব্যবহার করে যেই সংখ্যা গুলার array পাঠাবে, তার total sum ফেরত পাবে
}
const numbs = [12,52,33,90];
const sumJug = sumOfOperation(numbs);
console.log(sumJug);

//  তুমি numbs নামে একটা array বানিয়ে sumOfOperation() function-এ পাঠালে
//  সেটা হিসাব করে sumJug নামে variable এ ফলাফল রাখবে

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
