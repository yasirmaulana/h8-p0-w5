/*
Logic Challenge - Toko X
Problem
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

1. Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
2. Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
3. Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1

Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya).
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut
yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

*/
function countProfit(shoppers) {
  var listBarang = [['Sepatu Stacattu', 1500000, 10], ['Baju Zoro', 500000, 2], ['Sweater Uniklooh', 175000, 1]];

  //membuat array untuk masing-masing array
  var arrSepatu = listBarang[0]
  var arrBaju = listBarang[1]
  var arrSweater = listBarang[2]

  //menyiapkan array untuk menampung objek lis barang
  objLisBarang = []

  //menyiapkan objek untuk masing-masing barang
  var objSepatu = {
                    product:arrSepatu[0],
                    shoppers:[],
                    leftOver:arrSepatu[2],
                    totalProfit:0
                  }

  var objBaju =   {
                    product:arrBaju[0],
                    shoppers:[],
                    leftOver:arrBaju[2],
                    totalProfit:0
                  }

  var objSweater = {
                      product:arrSweater[0],
                      shoppers:[],
                      leftOver:arrSweater[2],
                      totalProfit:0
                   }

   //proses
   for(var i=0; i<shoppers.length; i++){

     var shoppersName = shoppers[i].name
     var shoppersProduk = shoppers[i].product
     var shoppersAmount = shoppers[i].amount
     //cek jika shoppers.product = listBarang dan stok >= dari amount
     //jika produk sepatu
     if(shoppersProduk === objSepatu.product && objSepatu.leftOver >= shoppersAmount){
      objSepatu.shoppers.push(shoppersName)
       objSepatu.leftOver -= shoppersAmount
       objSepatu.totalProfit += shoppersAmount * arrSepatu[1]
       // console.log(objSepatu.leftOver)
       // break
     }
     //jika produk baju
     else if(shoppersProduk === objBaju.product && objBaju.leftOver >= shoppersAmount){
       objBaju.shoppers.push(shoppersName)
       objBaju.leftOver -= shoppersAmount
       objBaju.totalProfit += shoppersAmount * arrBaju[1]
     }
     //jika produk sweater
     else if(shoppersProduk === objSweater.product && objSweater.leftOver >= shoppersAmount){
       objSweater.shoppers.push(shoppersName)
       objSweater.leftOver -= shoppersAmount
       objSweater.totalProfit += shoppersAmount * arrSweater[1]
     }

   }

   //push ke array untuk masing-masing barang
   objLisBarang.push(objSepatu)
   objLisBarang.push(objBaju)
   objLisBarang.push(objSweater)

   return objLisBarang

}

// TEST CASES
// console.log(countProfit([ {name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
//                           {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
//                           {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
//                         ]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: ['Rani'],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([ {name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
                          {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
                          {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
                          {name: 'Devi', product: 'Baju Zoro', amount: 1},
                          {name: 'Lisa', product: 'Baju Zoro', amount: 1}
                        ]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
// console.log(countProfit([])); //[]
