//My Solution - O(n^2)
function same1(normal,squared){
    if(normal.length === squared.length){
        for (let i = 0; i < normal.length; i++) {
            let numsquare = normal[i]**2;
            if(squared.includes(numsquare)){
                squared.splice(squared.indexOf(numsquare),1);
            }else{
                return false;
            }
        }
        return squared.length? false: true;
    }else{
        return false;
    }   
}

//My Different Approach - O(n^2)
function same2(normal,squared){
    if(normal.length !== squared.length){
        return false;
    }
    for (let i = 0; i < normal.length; i++) {
        let index = squared.indexOf(normal[i]**2);
        if(index === -1){
            return false;
        }
        squared.splice(index,1);
    }
    return true;  
}

//Optimal Solution - O(n)
function same(normal, squared) {
    if(normal.length !== squared.length){
        return false;
    }
    let fCounter1 = {}
    let fCounter2 = {}
    for (const val of normal) {
        fCounter1[val] = (fCounter1 || 0) + 1
    }
    for (const val of squared) {
        fCounter2[val] = (fCounter1 || 0) + 1
    }
    for(const key in fCounter1){
        if(!fCounter2[key**2]){
            return false;
        }
        if(fCounter2[key**2] !== fCounter1[key]){
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3], [1, 9, 4]));//True
console.log(same([1, 2, 3], [4, 9, 4])); //False