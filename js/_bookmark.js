export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  bookmarks.forEach((bookmark) => {
    let notSaved = true;
    console.log(bookmark.src);
    bookmark.addEventListener("click", () => {
      notSaved = !notSaved;
      bookmark.src = notSaved
        ? "./assets/bookmark.png"
        : "./assets/bookmark_active.png";
    });
  });
}
