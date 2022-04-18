for(let i=1;i<=100;i++){
  if(i%3===0){
    process.stdout.write(`Fizz `)
  }else if(i%5===0){
    process.stdout.write(`Buzz `)
  }else if(i%3===0 && i%5===0){
    process.stdout.write(`FizzBuzz `)
  }else{
    process.stdout.write(`${i} `)
  }
}
console.info()
