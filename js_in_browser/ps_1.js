// make a game to play rock-paper-scissor , 

let b = Number.parseInt((Math.random()*100 %3))+1

const c = b==1?"rock" : b==2 ? "paper" : b==3 ? "scissor" : " input not valid " ;; ;  

console.log(c)


let i = prompt("enter your inout : \n 1:rock , 2:paper , 3:scissor \n ,or type the word ").toLowerCase()

let result = (i , c) => {
    let r = "rock" 
    let p = "paper" 
    let s = "scissor"
    if(i==r && c == p ){return "lose"}
    else if(i==r && c == s ){return "won"}
    else if(i==p && c == s ){return "lose"}
    else if(i==p && c == r ){return "won"}
    else if(i==s && c == r ){return "lose"}
    else if(i==s && c == p ){return "won"}
}

console.confirm(`you :  ${result(i , c ).toUpperCase()}!` )