export default function changePages() {
  const homePage = document.querySelector('[data-js="homepage"]');
  const addQuestionPage = document.querySelector('[data-js="addquestionpage"]');
  const bookmarkPage = document.querySelector('[data-js="bookmarkpage"]');
  const profilePage = document.querySelector('[data-js="profilepage"]');

  const pages = [homePage, addQuestionPage, bookmarkPage, profilePage];

  const header = document.querySelector("h1");

  const homepageButton = document.querySelector('[data-js="homepage__button"]');
  const addQuestionButton = document.querySelector(
    '[data-js="addquestionpage__button"]'
  );
  const bookmarkButton = document.querySelector(
    '[data-js="bookmarkpage__button"]'
  );
  const profileButton = document.querySelector(
    '[data-js="profilepage__button"]'
  );

  const buttons = [
    homepageButton,
    addQuestionButton,
    bookmarkButton,
    profileButton,
  ];

  homepageButton.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    homePage.classList.remove("hidden");
    homepageButton.classList.add("active");
    header.textContent = "Quiz App";
  });

  addQuestionButton.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    addQuestionPage.classList.remove("hidden");
    addQuestionButton.classList.add("active");
    header.textContent = "Add Question";
  });

  bookmarkButton.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    bookmarkPage.classList.remove("hidden");
    bookmarkButton.classList.add("active");
    header.textContent = "Bookmarks";
  });

  profileButton.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    profilePage.classList.remove("hidden");
    profileButton.classList.add("active");
    header.textContent = "Profile";
  });
}

// Alte Variante

//   const buttons = document.querySelectorAll("[data-js=page__button]");
//   const mains = document.querySelectorAll("[data-js=main]");
//   const header = document.querySelector("h1");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const activeButton = document.querySelector("button.active");
//       activeButton.classList.remove("active");
//       button.classList.add("active");
//       header.textContent = button.id;

//       mains.forEach((main) => {
//         if (main.id === button.id) {
//           main.classList.remove("hidden");
//         } else {
//           main.classList.add("hidden");
//         }
//       });
//     });
//   });
// }
