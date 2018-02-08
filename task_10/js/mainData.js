const mainCelc = data => {
  let weather = {};
  let second = data.list[5].dt_txt;
  let third = data.list[15].dt_txt;
  let fourth = data.list[20].dt_txt;
  let fifth = data.list[28].dt_txt;
  weather.icon = data.list[0].weather[0].id;
  weather.icon_2 = data.list[5].weather[0].id;
  weather.icon_3 = data.list[13].weather[0].id;
  weather.icon_4 = data.list[21].weather[0].id;
  weather.icon_5 = data.list[29].weather[0].id;
  weather.humidity = data.list[0].main.humidity;
  weather.loc = data.city.name;
  weather.data_2 = new Date(second).toLocaleString("ru", options);
  weather.data_3 = new Date(third).toLocaleString("ru", options);
  weather.data_4 = new Date(fourth).toLocaleString("ru", options);
  weather.data_5 = new Date(fifth).toLocaleString("ru", options);

  weather.temp_1 = Celc(data.list[1].main.temp);
  weather.temp_3 = Celc(data.list[10].main.temp);
  weather.temp_4 = Celc(data.list[18].main.temp);
  weather.temp_5 = Celc(data.list[26].main.temp);
  weather.temp_6 = Celc(data.list[34].main.temp);
  update(weather);
};

const mainFaren = data => {
  let weather = {};
  let second = data.list[5].dt_txt;
  let third = data.list[15].dt_txt;
  let fourth = data.list[20].dt_txt;
  let fifth = data.list[28].dt_txt;
  weather.icon = data.list[0].weather[0].id;
  weather.icon_2 = data.list[5].weather[0].id;
  weather.icon_3 = data.list[13].weather[0].id;
  weather.icon_4 = data.list[21].weather[0].id;
  weather.icon_5 = data.list[29].weather[0].id;
  weather.humidity = data.list[0].main.humidity;
  weather.loc = data.city.name;
  weather.data_2 = new Date(second).toLocaleString("ru", options);
  weather.data_3 = new Date(third).toLocaleString("ru", options);
  weather.data_4 = new Date(fourth).toLocaleString("ru", options);
  weather.data_5 = new Date(fifth).toLocaleString("ru", options);

  weather.temp_1 = Faren(data.list[1].main.temp);
  weather.temp_3 = Faren(data.list[10].main.temp);
  weather.temp_4 = Faren(data.list[18].main.temp);
  weather.temp_5 = Faren(data.list[26].main.temp);
  weather.temp_6 = Faren(data.list[34].main.temp);
  update(weather);
};
