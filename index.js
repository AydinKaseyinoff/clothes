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




// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Getting all buy buttons
  var buttons = document.querySelectorAll('.buy-button');

  // Iterating over buttons and adding event listener
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var product = this.dataset.product;
      var price = this.dataset.price;
      var image = this.dataset.image;

      // Encoding the message
      var message = encodeURIComponent('I want to buy: ' + product + '\nPrice: ' + price + '\nImage: ' + image);
      var whatsappLink = 'https://wa.me/+996703929850/?text=' + message;

      // Opening the WhatsApp link in a new tab
      window.open(whatsappLink, '_blank');
    });
  });
});

