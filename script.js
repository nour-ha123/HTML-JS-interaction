var listes = document.querySelectorAll("li");

listes.forEach(function(li) {
    li.textContent = li.textContent + " Hello World";
});

var paragrathe = document.getElementsByTagName('p')[0];
    paragrathe.style.color = "blue";
    paragrathe.style.fontSize = "20px";
    paragrathe.style.fontWeight = "bold";


 var imgT = document.getElementsByTagName('img')[0];
  imgT.style.height = "300px"



  var image = document.querySelector('img');
  var img1 = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";
  var img2 = "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o";
  
  function alterner() {
    if (image.src.includes("")) {
        image.src = img2;
    } else {
        image.src = img1;
    }
}

image.addEventListener('click', function() {
    alterner();
});
setInterval(alterner, 3000);

  var listes = document.querySelectorAll('li');

  listes.forEach(function(li) {
      li.onclick = function() {
          this.remove(); 
      };
  });