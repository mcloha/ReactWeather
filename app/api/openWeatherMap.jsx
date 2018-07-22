var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=289c13db4d1664bca04d3fa7ec5442c4&units=metric';

module.exports = {
    getTemp: (location) => {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return fetch(requestUrl)
                .then((res) => res.json())
                .then((data) => {
                    if (data.cod && data.message) {
                        throw new Error(data.message);
                    } else {
                        return data.main.temp;
                    }
                }, (res) => {
                    console.log(res);
                    throw new Error(data.message);
                });
    }
}