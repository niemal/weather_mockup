const API_KEY = "68355d0d66980078621617f24c4315b3";

export type WeatherResult = {
  name?: string;
  description?: string;
  temp?: number;
  feelsLike?: number;
  windSpeed?: number;
};

export default async function fetchWeather(
  query: string
): Promise<WeatherResult | null> {
  const result: WeatherResult = {};

  // fetch the lat/lon first
  const resp = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
  );
  if (resp.ok) {
    const initJson = await resp.json();

    if (initJson[0] && initJson[0].lat && initJson[0].lon) {
      result.name = initJson[0].name;

      const finalResp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${initJson[0].lat}&lon=${initJson[0].lon}&appid=${API_KEY}`
      );

      if (finalResp.ok) {
        const finalJson = await finalResp.json();

        if (finalJson.weather && finalJson.weather[0].description) {
          result.description = finalJson.weather[0].description;
        }

        if (finalJson.main && finalJson.main.temp) {
          result.temp = finalJson.main.temp;
        }

        if (finalJson.main && finalJson.main.feels_like) {
          result.feelsLike = finalJson.main.feels_like;
        }

        if (finalJson.wind && finalJson.wind.speed) {
          result.windSpeed = finalJson.wind.speed;
        }

        return result;
      }
    }
  }

  return null;
}
