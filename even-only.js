function evenNumberonly(numbers){
    const even = [];
//     এখানে তুমি একটি খালি array বানালে যার নাম even
// এটাতে পরে আমরা শুধু even number গুলো রাখবো
    for(const math of numbers){
        if (math % 2 ===0) {
            console.log(math);
            // console.log(math);  ওই number টাকে console এ দেখাও
            even.push(math); // even array-তে ওই সংখ্যা যোগ করো
        }
    }
    return even
}
const numberOne = [12,23,34,54];
const evens = evenNumberonly(numberOne);
console.log(evens);


// +++++++++++++++odd number

function oddNumberonly(numbers){
    const odd = [];
    for(const math of numbers){
        if (math % 2 === 1) {
            console.log(math);
            odd.push(math);
        }
    }
    return odd
}
const numberOTwo = [12,23,43,34,54,13];
const rimo = oddNumberonly(numberOTwo);
console.log(rimo);