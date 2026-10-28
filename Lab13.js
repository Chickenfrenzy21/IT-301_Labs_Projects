/* let numbers = [2, 3, 4, 5, 6, 'eight', true];
console.log(Array.isArray(numbers));
console.log(numbers[0]); //Negative values do not work
console.log(numbers.length);
numbers[0] = 1;
console.log(numbers[0]);
//Pointers are back...
let newNumbersPointer = numbers;
newNumbers = newNumbersPointer.push(7);
console.log(numbers); //newNumbers just points to numbers, its just a pointer
let newNumbersDeepCopy = [numbers];
newNumbersDeepCopy = newNumbersDeepCopy.push(8);
console.log(numbers); */
//Objects:
/* let operation = {
    add: (a, b)=> a + b, //Arrow functions, just a shorter way to write a function
    sub: (a, b)=>a - b
};
console.log(operation.sub(1, 1)); */
/* let fruites = {
    name:'Apple',
    color: ['Red', 'Yellow', 'Green'],
    calories: '56'
};
console.log(fruites);
console.log(fruites.name); //Can use .keyname to access key value
console.log(fruites['calories']); //can also use ['keyname'] to access key value
let key = 'color';
console.log(fruites.key); //This doesnt work, output is undefined
console.log(fruites[key]); //This DOES work, looks like [] can take a string or a var
fruites.type = 'Red Deliscious'; //Adds since there is no type key
fruites.calories = 134; //Just updates the existing key
console.log(fruites);
console.log(fruites.color[1]); */
/* let student = {
    name: 'Amy',
    greet: function(){return `Welcome ${this.name}`} //this cannot be used with arrow functions
};
console.log(student.greet('Amy'));
console.log(student.greet());*/
/* let fruites = [{name: 'Apple', color: 'Red', calories: 95},
    {name: 'Orange', color: 'Orange', calories: 65},
    {name: 'Banana', color: 'Yellow', calories: 195}];
 console.log(fruites);
 console.log(fruites[1]);
 let key = 'color';
 console.log(fruites[2][key]);
 console.log(fruites[2]['color']);
 for (let fruit of fruites){
     console.log(fruit);
 }
 for (let key in fruites[0]){
     console.log(fruites[0][key]);
 }
for (let fruit of fruites) {
    for (let key in fruit){
        console.log(fruit[key]);
    }
} */
let numbers = [1, 2, 3, 4];
numbers.forEach(item=> console.log(item * 2));

let doubleNumber = numbers.map(item => (item * 2)); //map makes a new array with new values based on the parameters
console.log(doubleNumber);

let findNumber = numbers.find(item => item > 3);
console.log(findNumber);

let filterNumber = numbers.filter(item => item > 2);
console.log(filterNumber);