const showPosition = position => {
  updateByGeo(position.coords.latitude, position.coords.longitude);
};

const updateByGeo = (lat, lon) => {
  let url =
    "https://api.openweathermap.org/data/2.5/forecast?" +
    "lat=" +
    lat +
    "&lon=" +
    lon +
    "&APPID=" +
    key;
  sendRequest(url);
};

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("No internet connection");
  }
});
