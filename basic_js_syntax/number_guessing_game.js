let num =  Number.parseInt(Math.random()*100 )
let chances = 0 
while(true){
let input = Number(prompt("enter the number : "))
if(input==num){console.log("you have guesses correct , your score is :" , 100 - chances)
    break 
}
else if (input<num) {  alert("go higher" )  }
else { alert("go lower")}
chances++
}