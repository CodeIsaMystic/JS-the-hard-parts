"use:strict";

// Type JavaScript here and click "Run Code" or press Ctrl + s


//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's';
}
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}
//console.log(map([1, 2, 3], addTwo));


// Challenge 4
// see for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];

/*
letters.forEach(function (char) {
  alphabet += char;
});
*/
letters.forEach(char => alphabet += char);
//console.log(alphabet);

/**  JOIN  **/
let result1 = letters.join('');
//console.log(result1);


let result2 = '';

function forEach(array) {
  for (let i = 0; i < array.length; i++) {
    result2 += array[i];
  }
  return console.log(result2);
}
//forEach(letters);


// Challenge 5
const result3 = [];

function mapWith(array, callback) {
  array.forEach(element => result3.push(callback(element)))
  return result3;
}
//console.log(mapWith([1, 2, 3], addTwo));



























