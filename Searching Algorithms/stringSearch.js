//My Naive Approach
//Time Complexity O(n^2)
function stringSearchNaive(main,subs) {
    for (let i = 0; i < main.length; i++) {
        if(main[i]===subs[0]){
            let count=1
            for (let j = 1; j < subs.length; j++) {
                if(subs[j]===main[i+j]) count++;

            }
            if(count===subs.length) return "Contains"
        }
    }
    return "Doesn't Contain"
}

//More Efficient Solution
//Time Complexity O(n)
function stringSearch(main,subs){
    let count = 0;
    for (let i = 0; i < main.length; i++) {
        if(main[i]===subs[count]) count++;
        else if(count>0) count--;
        if(count===subs.length) return "Contains"
    }
    return "Doesnt Contain"
}