function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openPage(){
  var y = document.getElementById("search").value;

  if (y == "About"){
    window.open("about.html");
  }

  if(y == "sale"){
    window.location.href="#search";
  }
}
function Show1() {
  document.getElementById('div2').style.display = "block";
  document.getElementById('div1').style.display = "none";
}

function Show2() {
  document.getElementById('div1').style.display = "block";
  document.getElementById('div2').style.display = "none";
}

