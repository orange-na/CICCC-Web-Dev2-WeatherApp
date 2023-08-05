require('dotenv').config()
const API_KEY = process.env.WEATHER_API_KEY;

const VANCOUVER_LAT = '49.2827';
const VANCOUVER_LON = '-123.1207';

const ApiTest = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${VANCOUVER_LAT}&lon=${VANCOUVER_LON}&APPID=${API_KEY}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

ApiTest();