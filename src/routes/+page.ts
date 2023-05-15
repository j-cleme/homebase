import type { PageLoad } from "./$types";
export const load = (async ({ fetch }) => {

  let latitude: number = 39.203611
  let longitude: number = -76.856944

  let result: {
    weather:
    [{ description: string }],
    main: {
      temp: number;
    }
  }
  // = {
  //   temperature: {
  //     unit: "",
  //     value: 0
  //   },
  //   description: "",
  //   iconId: ""
  // };
  // result.temperature = {
  //   unit: 'celsius',
  //   value: 0
  // };

  var tempUnit = 'C';

  const KELVIN = 273.15;
  const key = `8879687e7935ef481e0da5ee39a560b8`;

  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  const res = await fetch(api)
  result = await res.json()
  // .then(function (response) {
  //   let data = response.json();
  //   return data;
  // })
  // .then(function (data) {
  let celsius = Math.floor(result.main.temp - KELVIN);
  result.main.temp = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
  // result.weather[0].description = result.weather[0].description;
  // })

  return { result }
}) satisfies PageLoad