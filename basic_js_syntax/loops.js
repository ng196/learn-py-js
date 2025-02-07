// a few loops , for loop , for in loop , for of loop , while loop, do-while loop

let obj = {
    name:"nitin",
    age:"hello"
}

for(let i in obj){
    console.log("value of" , i , "is" , obj[i])
}

for(let i of obj.name){
    console.log(i)
}

// in "for of ", the item should be iterable 
let i = 20 
while(i<5){
    console.log(23)
    i++
}

do {console.log(23)
    i--
} while (i>10)

// array loops : forEach loop , for...in loop , for...of loop , 

let arr = [1,3,7,2,5,"nitin"]
 
arr.forEach((Element) => {
    console.log("value is" , Element)  //forEach syntax : forEach(value , index , array)
})
// forEach example


for(i in arr){                                      // for..in , gives the keys , and in an array the index are the keys of that entry 
    console.log("key value is " , i )
}

for(i of arr) {
    console.log("value of " , i )                             // for..of loop gives the values in an array , and the index are the keys of that entry

}