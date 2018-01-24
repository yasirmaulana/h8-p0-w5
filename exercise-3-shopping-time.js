/*
Logic Challenge - Shopping Time!
Problem
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number.
Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:
1. Sepatu brand Stacattu seharga 1.500.000
2. Baju brand Zoro seharga 500.000
3. Baju brand H&N seharga 250.000
4. Sweater brand Uniklooh seharga 175.000
5. Casing Handphone seharga 50.000

Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

1. Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
2. Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
3. Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu
dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

Code
*/

function shoppingTime(memberId, money) {
  if(memberId===0 || memberId==='' || memberId===undefined){
    // console.log('Mohon maaf, toko X hanya berlaku untuk member saja')
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  else if(money<50000){
    // console.log('Mohon maaf, uang tidak cukup')
    return 'Mohon maaf, uang tidak cukup'
  }
  else {

    var arrlistPurchased = []
    var harga = 0
    var kembalian = 0
    var uang = money
    var jmlSepatu = 0
    var jmlBZoro = 0
    var jmlBHN = 0
    var jmlSweater = 0
    var CasingHP = 0
    while(uang>=50000){
      // console.log(">>>>>>>> " + uang)
      if(uang>=1500000 && jmlSepatu === 0){
        arrlistPurchased.push('Sepatu Stacattu')
        harga = 1500000
        kembalian = uang-harga
        jmlSepatu = 1
      }
      else if(uang>=500000 && jmlBZoro === 0){
        arrlistPurchased.push('Baju Zoro')
        harga = 500000
        kembalian = uang-harga
        jmlBZoro = 1
      }
      else if(uang>=250000 && jmlBHN === 0){
        arrlistPurchased.push('Baju H&N')
        harga = 250000
        kembalian = uang-harga
        jmlBHN = 1
      }
      else if(uang>=175000 && jmlSweater === 0){
        arrlistPurchased.push('Sweater Uniklooh')
        harga = 175000
        kembalian = uang-harga
        jmlSweater = 1
      }
      else if(uang>=50000 && CasingHP === 0){
        arrlistPurchased.push('Casing Handphone')
        harga = 50000
        kembalian = uang-harga
        CasingHP = 1
      }

      uang -= harga
    }

    // var cek = arrlistPurchased.join('')
    // console.log(cek)
    var dataBelanjaan = {memberId:memberId, money:money, listPurchased:arrlistPurchased, changeMoney: kembalian}
    // console.log(dataBelanjaan)
    return dataBelanjaan

  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
