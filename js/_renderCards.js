import Cards from "./_cards.js";
import toggleBookmark from "./_bookmark.js";
import toggleAnswer from "./_answer.js";

export default function renderCards() {
  Cards();
  toggleAnswer();
  toggleBookmark();
}
