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
