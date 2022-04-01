let a = 3 //variable with value
const PI = 22/7 //constant variable
console.info(a + ' is three') //print variable with string to console
let sayHello = function(name, nu){ //function(anonymous)
  console.info(`hello ${name}`)
  return nu * nu // return value
}
sayHello('fajar') //calling the function

sayHello = function(nu){ //redefining function
  return nu * nu
}
let nu = 3
console.info(`${nu} kuadrat = ${sayHello(nu)}`) //printing the return value
