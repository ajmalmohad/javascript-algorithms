//My Worst Solution 
//Time Complexity O(n^2)
function maxSubArrayNest(array,number){
    let maxSum = -Infinity;
    if(number<array.length){
        for (let i = 0; i <= array.length - number; i++) {
            let sum = 0;
            for (let j = i; j < i+number; j++) {
                sum+=array[j]
            }
            if(sum>maxSum){
                maxSum = sum
            }
        }
        return maxSum
    }
    return null
}

//My Sliding Window Approach 
function maxSubArray(array,number){
    let maxSum = 0;
    let tempSum = 0;
    if(number>array.length){
        return null
    }
    for (let i = 0; i < number; i++) {
        maxSum += array[i]
    }
    tempSum = maxSum
    for (let j = 0; j < array.length; j++) {
        tempSum = tempSum - array[j] + array[j+number]
        if(tempSum>maxSum){
            maxSum = tempSum
        }
    }
    return maxSum
}

//Little More Optimized Sliding Window
function maxSubArray(array,number){
    let maxSum = 0;
    let tempSum = 0;
    if(number>array.length) return null;
    for (let i = 0; i < number; i++) {
        maxSum += array[i]
    }
    tempSum = maxSum
    for (let j = 0; j < array.length; j++) {
        tempSum = tempSum - array[j] + array[j+number]
        maxSum = Math.max(tempSum,maxSum)
    }
    return maxSum
}