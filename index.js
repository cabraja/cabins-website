window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 580) {
      document.getElementById("to-top").style.opacity = "1";
      document.getElementById("nav-alt").style.top = "0rem";
    } else {
      document.getElementById("to-top").style.opacity = "0";
      document.getElementById("nav-alt").style.top = "-4rem";
    }
  
  }
  
