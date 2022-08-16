export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  bookmarks.forEach((bookmark) => {
    let saved = false;
    const bookmarkImage = bookmark.querySelector('[data-js="bookmarkImage"]');
    bookmark.addEventListener("click", () => {
      saved = !saved;
      bookmarkImage.src = saved
        ? "./assets/bookmark_active.png"
        : "./assets/bookmark.png";
    });
  });
}
