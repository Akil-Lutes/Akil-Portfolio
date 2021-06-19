// When the user scrolls down 50px from the top of the document, resize the header's font size
const [red, green, blue] = [255, 226, 199]
const section1 = document.querySelector('.section1')


window.addEventListener('scroll', () => {
  const y = 1 +  (window.scrollY || window.pageYOffset) / 30
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// For text change, variables are already set, use them for text color change

// window.addEventListener('scroll', () => {

// })

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("image").className = "spaceIn";
  } else {
    document.getElementById("image").className = "spaceOut";
  }
}