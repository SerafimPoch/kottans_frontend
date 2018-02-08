const update = weather => {
  data_2.innerText = weather.data_2;
  data_3.innerText = weather.data_3;
  data_4.innerText = weather.data_4;
  data_5.innerText = weather.data_5;

  temp_1.innerText = weather.temp_1;
  temp_3.innerText = weather.temp_3;
  temp_4.innerText = weather.temp_4;
  temp_5.innerText = weather.temp_5;
  temp_6.innerText = weather.temp_6;

  loc_1.innerText = weather.loc;
  icon.src = "img/" + weather.icon + ".svg";
  icon_2.src = "img/" + weather.icon_2 + ".svg";
  icon_3.src = "img/" + weather.icon_3 + ".svg";
  icon_4.src = "img/" + weather.icon_4 + ".svg";
  icon_5.src = "img/" + weather.icon_5 + ".svg";

  humidity_1.innerText = weather.humidity;
};
