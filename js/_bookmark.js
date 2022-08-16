export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  bookmarks.forEach((bookmark) => {
    let notSaved = true;
    const bookmarkImage = bookmark.querySelector('[data-js="bookmarkImage"]');
    bookmark.addEventListener("click", () => {
      notSaved = !notSaved;
      bookmarkImage.src = notSaved
        ? "./assets/bookmark.png"
        : "./assets/bookmark_active.png";
    });
  });
}
