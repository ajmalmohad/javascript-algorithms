//Frequency Counter Approach Mine
function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let fCounter1 = {}
    let fCounter2 = {}
    for (letter of str1) {
        fCounter1[letter] ? fCounter1[letter]+=1 : fCounter1[letter]=1
    }
    for (letter of str2) {
        fCounter2[letter] ? fCounter2[letter]+=1 : fCounter2[letter]=1
    }
    for (const key in fCounter1) {
        if(fCounter1[key]!==fCounter2[key]){
            return false
        }
    }
    return true
}

console.log(anagram('anagram','nagaram'))