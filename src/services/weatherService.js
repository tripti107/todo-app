// const API_KEY = 'YOUR_OPENWEATHER_API_KEY';

// export const getWeather = async (city) => {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//     );
//     if (!response.ok) throw new Error('Weather data not available');
//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// };


import axios from 'axios';

export const getWeather = async (location) => {
  try {
    // console.log("Location received");
    const cordinatesData = await getCordinates(location);
    const lat = Number(cordinatesData.data.lat.toFixed(2));
    const lon = Number(cordinatesData.data.lon.toFixed(2));
    console.log(lat, lon);  
    console.log(process.env.REACT_APP_OPENWEATHER_API_KEY);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat: lat,
          lon: lon,
          appid: "349c709f970f1ae37b5168528948ee3f"
        //   appid: process.env.REACT_APP_OPENWEATHER_API_KEY
        }
      }
    );
    const celciusTemp = response.data.main.temp - 273.15;
    return {
      temp: celciusTemp.toFixed(2),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

const getCordinates = async (location) => {
    try {
        // https://api.openweathermap.org/geo/1.0/direct?q=Lucknow&limit=5&appid=349c709f970f1ae37b5168528948ee3f
        // const response = await axios.get(
        // `https://api.openweathermap.org/geo/1.0/direct`,
        // {
        //     params: {
        //     q: location,
        //     appid: process.env.REACT_APP_OPENWEATHER_API_KEY
        //     }
        // }
        // );
        console.log("call received");
        const response = await axios.get(
            "https://api.openweathermap.org/geo/1.0/direct",
            {
                params: {
                    q: "Lucknow",
                    limit: 5,
                    appid: "349c709f970f1ae37b5168528948ee3f"
                }
            }
        );
        console.log(response.data[0]);
        
        return {
            data: response.data[0]
        };
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
}