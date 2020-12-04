
/* Challenge 12
  ===> Create a function majority that accepts an array and a callback. 
      ==> The callback will return  true or false. 
      
  ===> function majority(arr, cb)   
      ===>  iterate through the array
          &  ==>  perform the callback on each element   ( until it can be determined )
                    
                ==>  majority of the return values are true. 
                ==>  number of true returns = number of false returns
                    ==> majority should return false
                    
/************************************************************************************/
var result = [];
var mappedArr = [];
/**********************************************************************************/


/*   function isOdd   */
function isOdd(num) {
  return num % 2 === 1;
}


/*   function majority   */
function majority(array, callback) {
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
    return console.log(false);
  } else {
    return console.log(true);
  }
}


console.log("majority + isOdd: ", majority([1, 2, 3, 4, 5], isOdd)); // should log: true
//console.log("majority + isOdd: ", majority([1, 2, 3, 4, 5], isOdd)); // should log: true
//console.log("majority + isOdd: ", majority([2, 3, 4, 5, 6], isOdd)); // should log: false 








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













