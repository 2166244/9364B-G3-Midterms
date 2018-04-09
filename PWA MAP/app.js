function zoomin(){
        var myImg = document.getElementById("map");
        var currWidth = myImg.clientWidth;
        if(currWidth == 2500) return false;
         else{
            myImg.style.width = (currWidth + 100) + "px";
        } 
    }
    function zoomout(){
        var myImg = document.getElementById("map");
        var currWidth = myImg.clientWidth;
        if(currWidth == 100) return false;
		 else{
            myImg.style.width = (currWidth - 100) + "px";
        }
    }

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}