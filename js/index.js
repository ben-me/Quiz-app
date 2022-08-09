const answerButton1 = document.querySelector('[data-js="button1"');
const answerText1 = document.querySelector('[data-js="answer1"');

answerButton1.addEventListener("click", () => {
  answerText1.classList.toggle("hidden");
  if (answerButton1.innerHTML === "Show answer") {
    answerButton1.innerHTML = "Hide answer";
  } else {
    answerButton1.innerHTML = "Show answer";
  }
});

const bookmark = document.querySelector('[data-js="bookmark1"');
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
