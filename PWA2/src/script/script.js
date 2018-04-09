/*window.onload = function(){
	            var canvas = document.getElementById("mapCanvas");
	            var ctx = canvas.getContext("2d");
	            
	            var pic = document.getElementById("baguioMap");
	            ctx.drawImage(pic, 0,0);
}

/**(function() {
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
})();*/

function openNav(){
	document.getElementById("sidenavbar").style.width = "250px";
}

function closeNav(){
	document.getElementById("sidenavbar").style.width = "0px";
}



