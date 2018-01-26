/*
Logic Challenge - Total Digit (Rekursif)
Problem
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka.
Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang.
Wajib menggunakan rekursif untuk berlatih rekursif!
Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512,
berarti outputnya adalah 8,
karena 5 + 1 + 2 = 8.

1542,
berarti outputnya adalah 12,
karena 1 + 5 + 4 + 2 = 12.

Code
*/
//menggunakan looping
// function totalDigitRekursif(angka) {
//
//   var stringAngka = angka.toString()
//   var jumlahAngka = 0
//   for(var i=0; i<stringAngka.length; i++){
//     // console.log(stringAngka[0])
//     var numberAngka = parseInt(stringAngka[i])
//     jumlahAngka += numberAngka
//     // console.log(jumlahAngka)
//   }
//   return jumlahAngka
// }

//menggunakan rekursive
function totalDigitRekursif(angka) {
  // var stringAngka = angka.toString()
  var jmlStringAngka = angka.toString().length
  // console.log(jmlStringAngka);
  // var irisan = parseInt(angka.toString().split('').slice(0,1).join())
  // console.log(irisan)
  var arrAngka = angka.toString().split('')
  var irisan = parseInt(arrAngka.slice(0,1))
  // console.log(irisan)
  // var irisanke2number = angka.toString().split('').slice(1,parseInt(jmlStringAngka))
  // var irisanke2number = parseInt(irisanke2.join(''))
  // console.log(irisanke2number)
  var irisanke2 = arrAngka.slice(1,parseInt(jmlStringAngka))
  var irisanke2number = parseInt(irisanke2.join(''))
  // console.log(irisanke2number)


  if(jmlStringAngka === 1){
    return angka
  }
  else {
    return irisan + totalDigitRekursif(irisanke2number)
  }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
