// When the user scrolls down 50px from the top of the document, resize the header's font size
const [red, green, blue] = [255, 226, 199]
const section1 = document.querySelector('.section1')


window.addEventListener('scroll', () => {
  const y = 1 +  (window.scrollY || window.pageYOffset) / 35
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// For text change, variables are already set, use them for text color change
// const [yellow, purple, orange] = [0, 0, 0]
// const section2 = document.querySelector('.section2')


function myColor() { 
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById('colorWave').className = "intro2"
    } 
    else {
      document.getElementById('colorWave').className = "intro1"
    }
};

// I can try adding the other images in the if/else statements when ready
function myResize() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("image").className = "spaceIn";
    document.getElementById("image2").className = "spaceIn";
  } else {
    document.getElementById("image").className = "spaceOut";
  }
}

window.onscroll = function() {
  myColor();
  myResize();
};
// Another way to invoke my scroll functions
// window.addEventListener("scroll", navFunction);
// window.addEventListener("scroll", scrollFunction);

// Onload Page transitions
// window.onload = function() {
//   document.body.className += " loaded";
// }