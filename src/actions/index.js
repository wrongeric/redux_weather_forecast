import axios from 'axios';

const API_KEY = '5c716eac2b220b425de8c3ecdaa589f6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}

