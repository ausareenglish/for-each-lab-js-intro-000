/**
 * A function that accepts an array and invokes forEach method to log each each item in the array in the following format:${index}: ${element}.
 * params {array} array
 * params { () =>}  arrow function param
 * params {currentValue} currentValue
 * params {index} index
 **/
 // initialize function 
function iterativeLog(array) {
   // invoke forEach method on array.
   // which accepts callback arrow function that accepts currentValue & index params and console.logs each item in the array in the following format: `${index}: ${currentValue}`
   
   array.forEach((currentValue, index) => {
    
     
     console.log(`${index}: ${currentValue}`);
     
     
   })
  
  
}
