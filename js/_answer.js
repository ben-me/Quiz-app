export default function toggleAnswer() {
  const cards = document.querySelectorAll('[data-js="card"]');
  cards.forEach((card) => {
    const answerButton = card.querySelector('[data-js="button"]');
    const answerText = card.querySelector('[data-js="answer"]');
    answerButton.addEventListener("click", () => {
      answerText.classList.toggle("hidden");
    });
  });
}
