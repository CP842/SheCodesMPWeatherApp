let now = new Date();

let minute = now.getMinutes();
let hour = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let h6 = document.querySelector("h6");

h6.innerHTML = `Current time: ${day} - ${hour}:${minute}`;

function showTemp(tell) {
  let rounded = Math.round(tell.data.main.temp);
  let tempElement = document.querySelector("#currentTemperature");
  tempElement.innerHTML = `${rounded}°C`;

  celsiusTemp = tell.data.main.temp;

  let humidElement = document.querySelector("#humidity");
  humidElement.innerHTML = `${tell.data.main.humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${Math.round(tell.data.wind.speed)}km/h`;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = tell.data.weather[0].description;
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#text-input");
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${input.value}`;

  let apiKey = "cdbab9552eaf5db6721359aef0ef8d42";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=cdbab9552eaf5db6721359aef0ef8d42`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

function showFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#currentTemperature");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  tempElement.innerHTML = `${Math.round(fahrenheitTemp)}°`;
}
function showCelsius(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#currentTemperature");
  tempElement.innerHTML = `${Math.round(celsiusTemp)}°`;
}
let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius-temp");
celsiusLink.addEventListener("click", showCelsius);

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
