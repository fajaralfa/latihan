class PC{
  constructor(processor,mobo,ram){
    this.processor=processor
    this.mobo=mobo
    this.ram=ram
  }
}

let mypc = new PC('intel','asus','8gb')
console.info(mypc.processor)
