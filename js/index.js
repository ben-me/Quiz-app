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

let bookmark = document.querySelector('[data-js="bookmark1"');
let bookmarksaved = true;
bookmark.addEventListener("click", () => {
  if (bookmarksaved) {
    bookmark.src = "../assets/bookmark_active.png";
    bookmarksaved = !bookmarksaved;
  } else {
    bookmark.src = "../assets/bookmark.png";
    bookmarksaved = true;
  }
});
