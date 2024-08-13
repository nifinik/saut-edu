document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");

      // Удаляем класс active у всех кнопок и панелей
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Добавляем класс active к выбранной кнопке и соответствующей панели
      button.classList.add("active");
      document.getElementById(`tab-${tabId}`).classList.add("active");
    });
  });
});

$(document).ready(function () {
  // slaider reaches
  $(".sertificates__items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $("[data-modal = modalka]").on("click", function () {
    $("#myModal").fadeIn();
  });

  $(".close").on("click", function () {
    $("#myModal").fadeOut();
  });
});
