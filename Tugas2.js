function searchName(filter,total,callback) {
    if(typeof filter === 'string' && typeof total === 'number'){

        const data = [
            'Abigail', 'Alexandra', 'Alison',
            'Amanda', 'Angela', 'Bela', 'Carol',
            'Caroline', 'Carolyn', 'Deidre',
            'Diana', 'Elizabeth', 'Ella',
            'Faith', 'Olivia', 'Penelope'
        ]
    
        let dataLength = data.length - 1
    
        let hasil = []
    
        let angka = 0;
    
        let newFilter = new RegExp(filter,"gi")
    
        for (let i = 0; i <= dataLength; i++) {
            if (data[i].match(newFilter)) {
                let temp = data[i]
                hasil[angka] = temp
                angka++
            }
        }
        callback(hasil,total)
    }else{
        console.log('Please input with a valid input')
    }
}



function shortName(hasil, total){
    let semuaData = []
    for(let a = 0; a < total; a++){
        let temp = hasil[a]
        semuaData[a] = temp
    }

    console.log(semuaData)
}


searchName("an",3,shortName)