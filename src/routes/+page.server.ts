import type { PageLoad } from "./$types";
export const load = (async ({ fetch }) => {

  const api_call = "https://api.weatherbit.io/v2.0/current?&units=I&city=Columbia,MD&key=" + process.env.WEATHER_API

    const res = await fetch(api_call)
  let result = await res.json()
  // console.log(result)
  return { result }
}) satisfies PageLoad