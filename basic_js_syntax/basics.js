// data types : primitive : nn bb ss u  , secondary : objects etc 
// primitive : null , number , boolean , BigInt , string , symbol , undefined\

// objects : 

const me = {
    "name":"nitin",
    "age":18,
    "alive":true,
    "random":undefined,
}

console.log(me["name"]);

// q. create a string and add a number to it , and find it's type 

let str = "nitin"

// // console.log('23' + 23 + 23) = 232323
// // console.log(23 + '23' + 23) = 232323
// // console.log(23 + 23 + '23') = 4623

console.log(typeof str)

// q. create a const onject in js , can you change it's type to integer 

// let onj be an object name , it's a pointer to the values inside and cannot be changed , but the key value's can be changed , 
// you can add new entries also 

// let obj = {
//     name:"nitin",
//     age:18
// }

// console.log(obj) = { name: 'nitin', age: 18 }

// obj['IsHuman'] = true
// obj['age'] = 19

// console.log(obj) = { name: 'nitin', age: 19, IsHuman: true }

// 41/10 = 4.1  , no truncation 
