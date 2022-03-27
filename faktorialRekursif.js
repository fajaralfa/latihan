let value
faktorial = function(value) {
  if(value <= 1){
    return 1
  }else{
    return value*faktorial(value - 1)
  }
}

console.info(faktorial(5))
