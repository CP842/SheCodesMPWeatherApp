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
let h5 = document.querySelector("h5");

h5.innerHTML = `Current time: ${day} - ${hour}:${minute}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function showTemp(tell) {
  let rounded = Math.round(tell.data.main.temp);
  let tempElement = document.querySelector("#currentTemperature");
  tempElement.innerHTML = `${rounded}°C`;

  celsiusTemp = tell.data.main.temp;
}

function showfahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#currentTemperature");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  tempElement.innerHTML = `${Math.round(fahrenheitTemp)}°`;
}

let celsiusTemp = null;

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#text-input");
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${input.value}`;

  let apiKey = "cdbab9552eaf5db6721359aef0ef8d42";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=cdbab9552eaf5db6721359aef0ef8d42`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showfahrenheit);
