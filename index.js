// Получите контекст рисования графика
var ctx = document.getElementById("myChart").getContext("2d");

// Определите данные для графика (пример)
var data = {
  labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"],
  datasets: [
    {
      label: "Продажи",
      data: [120, 150, 145, 200, 220, 250, 245],
      backgroundColor: "rgba(0, 123, 255, 0.5)", // Цвет заливки графика
      borderColor: "rgba(0, 123, 255, 1)", // Цвет линии графика
      borderWidth: 5, // Толщина линии графика
    },
  ],
};

// Создайте экземпляр графика
var myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {},
});

var supportWidget = document.getElementById("support-widget");
var supportButton = document.getElementById("support-button");

supportButton.addEventListener("click", function () {
  if (supportWidget.style.display === "block") {
    supportWidget.style.display = "none";
  } else {
    supportWidget.style.display = "block";
  }
});

document.getElementById("send-button").addEventListener("click", function () {
  var message = document.getElementById("support-input").value;
  var encodedMessage = encodeURIComponent(message);
  var whatsappURL =
    "https://api.whatsapp.com/send?phone=+996703929850_WhatsApp&text=" +
    encodedMessage;
  window.open(whatsappURL, "_blank");
});
