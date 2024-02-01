// VARIABLES
// es5(old)-var
// es6(new)-let

// function abcd(){
//     for(var i=1;i<=11;i++){
//        console.log(i)
//     }
//     console.log(i);
// }
// abcd();

// function abcde(){
//     for(let i=1;i<=11;i++){
//        console.log(i)
//     }
//     console.log(i);
// }
// abcde();

// var a=10; window object me joined
// let b=10; window object me no joined 
// ---------------------------------------

// CONSTANTS
// const a=10;
// let b=10;
  
// Types in JS
// primitive
// let a=10;
// let b=a;
// b+=2;

// Reference
// []{}()
// let a=[1,2,3,4,5];
// let b=a;
// b.pop();
// a.pop();
// a.push(22)

// If else
// if(" "){
//     console.log("truthy");
// }
// Else-if to make more conditions
// 12>3?console.log(""):console.log("");


// ||
// 12>3||null  ---> return true kyoki 12>3 agar yeh fasle hoto toh null ataa
// ""||"paise" ---> return paise kyoki phela condition faslsy haiii


// user se number mang ke agar number 10 se upar ho toh print Hello nahitoh Hey     #problem1 
// let number=prompt("enter any number:")
// number>10?console.log("hello"):console.log("hey") 

// user se number maango and usem 10 add karo and add karne pey 20 sey jaadaa hoh toh bolu Hello nahi toh Hey
// #problem2
// let number=prompt("enter a number:");
// let newnum=Number(number)+10;
// number>20?console.log("hello"):console.log("Hey");

// user se number maango do baar and dono ko add karo and agar dusre number ki aakhri digit us added number se choti hai to print karo hello
// #problem3
// let number1 =Number(prompt("enter number1")); 
// let number2 =Number(prompt("enter number2"));  
// let add=number1+number2;
// number2%10<add?console.log("hello"):null;

// user se do password maango and agr match kare toh login karo nahitohh reject
// 3problem4
// let pass1=prompt("enter pass1:");
// let pass2=prompt("enter pass2:");
// pass1===pass2?console.log("Login"):console.log("Nahi allow");

//user se number maango and check karo ki woh even hai yaa odd
// #problem5 
// let num=Number(prompt("enter Number:"));
// num%2===0?console.log("Even"):console.log("Odd");

// let num =Number(prompt("enter number:"))
// if(num<100 && num >85){
//     console.log("Grade A")
// }
// else if(num<84 && num >=60){
//     console.log("Grade b")
// }
// else if(num<59 && num >45){
//     console.log("Grade c")
// }
// else if(num<44 && num >35){
//     console.log("Grade D-")
// }
// else{
//    console.log("fail");
// }

