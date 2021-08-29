//Utility Swap
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
    return arr
}

//My Selection Sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if(arr[minIndex]>arr[j]) minIndex = j
        }
        if(minIndex!==i) arr=swap(arr,i,minIndex);
    }
    return arr
}
console.log(selectionSort([7,2,6,9,-7,3]));