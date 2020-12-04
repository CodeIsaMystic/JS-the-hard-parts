"use:strict";

//console.log('hello World!');

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
/*console.log(addTwo(3));
console.log(addTwo(-3));
console.log(addTwo("2"));
console.log(addTwo(-0));
console.log(addTwo("ab"));*/





// Challenge 2
function addS(word) {
  return word + "s";
}

//  Tests 
/*console.log(addS("hoje"));
console.log(addS("2"));*/





// Challenge 3
function map(numArr, callback) {
  const finalArr = [];
  for (let i = 0; i < numArr.length; i++) {
    finalArr.push(callback(numArr[i]));
  }
  return finalArr;
}

/*console.log(map([1, 2, 3], addTwo));
console.log(map([-1, -0, 2, "2", [1]], addTwo));
console.log(map([5000000000000000000000, "ab"], addTwo));*/






// Challenge 4
/*
let alphabet = '';
const letters = ['a', 'b', 'c'];

letters.forEach(function concat(letter) {
  alphabet += letter;
})

console.log(alphabet);
*/

function forEach(arr, cb) {
  const mappedArr = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(cb(arr[i]));
  }
  return mappedArr;
}
/*
console.log(forEach([1, 2, 3], addTwo));
console.log(forEach(["word", "letter", "order"], addS));
*/






// Challenge 5
function mapWith(numArr, callback) {
  const finalArr = [];

  forEach(numArr, el => finalArr.push(callback(el)))

  return finalArr;
}
/*
console.log(mapWith([1, 2, 3], addTwo));
console.log(mapWith(["word", "letter", "order"], addS));
*/






// Challenge 6 🙌
const nums = [4, 1, 3];

const reducer = (acc, currentV) => {
  return acc + currentV;
}

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

console.log(reduce(nums, forEach, 0));
//-> 8
console.log(reduce(nums, forEach, 10));
//-> 18

*/





// Challenge 7

function intersection(arrays) {
  //const filter = 

  const reducer = (acc, curr) => {
    acc + curr;
    return console.log(arrays.reduce(reducer));
  }
  /*
   
   return  arrays.reduce(function(acc, curr) {
     return filter;  
     //return curr.filter(function(el) {
     // acc.includes(el); 
     //})
   });
   
   
   */
}




console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
console.log(intersection([58, 10, 8, 77, 20], [58, 8, 77, 10], [10, 58, 8, 77], [10, 8, 1, 58, 7], [8, 10, 15, 58, 20]));
// should log: [58, 10, 8, 77]
console.log(intersection([5, 10, 20], [20, 88, 1], 20, [1, 20]));
// should log: 20 !!??















// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
/*console.log(addTwo(3));
console.log(addTwo(-3));
console.log(addTwo("2"));
console.log(addTwo(-0));
console.log(addTwo("ab"));*/





// Challenge 2
function addS(word) {
  return word + "s";
}

//  Tests 
/*console.log(addS("hoje"));
console.log(addS("2"));*/






// Challenge 3
function map(numArr, callback) {
  const finalArr = [];
  for (let i = 0; i < numArr.length; i++) {
    finalArr.push(callback(numArr[i]));
  }
  return finalArr;
}

/*console.log(map([1, 2, 3], addTwo));
console.log(map([-1, -0, 2, "2", [1]], addTwo));
console.log(map([5000000000000000000000, "ab"], addTwo));*/





// Challenge 4
/*

let alphabet = '';
const letters = ['a', 'b', 'c'];

letters.forEach(function concat(letter) {
  alphabet += letter;
})

console.log(alphabet);

*/
function forEach(arr, cb) {
  const mappedArr = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(cb(arr[i]));
  }
  return mappedArr;
}
/*
console.log(forEach([1, 2, 3], addTwo));
console.log(forEach(["word", "letter", "order"], addS));
*/








// Challenge 5

function mapWith(numArr, callback) {
  const finalArr = [];

  forEach(numArr, el => finalArr.push(callback(el)))

  return finalArr;
}

/*
console.log(mapWith([1, 2, 3], addTwo));
console.log(mapWith(["word", "letter", "order"], addS));
*/








// Challenge 6 🙌
const nums = [4, 1, 3];


function reduce(array, callback, initialValue) {
  let acc = initialValue;
  console.log(acc)

  forEach(array, el => acc += el)
  console.log(typeof (acc))

  return acc;
}
//console.log(reduce(nums, forEach, 0));
//-> 8
//console.log(reduce(nums, forEach, 10));
//-> 18







// Challenge 7
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

//console.log("result: ", intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]  
//console.log("result: ", intersection([58, 10, 8, 77, 20],[58, 8, 77, 10], [10, 58, 8, 77], [10, 8, 1, 58, 77], [77, 8, 10, 15, 58, 20]));
// should log: [58, 10, 8, 77]
//console.log("result: ", intersection([5, 10, 20], [20, 88, 1], [20], [1, 20]));
// should log: 20 



// Challenge 8
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

//console.log("result: ", union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]




// Challenge 9
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


console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }







// Challenge 10
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


/*
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
*/
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }






// Challenge 11
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


//console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


