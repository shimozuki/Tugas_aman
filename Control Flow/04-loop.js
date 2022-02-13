/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let i, j, k ;
function prima (n){
    for(i=1; i<=n; i++){
        j = 0;
        for (k = 1; k <= i; k++){
            if (i % k == 0){
                j++;
            }
        }
        if (j == 2){
            document.write(i+ ' ')
    
    }
}
}
prima(100);

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
// while (....) {}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
// do { .... } while (....)