//My solution the worst one
function sumArray1(sortedArray){
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length; j++) {
            if(sortedArray[i]===sortedArray[j]){
                continue;
            }
            if(sortedArray[i]+sortedArray[j]===0){
                return [sortedArray[i],sortedArray[j]]
            }
        }
    }
    return undefined
}


//Naive solution Still better than mine
function sumArray2(sortedArray){
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = i+1; j < sortedArray.length; j++) {
            if(sortedArray[i]+sortedArray[j]===0){
                return [sortedArray[i],sortedArray[j]]
            }
        }
    }
}

//My Own Multiple Pointer Approach
function sumArray3(sortedArray){
    let notFound = true
    let front = 0
    let back = sortedArray.length - 1
    while(notFound){
        if(sortedArray[front]+sortedArray[back] === 0){
            return [sortedArray[front],sortedArray[back]]
        }
        if(sortedArray[front]+sortedArray[back] < 0){
            front += 1
        }
        if(sortedArray[front]+sortedArray[back] > 0){
            back -= 1
        }
        if(sortedArray[front]===sortedArray[back]){
            return undefined
        }
    }
}


//More Optimized Multiple Pointer Approach
//Time Complexity O(n)
//Space Complexity O(1)
function sumArray(sortedArray){
    let front = 0
    let back = sortedArray.length - 1
    while(front<back){
        let sum = sortedArray[front]+sortedArray[back];
        if(sum === 0){
            return [sortedArray[front],sortedArray[back]]
        }else if(sum < 0){
            front++
        }
        else{
            back--
        }
    }
}