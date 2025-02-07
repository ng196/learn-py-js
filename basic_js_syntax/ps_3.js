// make an array of numbers and take input from the user 

let arr = [2,4,52,1 , 100 , 10 , 1000 , 20 , "nitin" , `goyal`]

// alert(`the array is : [${arr}] , please enter element's to add , enter "exit" to exit the input window`)



// while(true){
//     let b = prompt("enter element : ")
//     if(b.trim().toLowerCase() == "exit"){
//         break 
//     }
//     arr.push(Number(b))
//     alert(`your new array is : [${arr}] , please enter more elements to add or enter "exit" 
//         to exit the input window`)
// }

// filter from the given array , numbers that are devisable by 10 

// let ar = arr.filter(a%10==0)

// console.log(ar)

let num =  50 // Number.parseInt(Math.random()*100 )
let chances = 0 
while(true){
let input = Number(prompt("enter the number : "))
if(input==num){alert("you have guesses correct , your score is :" , (100 - chances))
    break 
}
else if (input<num) {  alert("go higher" )  }
else { alert("go lower")}
chances++
}