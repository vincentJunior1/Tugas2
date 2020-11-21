// 1. toFixed adalah function bawaan dari javascript yang berguna untuk membuat
// bilangan decimal(float) menjadi integer

let i = 3.14

let fixedNumber = i.toFixed()

console.log(fixedNumber)

// 2.match adalah function yang digunakan untuk mencari data jika didalam variable itu ada variable yg sesuai kondisi
// contoh

let data = "hello it's ya boi anomali from sweeden"

let dataMatch = data.match(/i/g)

console.log(dataMatch)

// 3. pop adalah function untuk menampilkan index terakhir di array 
// cth

let tipeData = ['string', 'integer', 'boolean']

let tipePop = tipeData.pop()

console.log(tipePop)
4
// 4. map adalah function yang di gunakan untk melooping 
// cth

let newData = ['string', 'integer', 'boolean']

let mapTipe = newData.map(x=> x)

console.log(mapTipe)


// 5. parseFloat adalah membuat integer menjadi tipe data float
// cth

let newI = parseFloat(fixedNumber)

console.log(newI)

// 6.number membuat semua data menjadi number
// cth

let x = '9999'

let numberX = Number(x)


console.log(typeof numberX)

// 7.isFinite function untuk mengecek jika itu number atau bukan walaupun tipe datanya bukan number jika number maka akan mereturn true 

console.log(isFinite(x))


// 8.eval mengesekusi atau menjalankan sebuah argumen

let nomor = 10;
let y = 20;
let z = eval("nomor * y") 

console.log(z)


// 9. foreach built in function perulangan seperti map 
// cth

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// 10. include built in function yang mengecek jika variable yg diberikan itu ada di array yg dipilih dan mereturn false or true
// cth

const array2 = [2,4,5,7,8,9]

console.log(array2.includes(3))