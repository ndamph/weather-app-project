function showTemp(response) {
  let currentTemp = document.querySelector(".currentTempDigits");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
}
function getUserData(event) {
  event.preventDefault();
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes().toString().padStart(2, "0");
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[now.getDay()];
  let dayFormat = `${day} ${hour}:${minute}`;

  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${dayFormat}`;

  let inputCity = document.querySelector(`#search-bar`);
  let selectedCity = document.querySelector("h1");
  selectedCity.innerHTML = `${inputCity.value}`;

  let apiKey = `73fd7aeeb1fc6do18b8423c70f3b718t`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${inputCity.value}&key=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("form");
form.addEventListener("submit", getUserData);
