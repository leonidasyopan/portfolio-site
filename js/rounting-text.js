var text = ["Web Designer", "Web Developer", "Full-Stack Developer"];
var counter = 0;
var elem = document.getElementById("rotatingHeading");
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
