// Contoh program sederhana menggunakan if, else, dan nested if
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
  
  if (nilai < 50) {
    console.log("Anda perlu belajar lebih keras!");
  }
}

// Contoh program sederhana menggunakan swich case
var hari = new Date().getDay(); 

switch (hari) {
  case 0:
    console.log("Hari ini adalah Minggu.");
    break;
  case 1:
    console.log("Hari ini adalah Senin.");
    break;
  case 2:
    console.log("Hari ini adalah Selasa.");
    break;
  case 3:
    console.log("Hari ini adalah Rabu.");
    break;
  case 4:
    console.log("Hari ini adalah Kamis.");
    break;
  case 5:
    console.log("Hari ini adalah Jumat.");
    break;
  case 6:
    console.log("Hari ini adalah Sabtu.");
    break;
  default:
    console.log("Tidak ada informasi hari yang valid.");
}

// Contoh program sederhana menggunakan for
for (let i = 11; i <= 20; i++) {
    console.log(i);
  }

// Contoh program sederhana menggunakan while,do while

// Inisialisasi variabel do while
let angka = 5;

do {
  console.log("Angka ke-" + angka);
  angka++;
} while (angka <= 10);

console.log("Selesai");

// Inisialisasi variabel while
let counter = 5;

while (counter <= 10) {
  console.log("Angka ke-" + counter);
  counter++; 
}

console.log("Selesai");

// Contoh program sederhana menggunakan function
function tambah(angka1, angka2) {
    var hasil = angka1 + angka2;
    return hasil;
  }
  
  var hasilPenambahan = tambah(25, 10);
  console.log("Hasil penambahan: " + hasilPenambahan); 
  
