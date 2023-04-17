// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
// import type { PageLoad } from "./$types";
//
// export const load = (async ({ fetch, params }) => {
//
  // const req1 = await fetch(`https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/annual-years`)
  // let allCapstones: AllAnnualYears = await req1.json()
//
  // allCapstones.data.forEach(year => {
    // if (year.attributes.Year === params.ay) {
      // yearId = year.id
    // }
  // });
//
  // const res = await fetch(
    // `https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/annual-years/${yearId}?populate=deep,2`,
  // );
  // data = await res.json();
  // console.log(data);
  // return data;
// }) satisfies PageLoad;
//
//
// function getWeather(latitude, longitude) {
  // let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${CONFIG.language}&appid=${key}`;
  // fetch(api)
    // .then(function (response) {
      // let data = response.json();
      // return data;
    // })
    // .then(function (data) {
      // let celsius = Math.floor(data.main.temp - KELVIN);
      // weather.temperature.value = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
      // weather.description = data.weather[0].description;
      // weather.iconId = data.weather[0].icon;
    // })
    // .then(function () {
      // displayWeather();
    // });
// }