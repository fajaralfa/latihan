const prompt = require('prompt-sync')()
let sayAnjay = function(cnt){
  for(let i=0;i<cnt;i++){
    console.info('anjay')
  }
}
cnt = prompt('berapa kali? ')
sayAnjay(cnt)
