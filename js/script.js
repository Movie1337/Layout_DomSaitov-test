document.addEventListener("DOMContentLoaded", function () {
  const openFormButton = document.getElementById("openFormButton");
  const adFormContainer = document.getElementById("adFormContainer");
  const bannerTitle = document.getElementById("bannerTitle");
  const mainContent = document.getElementById("mainContent");

  openFormButton.addEventListener("click", function () {
    adFormContainer.style.display = "block";
    bannerTitle.textContent = "Создание объявления";
    mainContent.classList.add("hidden"); // Скрываем main
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      adFormContainer.style.display = "none";
      bannerTitle.textContent = "Телефоны для вызова эвакуатора в Москве";
      mainContent.classList.remove("hidden");
    }
  });
});

document.getElementById("uploadButton").addEventListener("click", function () {
  document.getElementById("photoUpload").click();
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const paginationButtons = document.querySelectorAll(".pagination__button");
  const nextButton = document.querySelector(".pagination__button-next");
  const cardsPerPage = 4;
  let currentPage = 1;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  function showPage(page) {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    cards.forEach((card, index) => {
      if (index >= start && index < end) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    paginationButtons.forEach((button) => {
      if (parseInt(button.dataset.page) === page) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      currentPage = parseInt(this.dataset.page);
      showPage(currentPage);
    });
  });

  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

let currentSlide = 0;

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  const scrollButton = document.getElementById("scrollButton");
  const footer = document.getElementById("footer");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((item) => item.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");
      document
        .getElementById(this.getAttribute("data-tab"))
        .classList.add("active");
    });
  });

  window.addEventListener("scroll", function () {
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top < window.innerHeight && footerRect.bottom >= 0) {
      scrollButton.classList.remove("hidden");
    } else {
      scrollButton.classList.add("hidden");
    }
  });

  scrollButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
