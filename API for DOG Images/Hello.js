var btn = document.querySelector("#btn");
var img = document.getElementById("pic");

btn.addEventListener("click", function () {

  
 var XHR = new XMLHttpRequest();
 XHR.onreadystatechange = function() {
 if(XHR.readyState == 4 && XHR.status == 200)

    var url = JSON.parse(this.responseText).message;
    img.src = url;
    console.log(img.src);
    

 }






  XHR.open("GET","https://dog.ceo/api/breeds/image/random");
  XHR.send();
  
})


