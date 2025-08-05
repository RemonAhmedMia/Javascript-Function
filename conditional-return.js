// কোনো শর্ত (condition) অনুযায়ী return করা মানেই conditional return।

// তুমি যদি বলো:

// “age ১৮ বা তার বেশি হলে বলো ‘Adult’, না হলে বলো ‘Not adult’”
//  এটাই একটা conditional return.



function isEven(age) {
    if (age % 2 === 0) {
        return true;
    } else{
        return false;
    }
}
console.log(isEven(5)); // Output: false
console.log(isEven(110)); // Output: True

// ======================

function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Not adult";
  }
}

console.log(checkAge(20)); // Output: Adult
console.log(checkAge(14)); // Output: Not adult


// Shortcut: Ternary Operator দিয়ে Conditional Return;

function checkAge(age) {
  return age >= 18 ? "Adult" : "Not adult";
}
