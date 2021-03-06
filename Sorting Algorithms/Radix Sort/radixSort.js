function radixSort(arr) {
    let maxDigits = mostDigits(arr)
    for (let k=0; k<maxDigits; k++) {
        let buckets = Array.from({length:10},()=>[])
        for (let j = 0; j < arr.length; j++) {
            buckets[getDigit(arr[j],k)].push(arr[j]);
        }
        arr = [].concat(...buckets)
    }
    return arr
}


// Helpers
/**
 * @function mostDigits -> Number of Digits in Largest Numbers in Array returned
 * @function digitCount -> Number of Digits in a Number returned
 * @function getDigit -> Digit at given place returned
 * @function getDigit2 -> Digit at given place returned
 * @function seperateNegatives -> Negative and Positive Seperate Arrays returned
 * @function radixSortwithNegatives -> Sorts Arrays Including Negative Numbers
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

function seperateNegatives(arr){
    let arrPos = []
    let arrNeg = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0){
            arrNeg.push(arr[i])
        }else{
            arrPos.push(arr[i])
        }
    }
    return [arrPos,arrNeg]
}

function radixSortwithNegatives(arr){
    [arrPos,arrNeg] = seperateNegatives(arr)
    arrPos = radixSort(arrPos)
    arrNeg = radixSort(arrNeg).reverse()
    let result = arrNeg.concat(arrPos)
    return result
}