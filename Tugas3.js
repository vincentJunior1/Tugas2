function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray){
    let hasil = []
    let dataLength = dataArray.length -1
    let angka = 0;
    if(nilaiAwal < nilaiAkhir){
        for(let i = 0; i <= dataLength; i++ ){
            if(dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir){
                let temp = dataArray[i]
                dataArray[i] = hasil[angka]
                hasil[angka] = temp
                angka++
            }
        }
    }else{
        console.log("Nilai Akhir Harus Lebih Besar")
    }

    return console.log([nilaiAwal,nilaiAkhir,hasil])
}


seleksiNilai(5,20,[2,25,4,14,17,30,8])

