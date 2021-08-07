//My Worst Solution 
//Time Complexity O(n^2)
function maxSubArray(array,number){
    let max = array.length - number;
    let maxSum = 0;
    if(number<array.length){
        for (let i = 0; i < max; i++) {
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
}

console.log(maxSubArray([4,2,1,6,2],1));
