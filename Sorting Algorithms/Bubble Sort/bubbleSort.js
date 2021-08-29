//Utility
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
    return arr
}

function bubbleSort(arr) {
    for (let i=arr.length-1; i>=0; i--) {
        for (let j=0; j<i; j++) if(arr[j] > arr[j+1]) arr=swap(arr,j,j+1);
    }
    return arr
}
console.log(bubbleSort([29,10,8,30,37,14,18]));