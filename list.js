<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js'></script>
<script >const button = document.querySelector("[data-label='playbutton']");
letshown = true;

function enter() {

  TweenMax.staggerFrom("[data-label='list_item']", 2,
  {
    scale: 0.75,
    opacity: 0,
    delay: 0.25,
    ease: Elastic.easeOut,
    force3D: true },
  0.2);
  shown = true;
}

function exit() {
  TweenMax.staggerTo(
  "[data-label='list_item']",
  0.5,
  {
    opacity: 0,
    y: -100,
    ease: Back.easeIn },
  0.1).to({});
  shown = false;
}

function play() {
  if (!shown) {
    button.textContent = "Animate out";
    enter();
    console.log("Entering...");
  } else {
    exit();
    console.log("Exiting...");
  }
}

button.addEventListener("click", play);

enter();

</script>
