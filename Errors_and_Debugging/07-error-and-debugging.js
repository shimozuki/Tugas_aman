/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// 1. Type error = 
// 2. Reference Error = kesalahan ketika variabel yang tidak ada (atau belum diinisialisasi) 
//                      alam lingkup saat ini direferensikan.
// 3. Range Error = Objek RangeError menunjukkan kesalahan saat nilai 
//                  tidak dalam set atau rentang nilai yang diizinkan
// 4. Syntax Error = kesalahan dalam tata bahasa atau dalam struktur code nya.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// 1. akan terjadi error 
// 2. kategori References error
// 3. karena setelah kita membuat variabel, baru kita bisa kita console di bawah bukan di atas karena variabel scope nya tidak pas

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
