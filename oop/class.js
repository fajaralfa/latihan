class Hero{
  //pembuatan cetakan
  constructor(name, kelas){
    super.name = name
    super.kelas = kelas
  }
}

class Veteran extends Hero{
  //inheritance
}

const saitama = new Hero() //objek instance (hasil cetakan)
const bulasto = new Veteran('bulasto','s') //sama

saitama.name = 'saitama'
saitama.kelas = 'b'

console.info(saitama)
console.info(bulasto)

for(const all in saitama){
  console.info(`${all}: ${saitama[all]}`)
}
