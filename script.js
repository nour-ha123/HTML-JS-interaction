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


  var listes = document.querySelectorAll('li');

  listes.forEach(function(li) {
      li.onclick = function() {
          this.remove(); 
      };
  });