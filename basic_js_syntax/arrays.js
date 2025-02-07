let array = [1,2,"nitin",'goyal' , `hello`]

let arr = []

for (i in array){
    console.log(array[i])
}

array[2] = "pitin"

console.log(array)

console.log(array.entries)

// array methods : push , pop , shift , unshift , toString , join("-") , concat(a,b,c) , sort : sorts , alphabetically only , splice , slice , delete:operator

// num.toString

let a = [1,2,3,4]
let b = a.toString()
console.log(b)
let c = a.join("-")
console.log(c)

// delete operator : delete's elements withouot changing array length 

delete a[0] // [<emoty item> , 2 , 3 , 4]
a.shift()
delete a[0,2]
a.pop()

console.log(a) // [2,3]


let z = [1,2,6,3,4,678,3663,22]
console.log(z.sort())

let y = ['a' , 'z' , "hello" , "eer" , "aaa" , "aac" ,"aab" ]
console.log(y.sort())

// using sort correctly with a compare function , ex 

let compare = (a,b) => {
    return a-b 
}

console.log(z.sort(compare))

// splice : inputs new elemets at specific index and removes some , modifies array , returnes deleted items  , splice(index , n
// umber of elemets to be deleted , new elements)

// console.log(z.splice(2,0,1101,1102,1103))  // 1 , 2 , 1101 , 1102 , 1103 
// console.log(z)

// slice : returns subarray : slice(starting index , ending index="last element")

console.log(z.slice(2))
console.log(z.slice(2,4))
console.log(z)


//Array.from converts a html collection, or some non array but convertible to array , form to an array 

let myname =  "nitin"

let thisarray = Array.from(myname)

console.log(thisarray)  // [ "n", "i", "t", "i", "n"]


