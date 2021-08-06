//My MultiPointer Approach to Unique Value Counter
function countUniqueMultiPointer(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let front = i;
        let lead = i+1;
        if(array[lead] === null)
        {
            if(array[front] === array[front-1]){
                continue
            }else{
                count++
            }
        }
        else if(array[lead] === array[front]){
            continue;
        }
        else{
            count++;
        }
    }
    return count
}

//My Fast Solution using a Variable to track Unique
function countUniqueCount(array){
    let count = 0
    let unique = array[0]
    for (let i = 0; i < array.length; i++) {
        if(i===0){
            count++
        }
        if(array[i]===unique){
            continue
        }else if(array[i] !== unique){
            unique = array[i]
            count++
        }
    }
    return count
}

//MultiPointer but without a new variable
function countUnique(array){
    if(array.length === 0) return 0;
    let main = 0
    for (let i = 1; i < array.length; i++) {
        if(array[i]!==array[main]){
            main++
            array[main]=array[i]
        }
    }
    return main+1
}