const sendRequest = async url => {
  const link = await fetch(url);
  const data = await link.json();

  buttonF.addEventListener("click", () => {
    mainFaren(data);
  });

  buttonC.addEventListener("click", () => {
    mainCelc(data);
  });

  mainCelc(data);
};
