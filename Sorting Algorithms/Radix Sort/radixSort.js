function radixSort(arr) {
    return arr
}


// Helpers
/**
 * @function mostDigits -> Number of Digits in Largest Numbers in Array
 * @function digitCount -> Number of Digits in a Number
 * @function getDigit -> Digit at given place
 * @function getDigit2 -> Digit at given place
 */

function mostDigits(arr) {
    let most = 0
    for (let i = 0; i < arr.length; i++) {
        most=Math.max(most,digitCount(arr[i]))
    }
    return most
}

function digitCount(num) {
    if(num===0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function getDigit(num,i) {
    return  Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

function getDigit2(num,i) {
    num = num.toString().split("").reverse()
    return num[i] ? parseInt(num[i]) : 0
}