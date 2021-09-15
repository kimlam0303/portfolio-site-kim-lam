console.log("Hello there kind stranger :) Welcome to my portfolio page!")

function menuToggle() {
   var x = document.getElementById('myNavtoggle');
   if (x.className === 'navtoggle') {
     x.className += ' responsive';
   } else {
     x.className = 'navtoggle';
   }

}
