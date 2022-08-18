import { questionCards } from "./_questionarray.js";

export default function Cards() {
  const homePage = document.querySelector('[data-js="homepage"]');

  questionCards.forEach((question) => {
    const card = document.createElement("section");
    const questionText = document.createElement("p");
    const answerText = document.createElement("p");
    const answerButton = document.createElement("button");
    const bookmarkIcon = document.createElement("img");
    const bookmarkButton = document.createElement("button");
    const hashtaglist = document.createElement("ul");

    card.classList.add("question");
    card.setAttribute("data-js", "card");

    bookmarkButton.classList.add("question__bookmark");
    bookmarkButton.setAttribute("data-js", "bookmark");
    bookmarkIcon.classList.add("question__bookmark--img");
    bookmarkIcon.src = "./assets/bookmark.png";
    bookmarkIcon.setAttribute("data-js", "bookmarkImage");

    questionText.classList.add("question__text");
    questionText.textContent = question.question;

    answerButton.classList.add("question__button");
    answerButton.textContent = "Show answer";
    answerButton.setAttribute("data-js", "button");

    answerText.classList.add("hidden");
    answerText.textContent = question.answer;
    answerText.setAttribute("data-js", "answer");

    hashtaglist.classList.add("question__hashtags");

    // question.hashtags.forEach((hashtag) => {
    //   const listElement = document.createElement("li");
    //   listElement.textContent = hashtag.textContent;
    // });

    homePage.append(card);
    card.append(bookmarkButton);
    bookmarkButton.append(bookmarkIcon);
    card.append(questionText);
    card.append(answerButton);
    card.append(answerText);
    card.append(hashtaglist);
  });
}
