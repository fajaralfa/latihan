function rekursif(value){
  if(value < 2) {
    return 1
  }
  return value * rekursif(value - 1)
}
console.info(rekursif(5))
let faktorialRekursif = rekursif
console.info(faktorialRekursif(5))
