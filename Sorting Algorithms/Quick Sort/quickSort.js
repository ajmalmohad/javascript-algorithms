function quickSort(arr,start,end) {
    if(start>=end)return
    if(!arr.length)return []
    let index = pivotPosition(arr,start,end)
    quickSort(arr,start,index-1)
    quickSort(arr,index+1,end)
    return arr
}

function pivotPosition(arr,start,end) {
    pivotIndex = start
    pivot = arr[end]
    for (let i = start; i <= end; i++) {
        if(arr[i]<pivot){
            arr = swap(arr,i,pivotIndex)
            pivotIndex++
        }
    }
    arr = swap(arr,pivotIndex,end)
    return pivotIndex
}

function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
    return arr
}

module.exports = quickSort