function myFunction() {
    console.log("Welcome To our First Function");
}
myFunction(); //Ei Function name jotokkhn na call kortesi totokkhn function kaj korbe na;

// Parameeter And Argument:
// **Parameter হলো function declare করার সময় যেটা তুমি নাম দাও।
// **Argument হলো সেই value (মান) যেটা তুমি function call করার সময় পাঠাও।

// Parameter হলো placeholder name
// Argument হলো actual value

function greet(name) {
  console.log("Hello" + " " + name);
}

greet("Sania");
// এখানে name → Parameter
// এখানে "Sania" → Argument

function add(num1,num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(4,7) //Output:11;
add(120,400) //520

function creative(name1 , name2, name3 , age1, age2 , age3){
    console.log(name1 + " " + "Onek valo Teacher tar boyos" + " " + age1 );
    console.log(name2 + " " + "Se tar student tar boyos"+ " " + age2);
    console.log(name3 + " " + "Er best friend" + " " + name1 + "," + " " + name3 + " " + "Er boyos" + " " + age3);
}
creative("Al-Amin" , "Rimon" , "Shakib" , 30 , 23 , 25);

console.log("Creative it Onek Vlo");
creative("Kutta" , "Biral" , "Chagol" , 30 , 23 , 25);