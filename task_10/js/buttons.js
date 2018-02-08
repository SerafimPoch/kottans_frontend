button.addEventListener("click", () => {
  let city = input.value;
  const updateByCity = x => {
    let url =
      "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=" +
      x +
      "&APPID=" +
      key;
    sendRequest(url);
  };
  input.value = "";
  updateByCity(city);
});

buttonAdd.addEventListener("click", () => {
  let cityAdd = input.value;
  list.insertAdjacentHTML(
    "beforeend",
    '<li class="list-group-item">' + cityAdd + "</li> "
  );
  input.value = "";
});

const Faren = c => Math.round(c * (9 / 5) - 459.67);

const Celc = k => Math.round(k - 273.15);
