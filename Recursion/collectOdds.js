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