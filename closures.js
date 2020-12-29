'use strict';

// CHALLENGE 1
function createFunction() {
  function printHello() {
    console.log("Hello !")
  }
  return printHello;
}

/*** Uncomment these to check your work! ***/
//const function1 = createFunction();
//function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  function printOutInput() {
    console.log(input);
  }

  return printOutInput;
}

/*** Uncomment these to check your work! ***/
//const printSample = createFunctionPrinter('sample');
//printSample(); // => should console.log('sample');
//const printHello = createFunctionPrinter('hello');
//printHello(); // => should console.log('hello');






/** CHALLENGE 3
 * Deduce the output on outer func when called
 */
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

/*** Uncomment these to check your work! ***/
//willCounter(); // 1
//willCounter(); // 2
//willCounter(); // 3

//jasCounter();  // 1
//willCounter(); // 4



/** function AddByX(x)
 * => return func that add an input by X
 */
function addByX(x) {

  function sum(num) {
    return console.log(typeof (num + x), num + x);
  }
  return sum;
}

/*** Uncomment these to check your work! ***/

const addByTwo = addByX(2);
//addByTwo(1); // => should return 3
//addByTwo(2); // => should return 4
//addByTwo(3); // => should return 5

//const addByThree = addByX(3);
//addByThree(1); // => should return 4
//addByThree(2); // => should return 5

//const addByFour = addByX(4);
//addByFour(4); // => should return 8
//addByFour(5); // => should return 9







/* CHALLENGE 4: function once()
 *
 * callback as an input & return a func
 *  => when returning func is called,
 *   => 1st time: call the cb, return output
 *   => Then simply return the previous value output !!!!!!!!!!!!!!!!!!!!!!
 */


function once(func) {
  let counter = 0;
  let onceV;


  function doItOnce(value) {
    if (counter == 0) {
      onceV = func(value);
    }
    counter++;
    //console.log(value)

    return onceV;
  }
  return doItOnce;
}



// content from Github / StackOverflow / Underscore.js
/*
function once(fn, context) { 
  var result;
  
  function doItOnce() { 
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
      
    }
    
  };
  
  return doItOnce;
}
*/

/*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);

//onceFunc(4)// => should log 6
//onceFunc(10)// => should log 6
//onceFunc(9001)// => should log 6
//console.log(onceFunc(4));   // => undefined
//console.log(onceFunc(10));  // => undefined
// console.log(onceFunc(9001));  // => undefined







/* CHALLENGE 5: function after()
 *
 * @param count (num) => num of times needed to be called
 * @param func  (cb)  => func to be executed
 *
 * @return function 
 */
function after(count, func) {
  var counter = 0;

  return function (val) {
    /*counter++
    if ( counter >= count  ) {
      func(val) 
    }*/
    if (++counter >= count) {
      //console.log(count);
      func(val);
    }
  }
}



/*** Uncomment these to check your work! ***/
const called = function () { console.log('hello') };
const afterCalled = after(3, called);
//afterCalled(); // => nothing is printed
//afterCalled(); // => nothing is printed
//afterCalled(); // => 'hello' is printed

const afterCalled2 = after(2, called);
//afterCalled2(); // => nothing is printed
//afterCalled2(); // => 'hello' is printed







/* CHALLENGE 6: function delay()
 */
function delay(func, wait, ...args) {
  setTimeout(() => func(...args), wait);
}

/*
function printTypes(num, str, bool) { 
  var num = 2;
  var str = "be";
  var bool = true;
  var result = `${num} ${str} ${bool}`;
  
  console.log(result);
}
*/
const printTypes = function (num, str, bool) {
  var num = 2;
  var str = "be";
  var bool = true;
  let result = `${num} ${str} ${bool}`;

  console.log(result);
}


//const sayHello = () => console.log("Heeello!");
//const callWithDelay = delay(sayHello, 5000);
//const callWithDelay2 = delay(printTypes, 5000);








/* CHALLENGE 7: function rollCall()
 *
 */
function rollCall(names) {

  return function callNamesArr() {
    if (!names.length) {
      return console.log('Everyone accounted for.');
    }
    console.log(names.shift());
  }

}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'










/* CHALLENGE 13
       ====> private properties on a JavaScript object!
       
       ====> Implement a function createSecretHolder(secret) 
            =>  accepts any value as secret 
            =>  returns an object  
            
            !!!ONLY two methods.!!           
                  getSecret()   ==>   returns the secret 
                  setSecret()   ==>   sets the secret

*/

/**************************************************************************/

/**************************************************************************/

/**
* createSecretHolder func
*
* @param  secret  (any)
*
* @return newObj  (object)
*/
var obj = {};

function createSecretHolder(secret) {
  //var newObj = obj;

  function setSecret(secret) {
    return secret.value;
  }
  function getSecret() {
    setSecret();
  }


}

/*************************************************************************/

obj = createSecretHolder(5)
obj.getSecret() // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2













