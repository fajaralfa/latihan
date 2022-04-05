function palindrome(str){
  let findex = 0
  let strLen = str.length - 1
  let flag = 0
  for(let i=0; i < str.length/2; i++){
    if(str[i] === str[strLen]){
      flag=0
      findex++; strLen--
    }else{
      flag=1
      break
    }
  }
  if(flag===0){
    console.info(`${str} is a palindrome`)
  }else{
    console.info(`${str} is not a palindrome`)
  }
}

palindrome('anjay')
palindrome('tamat')
palindrome('fajar')
palindrome('fajaf')

/*function palindrome2(str){
  let revLen = str.length-1
  let i = 0
  let tanda
  for(;i<str.length/2;){
    //console.info(`${str[i]} and ${str[revLen]}`)
    if(str[i]===str[revLen]){
      tanda = 0
      i++
      revLen--
    }else{
      tanda = 1
      break
    }
  }if(tanda === 0){
    console.info(str+' is palindrome')
  }else{
    console.info(str+' is not palindrome')
  }
}*/
