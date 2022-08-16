export default function changePages() {
  const buttons = document.querySelectorAll("[data-js=page__button]");
  const mains = document.querySelectorAll("[data-js=main]");
  const header = document.querySelector("h1");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeButtons = document.querySelector("button.active");
      activeButtons.classList.remove("active");
      button.classList.add("active");
      header.textContent = button.id;

      mains.forEach((main) => {
        if (main.id === button.id) {
          main.classList.remove("hidden");
        } else {
          main.classList.add("hidden");
        }
      });
    });
  });
}
