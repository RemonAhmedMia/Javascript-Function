// return হলো function-এর ভেতর থেকে একটা ফলাফল (value) বাইরে পাঠানোর পদ্ধতি।

// তুমি function-এর কাজ শেষ করে, ওই কাজের ফলাফলটা function-এর বাইরে ফেরত (return) দিতে চাও — তখনই return ব্যবহার করো।

// উদাহরণ ১: return ছাড়া

function add(a, b) {
  console.log(a + b);
}

add(5, 3); // Output: 8
//  এটা শুধু ফলাফল দেখায় (print করে)
// তুমি এই মানটা আর কোথাও ব্যবহার করতে পারো না (store করা যায় না);

//  উদাহরণ ২: return সহ==========

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8

// **এখানে a + b value return করেছে
// **তুমি result variable এ ধরে রেখেছো
// **এখন তুমি এই value দিয়ে আরও কিছু করতে পারো

function tenTimes(output) {
    const result = output * 10;
    return result;
}
tenTimes(5);

// শুধু tenTimes(5) কল করলে কিছু দেখাবে না, কারণ তুমি console.log() করো নাই বা result ধরো নাই।

const show = tenTimes(5);
console.log(show); //call korar por return korle seta k ekta variable e rakhte hobe
