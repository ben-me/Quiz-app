import { questionCards, changeCardArray } from "./_questionArray.js";
import renderCards from "./_renderCards.js";

export default function addQuestion() {
  const form = document.querySelector('[data-js="form"');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const myForm = event.target;
    const field = myForm.elements;

    const newCard = {
      id: questionCards.length + 1,
      isBookmarked: false,
      question: field.question.value,
      answer: field.answer.value,
      hashtags: field.tags.value.split(","),
    };

    console.log(newCard);
    changeCardArray(newCard);
    console.log(questionCards);
    event.target.reset();
    renderCards();
  });
  console.log(questionCards);
}
