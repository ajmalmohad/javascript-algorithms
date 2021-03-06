//My Naive Approach
//Time Complexity O(n^2)
function stringSearchNaive(main,subs) {
    let matches = 0
    for (let i = 0; i < main.length; i++) {
        if(main[i]===subs[0]){
            let count=1
            for (let j = 1; j < subs.length; j++) {
                if(subs[j]===main[i+j]) count++;
            }
            if(count===subs.length){
                count=1;
                matches++;
            }
        }
    }
    return matches ? `${matches} Matches` : "Doesn't Contain"
}

//More Efficient Solution
//Time Complexity O(n)
function stringSearch(main,subs){
    let count = 0;
    let match = 0;
    for (let i = 0; i < main.length; i++) {
        if(main[i]===subs[count]) count++;
        else if(count>0) count=0;
        if(count===subs.length){
            count=0;
            match++;
        }
    }
    if(match) return `Contains ${match} Matches`;
    return "Doesnt Contain"
}