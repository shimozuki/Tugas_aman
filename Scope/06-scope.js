// console.log("Aecyro ni boooossss")

/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
//  1. ada 2 yaitu varibel lokal dan variabel global
//  2. - Variabel Global adalah semua yang ada di dalam global scope, maka dapat di pakai atau di akses oleh local scope didalamnya
//       tetapi, global scope tidak bisa mengakses sesuatu yang ada di dalam local scope.
//     - variable local adalah  biasanya diidentifikasi dengan adanya {}, semua yang ada di dalam local scope, hanya bisa diakses
//       oleh local scope itu sendiri
//  3. 

// variabel global
var a = 10;
var b = 20;


function penjumlahan() {
  // variabel lokal
  var penjumlahan = a + b;
  var hasil = "Hasil Dari : " + penjumlahan;
  console.log(hasil);
}
/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// 1. yang akan terjadi di console.log adalah Mariah
/// 2. karena me-return  variabel name.split dengan array [0], 
// /   jadi yang di console.log ada 2 "Mariah" dan "Carey" jadi Mariah saja yang keluar karena Mariah menjadi index ke [0].
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));