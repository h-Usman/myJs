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



