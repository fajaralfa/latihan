let value

//menggunakan perulangan
let faktorial = function(value){
  let temp = 1
  for(let i = value; i>0; i--){
    temp = temp * i
  }
  console.info(temp)
}
faktorial(5)

//menggunakan recursive function
function fakRekur(value) {
  if(value < 2) {
    return 1
  }else{
    return value * fakRekur(value-1)
  }
}
console.info(faktorial(5))
