/*
Logic Challenge - Change Me!
Problem
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana
array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year .
Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.
- Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
  - Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]]

maka output:
Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
*/

function changeMe(arr) {
  // var profile = {firstName:'muhammad', lastName:'yasir maulana', gender:'male', age:2018-1986}
  // console.log(profile)
  // var profile = {}
  // console.log(arr[2])
  for(var i=0; i<arr.length; i++){
    arrSub = arr[i]
    // console.log(arrSub[2])
    if(arrSub[3]===0 || arrSub[3]==='' || arrSub[3]=== undefined){
      var umur = 'Invalid Birth Year'
    }
    else{
      var umur = 2018 - arrSub[3]
    }

    // console.log("firstName " + arrSub[0] + " lastName " + arrSub[1] + " gender " + arrSub[2] + " age " + umur)
    profile = {firstName:arrSub[0], lastName:arrSub[1], gender:arrSub[2], age:umur}
    // console.log(i + 1 + '. ' + profile.firstName + ' ' + profile.lastName + ':' + profile)
    console.log(i + 1 + '. ' + profile.firstName + ' ' + profile.lastName + ':')
    console.log(profile) //tidak bisa digabung dengan string, jika digabung akan menghasilkan [object]
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:{ firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 36 }
// 2. Robert Downey:{ firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }

// changeMe([]); // ""
