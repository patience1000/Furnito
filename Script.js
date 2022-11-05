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

  if (y == "aout"){
    window.open("about.htm");
  }

  if(y == "sale"){
    window.location.href="about.htm#div1";
  }

  if(y == "gallery"){
    window.location.href="about.htm#div1";
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

