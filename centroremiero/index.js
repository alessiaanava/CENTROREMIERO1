var currentImageIndex = 0;
var images = ["https://www.gc-rudern.ch/fileadmin/_processed_/csm_2017-02-13_11.42.41_6b776933bf.jpg", "https://www.gc-rudern.ch/fileadmin/_processed_/csm_IMG-20170216-WA0002_cde33752af.jpg", "https://www.gc-rudern.ch/fileadmin/_processed_/csm_IMG-20170218-WA0001_638b69f05a.jpg", "https://www.gc-rudern.ch/fileadmin/_processed_/csm_TL_Pusiano_a3b72463cf.jpg","https://www.gc-rudern.ch/fileadmin/_processed_/csm_16825877_10154983553004424_762917427319395995_o_d4ac45fa7d.jpg" , "https://www.gc-rudern.ch/fileadmin/_processed_/csm_IMG-20170218-WA0004_9b239a5cb3.jpg", "https://www.gc-rudern.ch/fileadmin/_processed_/csm_IMG-20170218-WA0024_e4a1107045.jpg", "https://www.gc-rudern.ch/fileadmin/_processed_/csm_2017-02-17_11.49.25_041a9d9bf6.jpg", "https://www.gc-rudern.ch/fileadmin/_processed_/csm_IMG-20170218-WA0009_bcf214a425.jpg", "https://th.bing.com/th/id/R.45140427078f9d0ef855913e654136e4?rik=FnewqvEtwWI3hg&riu=http%3a%2f%2fwww.erbanotizie.com%2fwp-content%2fuploads%2f2014%2f11%2fCentro-remiero-lago-di-Pusiano-Eupilio-novembre-2014-15.jpg%3fx52325&ehk=QKeq81q2C9lT%2fOypy1xTOajOarpgSKJHJf0xCqFY4%2fs%3d&risl=&pid=ImgRaw&r=0", "https://www.erbanotizie.com/wp-content/uploads/2014/11/Centro-remiero-lago-di-Pusiano-Eupilio-novembre-2014-16.jpg"];

function previousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  document.getElementById("image").src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  document.getElementById("image").src = images[currentImageIndex];
}

