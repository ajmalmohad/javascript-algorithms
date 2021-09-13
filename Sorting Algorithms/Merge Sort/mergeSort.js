//Merge Sort
function mergeSort(arr) {
    return arr
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
        }else if(arr1[i]===arr2[j]){
            results.push(arr1[i])
            results.push(arr2[j])
            i++
            j++
        }

        if(i===arr1.length){
            for (let k = j; k < arr2.length; k++) results.push(arr2[k])
        }else if(j===arr2.length){
            for (let k = i; k < arr1.length; k++) results.push(arr1[k])
        }
    }

    return results
}

console.log(merge([1,2,5,6],[-1,3,4,7,8,9,10]));