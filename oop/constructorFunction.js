let Orang = function(firstName, ...lastName){
  this.firstName = firstName
  this.lastName = lastName
  this.sayHello = function(fName, ...lName){
    console.info(`halo ${fName} my name is ${firstName}`)
  }
}

let fajar = new Orang('fajar','ilham','alfarizi')
fajar.sayHello('hmm','hmm')
