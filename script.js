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

// computers ka purpose hai to kaam kanra bina galti ke in efficeint way matlab LOOPS
// for(start;end;change){}
// for(let i=10;i<=100;i=i+5){
//     console.log(i);
// }

// foreach-tab use kar saktey hain jab ek array hoo
// forEach loop me har member par ek baar chaalta hai
// foreach hamesha function acc karta hai
// var arr=[];
// for(let i=1;i<100;i++){
//     arr[i]=i+2;
// }
// arr.forEach(function(val){
//     console.log(val);
// })

// map ka use tabb karna hai jab ek array meii koi calculation karkryy and us nayee calculated values to dusre ek naya array me store karna hoo
// Must always have return
// let arr=[1,2,3,4,5,6];
// let newarr=arr.map(function(val){
//     return val*100
// })

// jab ek array ho aur uskey har memeber par jaana hai and use koi member ko place karna hai and koi ko nahi in new array toh we use FILTER
// filter condition ko based karke agr true ho toh value placed in new array nahi toh not placed
// let arr=[1,2,3,4,6,4,35,24,2325,45,5,44,124,35,45,36,6,77,4,324,26,56,544,324,32,54,65,6,56,42,4,245,5465,,45,32,32,56,56,55,425,43,4,34,3,24,4,43,23,2];
// let newarr=arr.filter(function(val){
//     return /*place a condition*/ val>20;
// })

// Reduce
// let arr=[];
// for(let i=1;i<=5;i++){
//      arr[i-1]=i
// }
// var output =arr.reduce(function(acc,val){
//     return acc=acc+val
// },15)
// console.log(output)

//  Objects
// let obj = {
//   name: "Pravee",
//   age: 20,
//   single: true,
//   sayName: (name) => {
//     console.log(obj.name);
//   },
// };

// // everything in js is an object
// console.log();
// obj.sayName("harish");
// console.count(obj);
// let car={
//     make:"India",
//     model:"Mustang",
//     year:2023,
//     color:"black"
// };
// let abc=()=>{
//     console.log(car.make);
//     console.log(car.color);
//     console.log(car.model);
//     console.log(car.year);

// }
// abc()
// let students = {
//   student1: {
//     name: "Nitish",
//     age: null,
//     grade: "A",
//   },
//   student2: {
//     name: "Praveen",
//     age: null,
//     grade: "A+",
//   },
//   studentage: function (age1, age2) {
//     this.student1.age = a ge1;
//     this.student2.age = age2;
//   },
//   studentAgeComparison: function () {
//     let a = this.student1.age;
//     let b = this.student2.age;
//     a > b ? console.log(this.student1.name) : console.log(this.student2.name);
//   },
// };

// let age1=Number(prompt("enter student1 age:"));
// let age2=Number(prompt("enter student2 age:"));
// students.studentage(age1,age2);
// students.studentAgeComparison();


// First class function-jab function ko variable mey store kar sakte and function ko arguments ki tarah use karte sakte hai
// function a(val){
//   val();
// }
//  a(()=>console.log("This is first"))
// or
// value=()=>{
//     console.log("this is first")
// }
// a(value)

// constructor ek sache ki tarah hai jissey kayi objects ban sakte hai 
// jab bhi new keyword likho to ek blank object maan mey bana lo and new ke aagey ka function chaloo and us function mey jaha bhi this ho uskey aagaeyy ke value ko property ki tarah and set value ko atribute bana lo blank object mey
// function abcd(name,age){
//     this.name=name;
//     this.age=age;
// }
// let ans1= new abcd("praveen",20);
// let ans2=new abcd("harsh",24);


// hoisting-var and fun ko declaration se phele caal karne par var:undefined and functon:pura code of function.
// js code run karne se phele execution context banata hai and usemy memory and code allocation karte hai line by line
// console.log(a)
// ab();

// var a=13;
// function ab(){
//   console.log("a function")
// };

// copying reference variable
// let arr1=[1,2,3,4,34,2,2]
// let arr2=[...arr1];
// arr1.unshift(123);
// arr2.pop();
// console.log(arr1);
// console.log(arr2);
// let obj1={
//   name:"praveen",
//   age:20
// }
// let obj2={...obj1};
// console.log(obj2.name="harsh")
// console.log(obj1.name)

// Function
// ________________________________________
// function statement and declaration are same -means normal way of function creatiion
// function a(){
//     console.log("a")
// }
// a();
// // function expression is another way of craeting function through assigning through variables
// let b=function (){
//     console.log("as")
// }
// b();
// dono mey diiference hoisting ka hota hai

// Anonymous function maney jis function ka naam na ho .asey function sirf function expression ke saath kaam kar sakte hai but function statemnt ke saath nahi
// let b=function(){
//     console.log("B called")
// }
// // Named Function expression is same like function expression way but with a function name like
// let b=function xyz(){
//     console.log(xyz);
// }
// b() run karney par error milega as xyz() is accesible srif inside that function


// function x(yfunc){
//     console.log("x");
//     yfunc();
// }
// x(function y(){
//     console.log("y");//this function which is called inside a function is known as CaLlback function
// });
// setTimeout(function(){
//     console.log("Settimeout")
// },10000);
// Callback function helps us to achieve async js

// Closure with event listener
// function eventListener(){
//     let count=0;
//     document.getElementById("click").addEventListener("click",function xyz(){
//         console.log("button Clicked",++count)
//     });
// the addEventListener() is attaced=closure to count variable which takes memory even whan code not running   
// }
// eventListener();
// // console.log(count) this give error as count is closure to its parent eventListener function

// Higher order function woh hotey hai jo ek callback function kon accept kare or return kare koi function
 
// Constructor function woh hai jab normal function mein THIS keyword ka use kiya hai and function call par NEW keyword ka saath kiya hai.
// function conFunc(color,width,height) {
//     this.color=color;
//     this.height=height;
//     this.width=width;
// };
// let ele1=new conFunc("red",20,30);
// let ele2=new conFunc("blue",233,3033);


// iife -immediately invoked function expression hota hai jinme var private hote
// used for larger codebase to encapsulation
// let ans=(function(){
//     let a=12;
//     return {
//         getter:function(){
//             console.log(a);
//         },
//         setter:function(val){
//              a=val
//         }
//     }
// })();
// // let as=ans();


// Prototype-js mein har ek object ko ek extra propert by default miltii hai as prototype
// prototypal inheritance maneey dusre object ki properties apne object mein borrow/inherit karne
// let human={
//     hasName:true,
//     canFly:false,
//     canTalk:true,
//     willDie:true
// };

// let me={
//     isFit:true,
//     isWealthy:true
// }

// me.__proto__=human


