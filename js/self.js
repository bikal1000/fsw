/*changing banner imges*/
var images = ['bi-1.jpeg','bi-2.jpeg','bi-3png.png','bi-4.jpeg'];
$('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.home-bg-img');