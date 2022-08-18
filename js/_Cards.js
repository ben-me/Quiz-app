import { questionCards } from "./_questionArray.js";

export default function Cards() {
  const homePage = document.querySelector('[data-js="homepage"]');

  questionCards.forEach((question) => {
    const card = document.createElement("section");
    card.classList.add("question");
    card.setAttribute("data-js", "card");

    const questionText = document.createElement("p");
    questionText.classList.add("question__text");
    questionText.textContent = question.question;

    const answerText = document.createElement("p");
    answerText.classList.add("hidden");
    answerText.textContent = question.answer;
    answerText.setAttribute("data-js", "answer");

    const answerButton = document.createElement("button");
    answerButton.classList.add("question__button");
    answerButton.textContent = "Show answer";
    answerButton.setAttribute("data-js", "button");

    const bookmarkIcon = document.createElement("img");
    bookmarkIcon.classList.add("question__bookmark--img");
    bookmarkIcon.src = "./assets/bookmark.png";
    bookmarkIcon.setAttribute("data-js", "bookmarkImage");

    const bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("question__bookmark");
    bookmarkButton.setAttribute("data-js", "bookmark");

    const hashtaglist = document.createElement("ul");
    hashtaglist.classList.add("question__hashtags");

    homePage.append(card);
    card.append(bookmarkButton);
    bookmarkButton.append(bookmarkIcon);
    card.append(questionText);
    card.append(answerButton);
    card.append(answerText);
    card.append(hashtaglist);

    question.hashtags.forEach((hashtag) => {
      const listElement = document.createElement("li");
      listElement.textContent = "#" + hashtag;
      listElement.classList.add("question__hashtags--design");
      hashtaglist.append(listElement);
    });
  });
}
