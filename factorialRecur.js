//My Factorial in Recursion Approach
function factorial(n){
    if(n<1) return 0;
    if(n===1)return 1;
    return n*factorial(n-1);
}

console.log(factorial(10));