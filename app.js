// Part 1: Take an array of numbers and return the sum.

let arr = [5,10,2,4,3,6]
let sum = 0

function arrSum(array){
    for( let i = 0; i < array.length; i++){
     sum += array[i]
    }
    return sum;
}
console.log(`The sum of the array is ${arrSum(arr)}.`)

//Take an array of numbers and return the average.
let  avg = 0

function arrAvg(array){
    for( let i = 0; i < array.length; i++){
    avg = sum/array[i]
    }
    return avg;
}
console.log(`The average of the array is ${arrAvg(arr)}.`)

//Take an array of strings and return the longest string.
let strArr = ["Hello", "How", "are", "you"]
let strlength = ""
function longestStr(str){
    for( let i = 0; i < str.length; i++){
    if( typeof str[i] === "string" && str[i].length > strlength.length){
        strlength = str[i]
    }
   return strlength
}
}
console.log(longestStr(strArr))