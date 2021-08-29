//Utility Swap
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
    return arr
}

//My Selection Sort
function selectionSort(arr) {
    let start = 0
    for (let i = 0; i < arr.length; i++) {
        let minIndex = start
        for (let j = start; j < arr.length; j++) {
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
            console.log(arr);
        }
        arr = swap(arr,start,minIndex)
        start++
        console.log(i+1 ,' Pass Complete');
    }
    return arr
}
console.log(selectionSort([7,2,6,9,-7,3]));