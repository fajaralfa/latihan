function nama(nDepan, ...nBelakang) {
  let i = 0
  process.stdout.write(`hai ${nDepan} `)//tidak benar
  for(const panjang of nBelakang) {
    process.stdout.write(`${nBelakang[i]} `)
    i++
  }
  console.info()
}

nama('fajar','ilham','alfarizi')
