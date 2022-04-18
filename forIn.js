let buah = {
  tipe: 'cau',
  warna: 'oren',
  kondisi: 'secondhand',
  fungsi: function() {
    return 'lieur'
  }
}
let buahh = ['cau', 'nangka', 'ganas']

for(const property in buah){
  console.info(`${property}: ${buah[property]}`)
}

console.info(`----------------------------`)
for(const index in buahh){
  console.info(`${index}: ${buahh[index]}`)
}
//for in is not suitable for array use for of instead
