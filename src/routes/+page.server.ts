import type { PageLoad } from "./$types";
export const load = (async ({ fetch }) => {

  const COLUMBIA_MD = "https://api.open-meteo.com/v1/forecast?latitude=39.2404&longitude=-76.8394&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,cloudcover,uv_index&daily=weathercode,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1"
  const ROCHESTER_NY = "https://api.open-meteo.com/v1/forecast?latitude=43.1548&longitude=-77.6156&hourly=temperature_2m,rain,cloudcover,uv_index,is_day&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1"
  const DENVER_CO = "https://api.open-meteo.com/v1/forecast?latitude=39.7392&longitude=-104.9847&hourly=temperature_2m,rain,cloudcover,uv_index,is_day&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1"

  // maryland coordinates
  let latitude: number = 39.203611
  let longitude: number = -76.856944

  // let result: {
    // weather:
    // [{ description: string }],
    // main: {
      // temp: number;
    // }
  // }
  // var tempUnit = 'F';

  // const KELVIN = 273.15;
  // const key = `8879687e7935ef481e0da5ee39a560b8`;

  // let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  // const res = await fetch(api)
  const res = await fetch(COLUMBIA_MD)
  let result = await res.json()
  // let celsius = Math.floor(result.main.temp - KELVIN);
  // result.main.temp = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
  console.log(result)
  return { result }
}) satisfies PageLoad