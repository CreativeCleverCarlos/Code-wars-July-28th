/**
 Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
**/


function binaryArrayToNumber(arr) {
    let toAString = arr.toString() //to convert a array into a string, just use the .toString() method
    let removeCommas = toAString.replace(/\,/g, "");
    let toBinary = parseInt(removeCommas, 2);
    return toBinary
  }

  console.log(binaryArrayToNumber([1,1,1,1]))

age = 26

// let beverage = age >= 21 ? "Beer" : "Juice";