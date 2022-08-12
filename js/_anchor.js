export default function changePages() {
  const anchors = document.querySelectorAll("[data-js=page__button]");
  const mains = document.querySelectorAll("[data-js=main]");
  const header = document.querySelector("h1");

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const activeAnchors = document.querySelector("button.active");
      activeAnchors.classList.remove("active");
      anchor.classList.add("active");
      header.textContent = anchor.id;

      mains.forEach((main) => {
        if (main.id === anchor.id) {
          //console.log("Die AnchorID " + anchor.id + ". Die MainID " + main.id);
          main.classList.remove("hidden");
        } else {
          main.classList.add("hidden");
        }
      });
    });
  });
}
