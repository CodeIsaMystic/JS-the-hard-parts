


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













