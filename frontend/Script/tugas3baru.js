const greeting = {
    message : "say Hi",
    times : 4
    }
    greeting.message = "Hai ges";
    console.log(greeting.message)//=>"Hai ges"
    const gambar = document.getElementsByClassName('gambar');
    for (let i = 0; i < gambar.length; i++) {
    if (gambar) {
    console.log(gambar[i]);
    }
    else if (no) {
    console.log('Tidak ada data!!!');
    console.log(i);
    }
    }
    document.getElementById('tekssatu').style.textAlign = 'center';
    document.getElementById('tekssatu').style.fontSize = '28px';
    document.getElementsByTagName('h2')[1].style.color = 'lightblue';
    document.getElementsByTagName('h2')[2].style.color = 'lightblue';
    const h2 = document.querySelector('h2');
    h2.style.color = '#666F68';
    const judul = document.getElementById('judul');
    judul.style.color = 'white';
    const nav = document.querySelectorAll('header ul li a');
    for (let i = 0; i < nav.length; i++) {
    const element = nav[i];
    element.style.display = 'inline-block';
    }