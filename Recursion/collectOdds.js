//Helper Method Recursion
function collectOddsHelper(arr){
    let result = []
    function collector(elem){
        if(elem.length===0) return;
        if(elem[0]%2 !== 0) result.push(elem[0]);
        collector(elem.slice(1))
    }
    collector(arr)
    return result;
}

console.log(collectOdds([0,-1,2,3,4,5,6,7,8,9,10]));

//Pure Recursion
function collectOdds(arr){
    let newArr = []
    if(arr.length===0) return newArr;
    if(arr[0]%2 !== 0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOdds(arr.slice(1)))
    return newArr
}

/**
for [1,2,3,4,5]
[1].concat(collectOdds([2,3,4,5]))
[].concat(collectOdds([3,4,5]))
[3].concat(collectOdds([4,5]))
[].concat(collectOdds([5]))
[5].concat(collectOdds([]))
[]

[1].concat([])
[1].concat([3])
[1,3].concat([])
[1,3].concat([5])
[1,3,5].concat([])
[1,3,5]
 */