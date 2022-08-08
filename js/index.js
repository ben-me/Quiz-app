const bouton = document.querySelector('[data-js="le-bouton"');
let answer = true;
const banana = document.querySelector(".bananarama");

console.log(banana);

bouton.addEventListener("click", function onClick(event) {
  if (answer) {
    banana.classList.remove("bananarama");
    console.log("remove");
    answer = !answer;
  } else {
    banana.classList.add("bananarama");
    answer = true;
    console.log("added");
  }
});
