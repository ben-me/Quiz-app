export const questionCards = [
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

export function changeCardArray(object) {
  questionCards.unshift(object);
}
