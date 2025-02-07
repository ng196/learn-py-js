
// map filter reduce methods : provides new array after changing the original arrays  
let arr = [1,2,3,20,50,126,2,4,42,2,5,2,5]

// let m =  arr.map((item => {
//     return ( item * 2 )
// }))
// console.log('m', m);


// let f = arr.filter((item => {
//     return item%10==0
// }))
// console.log(f)

// let r =  arr.reduce((i , j)=>{
//     return i+j
// })
// console.log(r)

let num = [1,2,3,4,5,6,7,8]

// calculate 8 factorial using reduce method

let num2 =  num.reduce((i , j) =>{
    do{return i*j} while(i!=6)

})

console.log(num2)