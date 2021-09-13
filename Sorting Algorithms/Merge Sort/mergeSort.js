//Merge Sort
function mergeSort(arr) {
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))  

    return merge(left,right)
}

//Export for Test Driven Development
module.exports = mergeSort

//Combine Two sorted Array to One Sorted Array
function merge(arr1,arr2){
    let results=[]
    let i = 0
    let j = 0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            results.push(arr1[i])
            i++
        }else if(arr1[i]>arr2[j]){
            results.push(arr2[j])
            j++
        }else{
            results.push(arr1[i])
            results.push(arr2[j])
            i++
            j++
        }
    }

    while(i<arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        results.push(arr2[j])
        j++
    }

    return results
}