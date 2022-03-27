let c = {
  f: function(value){
    //return 5/9 * (value - 32)
    return (value * 9/5) + 32
  }
}

console.info(c.f(45))
