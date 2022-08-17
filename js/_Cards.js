export default function Cards() {
  const homePage = document.querySelector('[data-js="homepage"]');

  const questionCards = [
    {
      id: 1,
      isBookmarked: false,
      question: "How can you initialize a local repo with the terminal?",
      answer: "git init",
      hashtags: ["git", "cli", "vcs", "github"],
    },
    {
      id: 2,
      isBookmarked: false,
      question: "What kind of selectors can you use in CSS?",
      answer: "type, id, class, universal, pseudo elements and pseudo classes",
      hashtags: ["css", "selectors", "styling"],
    },
    {
      id: 3,
      isBookmarked: false,
      question:
        "Which word allows you to have your grid-fields over several columns or rows?",
      answer: "span",
      hashtags: ["grid", "rows", "columns"],
    },
    {
      id: 4,
      isBookmarked: false,
      question: "How can you become a Programmer for web development?",
      answer: "Participate in a neue Fische Bootcamp",
      hashtags: ["css", "html", "js", "react"],
    },
  ];

  questionCards.forEach((question) => {
    const card = document.createElement("section");
    const questionText = document.createElement("p");
    const answerText = document.createElement("p");
    const answerButton = document.createElement("button");
    const bookmarkIcon = document.createElement("img");
    const bookmarkButton = document.createElement("button");
    const hashtaglist = document.createElement("ul");
    let isShown = false;
    let saved = false;

    card.classList.add("question");

    bookmarkButton.classList.add("question__bookmark");
    bookmarkIcon.classList.add("question__bookmark--img");
    bookmarkIcon.src = "./assets/bookmark.png";

    questionText.classList.add("question__text");
    questionText.textContent = question.question;

    answerButton.classList.add("question__button");
    answerButton.textContent = "Show answer";

    answerText.classList.add("hidden");
    answerText.textContent = question.answer;

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

    answerButton.addEventListener("click", () => {
      answerText.classList.toggle("hidden");
      isShown = !isShown;
      answerButton.textContent = isShown ? "Hide answer" : "Show answer";
    });
    bookmarkButton.addEventListener("click", () => {
      saved = !saved;
      bookmarkIcon.src = saved
        ? "./assets/bookmark_active.png"
        : "./assets/bookmark.png";
    });
  });
}
