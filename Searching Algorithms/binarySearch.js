//My Binary Search
function binarySearch(arr,val) {
    let start = 0
    let end = arr.length - 1
    while(start<=end){
        let mid = Math.floor((end + start)/2)
        if(arr[mid]===val) return mid;
        if(val>arr[mid]) start=mid+1;
        if(val<arr[mid]) end=mid-1;
    }
    return -1
}
