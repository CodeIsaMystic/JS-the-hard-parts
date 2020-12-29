"use:strict";


/*  Challenge 1  */
function addTwo(num) {
  return num + 2;
}

/**************************************************************** 
 * Tests
****************************************************************
console.log(addTwo(3));
console.log(addTwo(-3));
console.log(addTwo("2"));
console.log(addTwo(-0));
console.log(addTwo("ab"));
*/





/*  Challenge 2  */
function addS(word) {
  return word + "s";
}

/***************************************************************
 *  Tests 
 **************************************************************  
console.log(addS("hoje"));
console.log(addS("2"));*/





/* Challenge 3 */
function map(numArr, callback) {
  const finalArr = [];
  for (let i = 0; i < numArr.length; i++) {
    finalArr.push(callback(numArr[i]));
  }
  return finalArr;
}


/**************************************************************  
 * Tests
 *************************************************************
console.log(map([1, 2, 3], addTwo));
console.log(map([-1, -0, 2, "2", [1]], addTwo));
console.log(map([5000000000000000000000, "ab"], addTwo));*/







/*   Challenge 4   */

/*
let alphabet = '';
const letters = ['a', 'b', 'c'];

letters.forEach(function concat(letter) {
  alphabet += letter;
})
// Test
console.log(alphabet);
*/

function forEach(arr, cb) {
  const mappedArr = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(cb(arr[i]));
  }
  return mappedArr;
}
/***********************************************************
 * Tests 
 **********************************************************
console.log(forEach([1, 2, 3], addTwo));
console.log(forEach(["word", "letter", "order"], addS));
*/






// Challenge 5
function mapWith(numArr, callback) {
  const finalArr = [];

  forEach(numArr, el => finalArr.push(callback(el)))

  return finalArr;
}
/****************************************************************
 * Tests
 ****************************************************************
console.log(mapWith([1, 2, 3], addTwo));
console.log(mapWith(["word", "letter", "order"], addS));
*/






/* Challenge 6 🙌 */
const nums = [4, 1, 3];

const reducer = (acc, currentV) => {
  return acc + currentV;
}

/******************************************************************
 * Tests
 *****************************************************************/
console.log(nums.reduce(reducer, 0));
console.log(nums.reduce(reducer, 10));



/*
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  console.log(acc)

  forEach(array, el => acc += el)
  console.log(typeof (acc))

  return acc;
}
*/


/******************************************************************
 * Tests
 ******************************************************************
console.log(reduce(nums, forEach, 0));
//-> 8
console.log(reduce(nums, forEach, 10));
//-> 18
*/





/*  Challenge 7  */

/*
function intersection(...arrays) {
  console.log("arrays:", arrays);
  
  return arrays.reduce((acc, curr) => {  

     return curr.filter(el => acc.includes(el))
  })   
}
*/

const intersection = (...arrays) => {
  console.log("arrays:", arrays);

  return arrays.reduce((acc, curr) => {
    return curr.filter(el => acc.includes(el));
  });
};



/*****************************************************************************************************************************
 * Tests
 *****************************************************************************************************************************/
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
console.log(intersection([58, 10, 8, 77, 20], [58, 8, 77, 10], [10, 58, 8, 77], [10, 8, 1, 58, 7], [8, 10, 15, 58, 20]));
// should log: [58, 10, 8, 77]
console.log(intersection([5, 10, 20], [20, 88, 1], 20, [1, 20]));
// should log: 20 !!??






























/*  Challenge 8  */
/*
const union = (...arrays) => {
  return arrays.reduce((acc, curr) => {
    var newElements = curr.filter(el => !acc.includes(el));
    newElements = acc.concat(newElements);
    
    return newElements;
  });
};
*/

function union(...arrays) {
  return arrays.reduce((acc, curr) => {
    var newElements = curr.filter(el => !acc.includes(el));
    newElements = acc.concat(newElements);

    return newElements;
  });
};

/***********************************************************************************
 * Tests
 **********************************************************************************/
//console.log("result: ", union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]




/*  Challenge 9  */
function objOfMatches(array1, array2, callback) {
  //  ====> build & return  an Obj
  const objMatch = {};

  // Test each element of array1 with callback  
  for (let i = 0; i < array1.length; i++) {
    // To Test if Output Match with Corresponding on Array2
    // ==> test by index
    if (callback(array1[i]) == array2[i]) {
      //  If there is a match the array1 element becomes a Key in the newObj
      //  and the array2 element becomes the values in the newObj
      objMatch[array1[i]] = array2[i];
    }
  }
  //console.log(typeof (objMatch))
  return objMatch;
}

/************************************************************************************************************
 * Tests
 ************************************************************************************************************/
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }




/*  Challenge 10  */
function multiMap(arrVals, arrCallbacks) {
  const multiMapArr = {};

  for (let i = 0; i < arrVals.length; i++) {
    multiMapArr[arrVals[i]] = [];
    //console.log(multiMapArr);

    for (let j = 0; j < arrCallbacks.length; j++) {
      multiMapArr[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }
  return multiMapArr;
}
//multiMap(['catfood', 'glue', 'beer'])


/***************************************************************************
 * Tests 
 **************************************************************************
console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      }
    ]
  )
);

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
*/






/*  Challenge 11  */
const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS',
};


function objectFilter(obj, callback) {
  const newObj = {};

  for (let key in obj) {
    if (callback(key) === obj[key]) {
      newObj[key] = callback(key);
    }
  }
  return newObj;
}

/*  Test  */
//console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}



/* Challenge 12
  ===> Create a function majority that accepts an array and a callback. 
      ==> The callback will return  true or false. 
      
  ===> function majority(arr, cb)   
      ===>  iterate through the array
          &  ==>  perform the callback on each element   ( until it can be determined )
                    
                ==>  majority of the return values are true. 
                ==>  number of true returns = number of false returns
                    ==> majority should return false
*/


/*   function isOdd   */
function isOdd(num) {
  return num % 2 === 1;
}


/*   function majority   */
function majority(array, callback) {
  var result = [];
  var mappedArr = [];

  for (let i = 0; i < array.length; i++) {
    mappedArr.push(callback(array[i]));
  }

  //console.log("First Check, mappedArr: ", mappedArr); 
  //return mappedArr;

  result = mappedArr.filter(falsy => {
    if (falsy === false) {
      return result.push(falsy)
      //console.log("Map & Filter to Result: ", result);
    }
  })

  //console.log(mappedArr.length);
  //console.log(result.length)

  if (mappedArr.length / 2 <= result.length) {
    //console.log(false);
    return false;
  } else {
    //console.log(true);
    return true;
  }
}


/********************************************************************************************** 
 * Tests
 **********************************************************************************************
console.log("majority + isOdd: ", majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log("majority + isOdd: ", majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log("majority + isOdd: ", majority([2, 3, 4, 5, 6], isOdd)); // should log: false 
*/








/*  Challenge 13  */
function prioritize(array, callback) {
  // *************************************
  /*   let newArr = [];
    let found = [];
  
    array.forEach(el => {
      if (callback(el) == true) return found.unshift(el);
      else return newArr.push(el)
    })
  
    found.forEach(el => newArr.unshift(el))
  
    return newArr;
   */




  // *************************************
  /*   let newArr = [];
   
   array.forEach( el => {
     if( callback(el) == true )  return newArr.push(el);  })
   
   array.forEach( el => {
     if( !callback(el) )  return newArr.push(el); })
   
   return newArr;
  */



  // *************************************
  let newArr = [];

  ifTrue(array, callback);
  ifFalse(array, callback);

  return newArr;
  //console.log(newArr);

  /*  function isTrue()  */
  function ifTrue(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i]) == true) newArr.push(arr[i]);
    }
    return newArr;
  }

  /*  function isFalse()  */
  function ifFalse(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      if (!cb(arr[i])) newArr.push(arr[i]);
    }
    return newArr;
  }

}

/***************************************************************************************************************
 * Tests
 ************************************************************************************************************** 
const startsWithS = function (str) { return str[0] === 's' || str[0] === 'S'; };
const endsWithY = function (str) { return str[str.length - 1] === 'y' || str[str.length - 1] === 'Y'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], endsWithY)); // should log:
['rickandmorty', 'sunny', 'curb', 'seinfeld', 'friends']
 */




/*   Challenge 14   */
// array = [1, 2, 3, 4, 5]        callback =>  odd || even
function countBy(array, callback) {
  //   const obj = {};
  const obj = Object.create(null);

  array.forEach(item => {
    var key = callback(item);
    //console.log(key);

    if (key in obj) ++obj[key];
    else obj[key] = 1;
  })

  return obj;
}



/***********************************************************
 * Tests
 *********************************************************** 
console.log(countBy([1, 2, 3, 4, 5], function (num) {
  if (num % 2 === 0) return 'even';
  else return 'odd';
})); // should log: { odd: 3, even: 2 }
*/







/*  Challenge 15  */
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) { return Math.floor(num); };

//*********************************************
// function floored(num) {
//   return Math.floor(num);
// }



//*********************************************
function groupBy(array, callback) {
  const obj = Object.create(null);


  array.forEach(item => {
    var key = callback(item);
    console.log(callback(item), typeof (callback(item)), item, typeof (item));

    obj.key = callback(item);
    obj.values = item;
    Object.values(item);
  })
  return obj;
}

/************************************************************************************* 
 * Tests
 *************************************************************************************/
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }



//************************************************
function iterate(x) { x };

//************************************************ 
function groupBy(collection, iterate) {

  const it = typeof iterate === 'function'
    ? iterate
    : ({ [iterate]: prop }) => prop;

  //   function it() {
  //     if (typeof iterate === 'function') iterate()
  //     else ({[iterate] : prop}) => prop;
  //   }


  const array = Array.isArray(collection) ? collection : Object.values(collection);

  return array.reduce((r, e) => {
    const k = it(e);

    r[k] = r[k] || [];

    r[k].push(e);

    return r;
  }, {});
};


/*****************************************************************************************************
 * Tests
 ****************************************************************************************************/
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': [4.2], '6': [6.1, 6.3] }

console.log(groupBy(['one', 'two', 'three'], 'length')); // => { '3': ['one', 'two'], '5': ['three'] }












/*  Challenge 16   */
function goodKeys(obj, callback) {

}

/************************************************************************************************************ 
 * Tests
 ************************************************************************************************************ 
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
*/









/* Challenge 17: Function commutative()
 * ==> Relate of composition law, 
 *  which allows to exchange terms without any effects on the result
 * @param func1 (cb) 
 * @param func1 (cb)
 * @param value (number)
 *
 * @return true or false (boolean) */
function commutative(func1, func2, value) {

  if (func1(func2(value)) == func2(func1(value))) {
    return true;
  }
  return false;

  // return (func1(func2(value)) == func2(func1(value))) ? true : false;
}

/********************************************************************
 * Tests
 ********************************************************************
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false
*/