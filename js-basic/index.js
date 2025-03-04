// console.log('Hello World');

// let name ;

// let name = 'hafiz';
// console.log(name);

// Rules for variable declarations

// 1 Cannot be reserve keyword
// 2 Should be meaningfell 
// 3 Cannot start with a number (1name)
// 4 Camnnot contain space or hypen (-)
// 5 Are case-sensitive
// let firstName = 'Muhammad', lastName = 'Usman'
// console.log(firstName);
// console.log(lastName);


// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let name = 'Usman';  // string
// let age = 30; // number
// let isApproved = false; // boolean
// let firstName = undefined; // undefined
// let selectedColor = null; // object but why.?

// let person = {
// name: 'Usman',
// age:30
// }

// dot notation
// person.name= 'Hafiz'

// bracket notations
// person['name'] = 'muhammad'


// let selection = 'name';
// person[selection] = 'Hafiz Usman'
// console.log(person.name);

// console.log(person['name']);
// console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2]= 'green';
// selectedColors[3]= 1;
// console.log(selectedColors);
// console.log(selectedColors.length);
// console.log(typeof selectedColors);
// console.log(typeof selectedColors[0]);
// console.log(typeof selectedColors[3]);


// Performing a task

// function greet(firstName, lastName){
//     console.log('Hello ' + firstName + ' ' + lastName);
// }

// greet('Usman', 'sab');
// greet('Hafiz');

// performing a value
// function squre(number) {
//    return number * number
// }

// console.log(squre(2));

// let number = squre(2);
// console.log(number);




// Operators

// let x = 10;
// let y = 3;
// arithmatic operators
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);


// increment
// console.log(++x);
// console.log(x++);

// Decrement
// console.log(--x);
// console.log(x--);

// assigment Operators

// console.log(x);
// x = x + 5;
// x +=5;

// x *= 5;
// console.log(x);

// let x = 1;
// relational 
// console.log(x > 0);
// console.log(x >= 1);

// console.log(x > 1);
// console.log(x <= 1);

// Equality
// strict equality (same type and same value)
// console.log(x === 1);
// 1 === 1 = true, '1' === 1 = false 
// lose equality (Value)
// console.log(x !== 1);
// 1== 1 = true, '1' == 1 = true, '1' == '1' = true 
// console.log(true == 1); // true
// console.log(true == 0); // false


// ternary operators

// let points = 110;
// let type = points > 100 ? 'gold' : 'Silver';
// console.log(type);

// logical operators
// logical AND (&&) bouth should be true = true
// let hightIncome = true;
// let goodCreaditScore = true;
// let eligibleForLone = hightIncome && goodCreaditScore;
// console.log(eligibleForLone);


// logical OR (||) if one value will be true = true
// let hightIncome = true;
// let goodCreaditScore = false;
// let eligibleForLone = hightIncome || goodCreaditScore;
// console.log(eligibleForLone);

// logical NOT (!) reverse the value
// let hightIncome = false;
// let goodCreaditScore = false;
// let eligibleForLone = hightIncome || goodCreaditScore;
// console.log('Eligible value is = ', eligibleForLone);
// let ApplicationRefused = !eligibleForLone;
// console.log('Application Refused Status = ', ApplicationRefused);


// logical operators with non booleans
// falsy value in js
// falsey (false)
// undefined
// null
// 0
// ''
// NaN
//  anythiing that is not falsy in js is true
//  let usecolor = 'red';
//  let usecolor = undefined;
//  let defaultColor = 'blue';
//  let currentColor = usecolor || defaultColor;
//  console.log(currentColor);



// Bitwise operators
// console.log(1 | 2);
// console.log(1 & 2);

// Read, write, Execute
// 00000100
// 00000010
// 00000001

// const readPersmisson = 4;
// const writePermission = 2;
// const ExecutePermission = 1;

// let myPermisson = 0;

// myPermisson = readPersmisson | writePermission | myPermisson;
// myPermisson =  writePermission | myPermisson;
// console.log(myPermisson);

// let message = (myPermisson & readPersmisson) ? 'Yes' : 'false'
// let message = (myPermisson & readPersmisson) ? 'Yes' : 'false' // if permisson in my permisson then permisson is yes 
// console.log(message);

// precedence operators

// let x = 2 + 3;
// let x = 2 + 3 * 4; // according to height order * first (3 * 4) = 12 then  + 2 = 14
// let x = (2 + 3) * 4; // according to height order () first (2 + 3) = 5 then * 4 = 20
// console.log(x);

// swapping variables

// let a = 'Red';
// let b = 'blue';

// console.log('Value of a ', a);
// console.log('Value of b ', b);

// let c = a;
// a = b;
// b = c;

// console.log('here is swapping values');
// console.log('Value of a ', a);
// console.log('Value of b ', b);

// if else statement
// let hour = 18;
// if(hour >= 6 && hour < 12)
// console.log('Good morning');
// else if(hour >= 12 && hour < 18)
// console.log('Good afternoon');
// else
// console.log('Good evening');


// switch case

// let roel = 'Guest' ;

// switch (roel) {
//     case 'Guest':
//         console.log('Guest User');
//         break;

//     case 'Moderator':
//         console.log('Moderator User');
//     break;
//     default:
//         console.log('Unknown User');
// }




// for loop

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for increment order 

// for (let i = 1; i <=5; i++) {
//     // console.log('hellow World', i);
//     if (i % 2 !== 0) {
//         console.log(i, ' is Odd');
//     }
// }

// for reverse order

// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log('Odd nuber is ', i);   
//     }
// }

// while loop
// let i = 1;
// while (i <= 5) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++
// }


// let i = 8;
// while (i <= 5) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++
// }

// for reverse while loop

// let i = 5;
// while (i >= 1) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i--
// }

// do-while

// let i = 0
// do{
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++
// }while (i <= 5);

// infinite loop
// while(true){
//     console.log('Hello World');
// }

// do {
//     x++
// } while (x < 5);

// for (let i = 0; i < 5; ) {

// }


// for..in loop

// const person = {
//     name: 'Usman',
//     age: 32
// }
// for (let key in person) {
// console.log(key); property of object
// console.log(key, person[key]); propert and value of object 
// console.log(person[key]); // value of object property
// console.log(person[key]); // value of object property
// }

// const colors = ['red', 'green', 'blue'];
// for (let key in colors) {
//     // console.log(key);
//     console.log(key, colors[key]);    // for index and values 
// }


// for ...of loop
// const colors = ['red', 'green', 'blue'];
// for (let color of colors) {
//     // console.log(key);
//     console.log(color);    
// }

// max of two number 
// let number = max(5, 8);
// console.log(number);

// function max(a, b) {
// if (a > b) {
//     return a;
// }
// else {
//     return b;
// }

// if (a > b) return a;
// else return b;
//  return (a > b) ? a : b;
// }

// kandscape or portarte
// console.log(isLandscape(800, 500));

// function isLandscape(width, height) {
//     // return (width > height) ? true : false;
//     return (width > height);   
// }

//FizzBuzz

// const output = fizzBuzz('false')
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number') {
//         return NaN;
//     } 
//     if ((input % 3 === 0) && (input % 5 === 0)) {
//         return 'FizzBuzz';
//     }
//     if (input % 3 === 0) {
//        return 'Fizz';
//     }
//     if (input % 5 === 0) {
//         return 'Buzz';
//     }
//     return input;
// }

// Demerit Points
// checkSpeed(118)
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if(speed < speedLimit + kmPerPoint){
//         console.log('OK');
//         return;
//     }
//     let points = Math.floor((speed - speedLimit) / kmPerPoint); 
//     if (points >= 12) {
//         console.log('Licnced cancel');
//     }
//     else
//     console.log('Points', points);
// }


// Even and Odd Number

// showNumbers(10)
// function showNumbers(limit) {
//     for (let i = 0; i < limit; i++) {
//         // if (i % 2 === 0) console.log(i, 'Even');
//         // else console.log(i, 'ODD');

//         const message = (i % 2 === 0) ? 'Even' : 'ODD'
//         console.log(i, message);

//     }
// }

// const isActive = true;
// const name = 'usman'; // truthly (true)
// const name = ''; // falsy (false)
// if (name) console.log('Hello');


// count Truthy

// const array = [0, 1, 2, 3, '', undefined, null, false, NaN, 4];
// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//         return count;    
// }

// string property
// const movie = {
//     title: 'a',
//     releasesYear: 2018,
//     rating: 4.5,
//     dirctor: 'b'
// };
// showProperties(movie);
// function showProperties(movie) {
//     for (const key in movie) {
//         if (typeof movie[key] === 'string') {
//             console.log(key, movie[key]);
//         }
//     }
// }



// sum of multiple of 3 and 5 
// console.log(sum(10));
// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++) 
//         if (i % 3 === 0 || i % 5 === 0) 
//             sum += i;
//     return sum;        
// }


// Grade Exercise
// const marks = [90, 100, 100];
//  1-59: F
//  60-69: D
//  70-79: C
//  80-89: B
//  90-100: A

// console.log(CalculatGrade(marks));

// function CalculatGrade(marks) {
//     const average = calculateAverage(marks)
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }
//  function calculateAverage(array) {
//     let sum = 0;

//     for (let value of array)
//         sum += value;
//     let average = sum / array.length;
//     return average;
//     // console.log(average);  
//  }

// stars
// showStars(8);
// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';

//         for (let i = 0; i < row; i++)
//             pattern += '*'; 

//         console.log(pattern);
//     }
// }

// prime number

// ShowPrimes(20)
// function ShowPrimes(limit) {
//     for (let number = 2; number < limit; number++) 
//         if (isPrime()) console.log(number);
// }
//  function isPrime(number) {
//         for (let factor = 2; factor < number; factor++) 
//             if (number % factor === 0) 
//                 return false;
//         return true;
//  }


// object
// onject oriented programing

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isvisibile: true,
//     draw: function () {
//         console.log('Draw');
//     }
// }
// circle.draw(); // method that function are in objects is called Methods now draw in circle object and this is known as method.

// Factory function

// function createCirlce(radius) {
//     // const circle = {
//     //     radius: 1,
//     //     draw: function () {
//     //         console.log('Draw');
//     //     }
//     // }

//     return {
//         // radius: 1,
//         // radius: radius,
//         radius,
//         draw() {
//             console.log('Draw');
//         }
//     };
// }
// const circle1 = createCirlce(1);
// console.log(circle1);
// const circle2 = createCirlce(2);
// console.log(circle2);


// Contractor functions
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function () {
//             console.log('Constractor Draw Func');
//         };
//     }
// }
    // function Circle (radius) {
        
    //     this.radius = radius;
    //     this.draw = function () {
    //         console.log('Constractor Draw Func');
    //     };
        
    // }
// const circle = new Circle(2);
// console.log(circle);

// console.log(circle.draw);


// Dynamic nature of object

// const circle = {
//     radius: 1
// }

// circle.color = 'Green',

// circle.draw = function() {
//     console.log('Dynamic Circle');
// }

// delete circle.radius;

// console.log(circle);

// constracton property

// const str = new String();
// const bol = new Boolean();
// const num = new Number();



// const Circle10 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function(){
//     console.log('draw);
//     },
// `);

// const circle = new Circle1(1);


// function fullCircle(radius){
//  this.radius = radius;
//  this.draw = function (params) {
//     console.log('draw');
    
//  }
// }
// fullCircle.call({}, 2);
// const another = new fullCircle(1);


// let x = 5;

// let y = x; y = 5

// x = 10; // x = 10

// primitives are copied by the values

// let x = {vaule: 5};

// let y = x;

// x.vaule = 10;

// object are copied by the referance

// let number = 10;

// function increae(number) {
//     number++;
// }

// increae(number);

// console.log(number);  // output = 10

// let number = 10;

// function increae(number) {
//     number++;
// }

// increae(number);

// console.log(number);  // output = 10


// let obj = {value: 10};

// function increae(obj) {
//     obj.value++;
// }

// increae(obj);

// console.log(obj);  // output = 10



// Enumerating properties of an object


// const Circle = {
//     radius: 1,
//     deaw(){
//         console.log('draw');
        
//     }
// };


// for in not working on object
// for (const key in Circle) {
//     console.log(key, Circle[key]);
// }
// for of for object only for array and map
// for (const key of Circle) {
//     console.log(key);
    
// }
// here is the way for of loop for object
// for (const key of Object.keys(Circle)) {  // for return an object the key value pare of an object
//     console.log(key, Circle[key]);
// }

// for (const entry of Object.entries(Circle)) { // for return an array the key value pare  of an object
//     console.log(entry);
// }
// if ('radius' in Circle) console.log('Yes'); // radisu is in array so 'Yes message' is appear

// if ('draw' in Circle) console.log('Yes'); // radisu is in array so 'Yes message' is disappear

// cloning an object

// const Circle = {
//     radius: 1,
//     deaw(){
//         console.log('draw');
        
//     }
// };
// clone an objecy circle object in to another object
// const another = {...Circle} // 
// const another = {};
// copy circle object a=key in to another key 
// for (const key in Circle) {
//     another[key] = Circle[key]
// }
// now use modern js for copy key 
// const another = Object.assign({}, Circle); // new approch for copy keys
// const another = Object.assign({
//     color: 'green' // add a property in another object
// }, Circle); // new approch for copy keys

// console.log(another);

// Date()

// const now = new Date();
// console.log(now); // Fri Feb 14 2025 20:29:54 GMT+0500 (Pakistan Standard Time)

// const date1 = new Date('May 11 2018 09:00');
// console.log(date1); // Fri May 11 2018 09:00:00 GMT+0500 (Pakistan Standard Time)
// date1.setFullYear(2025);
// console.log(date1); // Sun May 11 2025 09:00:00 GMT+0500 (Pakistan Standard Time)


// const date2 =  new Date(2022, 4, 11, 9);

// console.log(date2); // Wed May 11 2022 09:00:00 GMT+0500 (Pakistan Standard Time)

// let adderess = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// };

// function showAddress(adderess) {
//     for (const key in adderess) {
//         console.log(key, adderess[key]);
//     }
// }

// showAddress(adderess);


// factory function
// camel case
// const address = createAddress('a', 'b', 'c');

// console.log(address);

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

// constracture function 
// capitalized case
// const add = new Address('a', 'b', 'c');
// console.log(add);

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }





// Arrays
// adding an emlement

// const number = [3, 4];
// // number = [];
// // add a numbers / number end of the array push()
// number.push(5, 6);


// // add a numbers / number star of the array unshift()
// number.unshift(1, 2);

// // add a numbers / number middle of the array splice()
// number.splice(2, 0, 'a', 'b');
// console.log(number);


//finding element


// const number = [1, 2, 3, 4];

// console.log(number.indexOf('a'));

// console.log(number.lastIndexOf(1));

// console.log(number.indexOf(1) !== -1) // depricate
// console.log(number.includes(1)); // updated

// console.log(number.indexOf(1, 3)); // please clear the point indexOf(1, 2)  

// const courses = [

//     {
//         id: 1,
//         name: 'a'
//     },
//     {
//         id: 2,
//         name: 'b'
//     },
//     {
//         id: 3,
//         name: 'c'
//     },
//     {
//         id: 4,
//         name: 'd'
//     },
//     {
//         id: 5,
//         name: 'e'
//     },
// ];

// console.log(courses.includes({id: 1, name: 'a'})); // diffrent memory diffrent location so the result is false
// find is working for reference type
//  const course = courses.find(function(courses){
//     return courses.name === 'a';
//  }); // find for object

// const course = courses.findIndex(function(courses){
//     return courses.name === 'a';
//  }); // find index of an object // 0 object found

//  console.log(course);
 
 // arrow function

// //  const course = courses.find( courses => courses.name === 'a');
// const course = courses.findIndex( courses => courses.name === 'a');
//  console.log(course);

// removing element

// const number = [1, 2, 3, 4];

// console.log(number.pop()); // remove last number of array

// console.log(number.shift()); // remove first number of array

// console.log(number.splice(2, 1)); // remove diddle number / numbers of array
// console.log(number);

// emptying array
// let number = [1, 2, 3, 4];
// number = [];

// let another = number;
// solution 1
// number = [];

// console.log(number);

// console.log(another); // number take earler copy of declarion

// solution 2
// number.length = 0;
// console.log(another); // empty
// console.log(number); // empty


// solution 3
// number.splice(0, number.length);

// console.log(another); // empty
// console.log(number); // empty

// solution 4

// while (number.length > 0) {
//     number.push();
// }
// console.log(another); // empty
// console.log(number); // empty


// combining arrays

// const first = [1, 2, 3];
// const first = [{id: 1}];
// const second = [4, 5, 6];
// const combined = first.concat(second);
// const combined = first.concat(second);
// first[0].id = 10;
// console.log(combined);
// const slice = combined.slice(0, 5)
// console.log(slice);

// spread operators

// const combined = [...first, ...second];
// // first[0].id = 10;
// const copy = [...combined, 'b'];

// console.log(combined);

// console.log(copy);

// iterating an array

// const numbers = [1, 2, 3];

// for (const number of numbers) 
//     console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// joining

// const numbers = [1, 2, 3];

// const joined = numbers.join(',');
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(' '); // return and array
//  const changeWord = parts[2].replace('my','usman')
//  console.log(changeWord);
//  console.log(parts);
// const combined = parts.join('-'); // return a string
// console.log(combined);
 
// sorting arrays
//  const numbers = [3,2,1];
// numbers.sort();
// console.log(numbers);
// numbers.reverse
// console.log(numbers);

// const courses = [
//     {id: 1, name: 'Node.js'},
//     {id: 2, name: 'javaScript'},
// ];

// courses.sort(function (a, b) {

//     if(a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0 
// }); // but when name parameters in upper or lower case not match from each other
// courses.sort(function (a, b) {
//      const nameA = a.name.toLocaleUpperCase();
//      const nameB = b.name.toLocaleUpperCase();

//     if(nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0 
// });
// console.log(courses);

// testing the element of an array

// const numbers = [1,2,3,-1];
// const allPoditive = numbers.every(function (value) {
//     return value >= 0;
// }); // all numbers should be positive numbers in array, and match the given criteria

// const atLeastOnePositive = numbers.some(function (value) {
//     return value >= 0;
// }); // atLeat one number should be positive in array, and check the atleast one number match of given criteria

// console.log(atLeastOnePositive);

// filtering an array

// const numbers = [1, 2, -1, 3];

// const filtered = numbers.filter( n => n >=0 );
// console.log(filtered);
// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>'; 
// console.log(html);

// now assigning a valure and convert into object

// const items = filtered.map(n => {
//     const obj = {value: n}
//     return obj
// });
// console.log(items); 
// lets make a simple upper function
// const items = filtered.map(n =>  ({value: n}));
// console.log(items);


// chaning 
// const myNumber = numbers
// .filter(n => n >= 0)
// .map( n => ({value: n}))
// .filter(obj => obj.value > 1)
// .map(obj => obj.value);
// console.log(myNumber);


// reducing an array
// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//     // sum = sum + n;
// // same as above
//     sum += n
//     console.log(sum);

// now use reduce method for same thing

// const sum = numbers.reduce( (accumulator, currentValiue) =>{
//     return accumulator + currentValiue
// }, 0);
// do it more simple
// const sum = numbers.reduce( 
//     (accumulator, currentValiue) => accumulator + currentValiue 
// );
// console.log(sum);

// ex array from range

//  const numbers = arrayRange(5, 10);

//  function arrayRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++) {
//         output.push(i);
//     }
//     console.log(output);
    
//  }

// ex 2 includes the array

// const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));
// console.log(includ(numbers, 1));

// function includ(array, searchElement) {
//     for (let element of array) {
//         if (element === searchElement) {
//             return true
//         }
//     }
//     return false 
// }

// ex 3 except
// const numbers = [1, 2, 3, 4];
// const output = except(numbers, [2,1]);
// console.log(output);
    
// function except(array, excluded) {
//     const output = [];
//     for(let element of array)
//         if(!excluded.includes(element))
//             output.push(element);
//     return output;
// }

// ex moving an element
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 3, 0);

// console.log(output);

// function move(array, index, offset) {
//     const postion = index + offset
//     if (postion >= array.length || postion < 0) {
//         console.error('Invalif offset.');
//         return;
//     }
//     else{
//     const output = [...array];
//     const element = output.splice(index, 1) [0]; 
//     output.splice(postion, 0, element);
//     return output     
//     }
// }

// ex 5 count occurrences

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, -1);

// console.log(count);

// function countOccurrences(array, searchElement) {
// //    let count = 0;
// //    for (let element of array) {
// //     if (element === searchElement) {
// //         count ++;  
// //     }
// //     return count
// //    }  // here is old method now use reduced methof for this task
// return array.reduce( (accumulator, current) => {

//     const occurrences = (current === searchElement) ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurrences;
// }, 0);
// }

// ex 6 Get Max

// const numbers = [1, 2, 3, 4, 1];

// const max = getMax([10, 2]);
// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined;

    // let max = array[1];

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i];
    //     }
    // }
    // return max; // do more simple useing reduce method
    // array.reduce( (a, b) =>{
    //     // if (current > accumulator) return current;
    //     // return accumulator;

    //     // return (current > accumulator) ? current :accumulator;
    //     return (a > b) ? a : b;
    // });
// } // do it more simple

// function getMax(array) {
//     if (array.length === 0) return undefined;
//     return array.reduce((a, b) => (a, b) ? a : b); 

// }


// ex 7 Movies

// const movies = [
//     {
//         title: 'a',
//         years: 2018,
//         rating: 4.5
//     },
//     {
//         title: 'b',
//         years: 2018,
//         rating: 4.7
//     }, 
//     {
//         title: 'c',
//         years: 2018,
//         rating: 3
//     },
//     {
//         title: 'd',
//         years: 2017,
//         rating: 4.5
//     },
// ];

// const titles =  movies
// .filter(m => m.years === 2018 && m.rating >= 4)
// .sort((a, b) => a.rating - b.rating)
// .reverse()
// .map(m => m.title)

// console.log(titles);


// Functions
// function declaration vs expression 
// function walk1() { // function declaration
//     console.log('Walk');
// };

// const walk = function Walk() { //named function exprection
//     console.log('run');
// };

// const run = function() { // function exprection and anonomus function expression
//     console.log('run');
// };
// run();  // call anonomus functions

// let move = run;
// move ();

// hosting
// walk1();
// function walk1() { // function declaration
//     console.log('Walk');
// };
// in ghe case of function erpression the function exprection call before functions expresion is hosting 
// const run = function() { //named function exprection
//     console.log('run');
// };
// run();

// arguments
// function sum(a, b) {
//     console.log(arguments); // arguments will show what we have provide in arguments
    // return a + b; // 1 + undefined = NaN
    // now we can calculate the total argumets values or sum
    // let total = 0;
    // for (let value of arguments) 
    //     total += value;
    //     return total;
    // return a + b; // 1 + undefined = NaN
// };

// console.log(sum(1, 2, 3, 4));
// rest operators
// function sum(discount, ...prices){ // jb hum rest operators user kty ha us k bad koi new operators ny add kr skty in funtion parameters

//     // console.log(prices);
//     const total = prices.reduce( (a, b) => a + b);
//     return total * (1 - discount)
// }

// console.log(sum(0.1, 20, 30,));

// default parameters

// function intrest(principal, rate, years) {
//     return principal * rate / 100 * years ;
// }
// console.log(intrest(100, 2, 5 ));

// now using default parameters

// function intrest(principal, years, rate = 3.5) {
//     return principal * rate / 100 * years ;
// }
// console.log(intrest(10000, 5));

// gatters and satters

// const person ={
//     firstname: 'muhammad',
//     lastName: 'Usman',
//     // fullName: function (params) {} same like below
//     get fullName(){
//         return `${person.firstname} ${person.lastName}`
//     },
//     set fullName(value){
//         if (typeof value !== 'string') {
//             throw new Error('Value is not a string.');
//         }
//         const parts = value.split(' '); // split method use for get array data full and one by one words accodring to their index
//         if (parts.length !== 2) {
//             throw Error('Enter a first and last name.')
//         }
//         this.firstname = parts[0];
//         this.lastName = parts[1];
//         // console.log(parts);
        
//         // this.firstname
//     }
// };
// try{

// person.fullName = '';
// }
// catch(e){
//  alert(e)
// }
// // now use getters and setters for menuplate or reassign for fullName() values
// // getters => access properties 
// // setters => change (mutate) them 
// console.log(person);
 // local vs global scope

//  const color = 'red';

//  function start() {
//     const message = 'hi';
//     const color = 'blue';
//     console.log(color);
//  }

//  function stop() {
//     const message = 'bye';
//  }
//  console.log(color);
 
//  start ();

// let vs var

// function start() {
//     for (let i =0; i < 5; i++){
//         console.log(i);
//     }
// }

// start();

// this keyword
// const video = {
//     title: 'a',
//     play() {
//         console.log(this); 
//     }
// };

// video.stop = function() {
//     console.log(this);
    
// }

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }
// Video('a');
// video.play();
// console.log(this);
// const v = new Video('a') //when use new 'create an empty object'   {}
// video.stop();

// const v = new Video('b')

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTangs(){
//         this.tags.forEach(function(tag) {
//             console.log(this.title,tag);
//         }, this)
//     }
// };
// video.showTangs();

// chanigng this
// solutions 1
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTangs(){
//         const self = this;
//         // console.log(self);
        
//         this.tags.forEach(function(tag) {
//             console.log(self.title,tag);
//         }) // remove this 
//     }
// };
// video.showTangs();

// solution 2
// function playVideo() {
//     console.log(this);
// }

// playVideo.call({name: 'usman'});
// solution 3
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTangs(){
//         this.tags.forEach(function(tag) {
//             console.log(this.title,tag);
//         }.bind(this)) // solution 3
//     }
// };
// video.showTangs();
// change into arrow function
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTangs(){
//         this.tags.forEach(tag => {
//             console.log(this.title,tag);
//         }) // solution 3
//     }
// };
// video.showTangs();