function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray){
    let hasil = []
    let dataLength = dataArray.length -1
    let angka = 0;
    if(dataLength > 5){
        if(nilaiAwal < nilaiAkhir){
            for(let i = 0; i <= dataLength; i++ ){
                if(dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir){
                    let temp = dataArray[i]
                    hasil[angka] = temp
                    angka++
                }else{
                    console.log('Tidak ada data yg sesuai kondisi')
                }
            }
        }else{
            console.log("Nilai Akhir Harus Lebih Besar")
        }
    }else{
        console.log('Array Harus lebih dari 5')
    }

    return console.log(hasil)
}


seleksiNilai(5,20,[2,25])

