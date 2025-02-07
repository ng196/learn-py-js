// creating a string : single quote , double quote, template literal 

// string interpolatin : using a string variable as placeholder 

let first_name = "nitin"    
let last_name = 'goyal'
let full_name = `your full name is ${first_name} ${last_name}`
let myname = "nitin" + " " + 'goyal'


// using backtick (`---`) is called template literal , and allow us to use string interpolation and single and
// double quotes in a string without using escape sequences , 

console.log(full_name)
console.log(myname)


// string methods : common methods , length , slice , replace , concat , trim , toUpperCase , toLowerCase , etc 
// strings are immutable and cannot be changed

console.log(first_name.toUpperCase())

// NITIN 

console.log(first_name.toUpperCase().toLowerCase())

// nitin 

console.log(myname.slice(0,5))

// nitin 

console.log(myname.slice(6))

// goyal

console.log("    nitin goyal    ".trim())

// nitin goyal , only trims , leading and trailing white spaces 

console.log(first_name.replace("nit" , "pit"))

// pitin

console.log(first_name.concat(" " , last_name , ` is my full name`))

// nitin goyal is my full name 