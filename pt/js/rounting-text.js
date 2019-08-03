var text = ["Web Designer", "Desenvolvedor Web", "Desenvolvedor Full-Stack", "Desenvolvedor Back-End", "Desenvolvedor Front-End"];
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
