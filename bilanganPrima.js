let value = 5
let flag = 0
let hValue = value/2

if(value === 0 || value === 1) {
  console.info(`${value} bukan bilangan prima\n`)
  flag = 1
}else {
  for(let i = 1; i <=hValue; i++) {
    if(hValue%2 === 0) {
      console.log(`${value} bukan bilangan prima`)
      flag = 1;
      break;
    }
  }
}
if(flag === 0) {
  console.info(`${value} adalah bilangan prima`)
}


lett()
function lett() {
  console.log(flag)
}
