var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload = function(){
	            var canvas = document.getElementById("mapCanvas");
	            var ctx = canvas.getContext("2d");
	            
	            var pic = document.getElementById("baguioMap");
	            ctx.drawImage(pic, 0,0);
}

(function() {
  var boxes = document.getElementsByClassName("image-box");
  
  Array.prototype.forEach.call(boxes, function(box) {
    var detail = box.getElementsByClassName("image-detail")[0];
    var img = box.getElementsByTagName("img")[0];
    var btn = box.getElementsByClassName("button")[0];
    
    box.addEventListener("mouseover", function() {
      detail.classList.add("hide");
      img.classList.add("detail-hover-state");
      btn.classList.add("show");
    });
    
    box.addEventListener("mouseout", function() {
      detail.classList.remove("hide");
      img.classList.remove("detail-hover-state");
      btn.classList.remove("show");
    });
  });
})();

function openNav(){
	document.getElementById("sidenavbar").style.width = "250px";
}

function closeNav(){
	document.getElementById("sidenavbar").style.width = "0px";
}



