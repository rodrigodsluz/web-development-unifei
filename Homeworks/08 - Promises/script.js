const searchWeather = (city) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(
        $.getJSON(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6870fadc3069b18b4578f0ea59ce8fd9`
        )
      );
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

const convertWeather = (kelvinFormat) => {
  const celsius = kelvinFormat - 273.15;
  return parseFloat(celsius.toFixed(2));
};

$(document).ready(() => {
  $("#btn").click(() => {
    const cityInput = $("#city").val();
    
    searchWeather(cityInput)
      .then((weather) => {
        $(".city-field").html(`<h1>Cidade pesquisada: ${weather.name}</h1>`);

        $(".currentCondition").html(
          `<h2>Condição atual: ${weather.weather[0].description}</h2>`
        );

        $(".currentTemperature").html(
          `<h2>Temperatura: ${convertWeather(weather.main.temp)} °C</h2>`
        );

        $(".maxTemperature").html(
          `<h2>Máxima: ${convertWeather(weather.main.temp_max)} °C</h2>`
        );

        $(".minTemperature").html(
          `<h2>Mínima: ${convertWeather(weather.main.temp_min)} °C</h2>`
        );
      })
      .catch(() => {
        alert("Ocorreu um erro na consulta");
      });
  });
});
