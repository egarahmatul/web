// pop up saat welcome page
alert("Holla, Mau Melihat Apa?");
var lagi = true;

while ( lagi == true ) {
 var permintaan = prompt("Tulis Mau lihat apa disini : ");
 
 alert("Nice Request! Ini adalah permintaanmu ➡ " + permintaan);
 lagi = confirm ("Nothing, coba lagi");
}

alert("Thankyou for visiting.");


//mengganti element
//buat elemen barunya
const newHeading = document.createElement('h2');
//Menambahkan class nya
newHeading.class = 'content-home';
//Buat text nodenya
newHeading.appendChild(document.createTextNode('Welcome to My Website'));

//panggil element lamanya
const oldHeading = document.getElementById('Deskripsi-Home');
console.log(newHeading);