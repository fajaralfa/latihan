let orang = {
  nama: 'Fajar',
  'alamat': 'Tasikmalaya',
  umur: 16,
  sebuahFungsi: function() {
    console.info('terbang')
  }
}

console.info(orang)
console.info('-----------------')
console.info(orang.nama)
console.info(orang.umur)
orang.sebuahFungsi()
orang.sebuahFungsi = function(samting) {
  console.info(`${this.nama} ${this.umur} dari ${samting}`)
}
orang.sebuahFungsi(orang.alamat)
console.table(orang)

for(data in orang){
  console.info(data)
}
