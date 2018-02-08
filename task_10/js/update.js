const update = weather => {
  data_2.innerHTML = weather.data_2;
  data_3.innerHTML = weather.data_3;
  data_4.innerHTML = weather.data_4;
  data_5.innerHTML = weather.data_5;

  temp_1.innerHTML = weather.temp_1;
  temp_3.innerHTML = weather.temp_3;
  temp_4.innerHTML = weather.temp_4;
  temp_5.innerHTML = weather.temp_5;
  temp_6.innerHTML = weather.temp_6;

  loc_1.innerHTML = weather.loc;
  icon.src = "img/" + weather.icon + ".svg";
  icon_2.src = "img/" + weather.icon_2 + ".svg";
  icon_3.src = "img/" + weather.icon_3 + ".svg";
  icon_4.src = "img/" + weather.icon_4 + ".svg";
  icon_5.src = "img/" + weather.icon_5 + ".svg";

  humidity_1.innerHTML = weather.humidity;
};
