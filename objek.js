let orang = {
  nama: 'fajar',
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
  console.info(`${this.nama} ${this.umur} tahun random ${samting}`)
}
orang.sebuahFungsi(23)
