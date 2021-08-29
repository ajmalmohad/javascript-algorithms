//Utility Swap
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
    return arr
}

//Optimized bubble sort
//Time Complexity - O(n^2)
function bubbleSort(arr) {
    for (let i=arr.length-1; i>=0; i--) {
        let swapped = false;
        for (let j=0; j<i; j++){
            if(arr[j] > arr[j+1]){
                arr=swap(arr,j,j+1);
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr
}
console.log(bubbleSort([7,2,3,4,5,6]));