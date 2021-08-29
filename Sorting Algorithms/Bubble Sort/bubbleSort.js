//Utility
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
    return arr
}

function bubbleSort(arr) {
    for (let i=arr.length-1; i>=0; i--) {
        let swapped = false;
        for (let j=0; j<i; j++){
            if(arr[j] > arr[j+1]){
                arr=swap(arr,j,j+1);
                swapped = true;
            }
        }
        console.log(arr);
        if(!swapped) break;
    }
    return arr
}
console.log(bubbleSort([7,2,3,4,5,6]));