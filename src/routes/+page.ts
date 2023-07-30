import type { PageLoad } from "./$types";
export const load = (async ({ fetch }) => {

  // maryland coordinates
  let latitude: number = 39.203611
  let longitude: number = -76.856944

  let result: {
    weather:
    [{ description: string }],
    main: {
      temp: number;
    }
  }
  var tempUnit = 'F';

  const KELVIN = 273.15;
  const key = `8879687e7935ef481e0da5ee39a560b8`;

  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  const res = await fetch(api)
  result = await res.json()
  let celsius = Math.floor(result.main.temp - KELVIN);
  result.main.temp = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
  
  return { result }
}) satisfies PageLoad