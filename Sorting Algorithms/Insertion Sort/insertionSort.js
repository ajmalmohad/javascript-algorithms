//My Insertion Sort
function insertionSort(arr) {
    for (let i = arr.length-1; i >=0; i--) {
        for (let j=i; j>=0; j--) {
            if(arr[i]<arr[j] && (arr[i]>arr[j-1] || j==0)){
                let elem = arr.splice(i,1);
                arr.splice(j,0,elem[0])
                i++;
            }
        }
    }
    return arr
}

console.log(insertionSort([5,10,2,-1,9]));