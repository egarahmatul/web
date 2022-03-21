// DOM Selection
// document.getElementsByTagName()
const h2 = document.getElementsByTagName('h2');
h2[0].style.color = 'grey';

// document.getElementsByClassName()
const button = document.getElementsByClassName('button');
button[0].style.backgroundColor = 'black';
button[0].style.color = 'pink';

button[1].style.backgroundColor = 'black';
button[1].style.color = 'pink';

// query selector
const p = document.querySelector(".writer").style
p.color = "pink"

const nav = document.querySelectorAll(".isi")
for(let i=0; i<nav.length; i++){
    nav[i].style.display = "inline-block"
    nav[i].style.fontSize = "22px"
    nav[i].style.color = "#524A4E"
}

// Memanggil semua elemen isi 
var x = document.querySelectorAll(".isi");

// Mengatur background warna elemen isi pertama
x[0].style.backgroundColor = "#D8D2CB";

// let
const gambar = document.getElementsByClassName('gambar');
     for (let i=0; i<gambar.length; i++){
         if(gambar){
             console.log(gambar[i]);
         }
         else if(no){
             console.log('Tidak Ada Data');
             console.log(i)
         }
     }

// 