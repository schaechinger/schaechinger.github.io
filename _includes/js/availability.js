schchngr.availability = {
  forecast: {
    current: 3
  },
  months: [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ],
  show: function () {
    var list = document.getElementById("availability");
    if (!list) {
      return;
    }

    var date = new Date();
    var days;

    for (var i = 0; 12 > i; i++) {
      date.setMonth(date.getMonth() + 1);
      var forecastMonth = "" + date.getFullYear() + (date.getMonth() + 1);
      var isChange = this.forecast.hasOwnProperty(forecastMonth);

      if (isChange) {
        days = this.forecast[forecastMonth];
      } else if (0 === i) {
        days = this.forecast.current;
        isChange = true;
      }

      var status = "booked";
      if (0 === days) {
        status = "booked";
      } else if (3 > days) {
        status = "tentative";
      } else {
        status = "available";
      }

      var li = document.createElement("li");
      li.setAttribute(
        "class",
        "timeline--" + status + (isChange ? " timeline--highlighted" : "")
      );
      list.appendChild(li);

      if (0 === date.getMonth() || 0 === i) {
        var year = document.createElement("span");
        year.setAttribute("class", "year");
        year.innerText = date.getFullYear();
        li.appendChild(year);
      }

      /* month */
      var month = document.createElement("span");
      month.setAttribute("class", "month");
      month.innerText = this.months[date.getMonth()];
      li.appendChild(month);

      /* days available */
      var availableDays = document.createElement("span");
      availableDays.setAttribute("class", "days-available");
      availableDays.innerText = days + "d";
      month.appendChild(availableDays);
    }
  },
};
