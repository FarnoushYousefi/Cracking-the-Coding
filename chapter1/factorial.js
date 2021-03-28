// function factorial(num){
//     let total=1;
//     for(let i=num;i>1;i--){
//         total*=1
//     }
//     return total;
// }

// console.log(factorial(4));

// wite the recursive
function factorial(num){

    let total=0
    if(num==1){
        return 1;
    }else
      total=num*factorial(num-1);

    return total;
}
console.log(factorial(4));