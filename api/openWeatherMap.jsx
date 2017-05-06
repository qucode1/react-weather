var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=177cb6005572c76b18089a6d3a9fd98a";

// http://api.openweathermap.org/data/2.5/weather?q=krefeld,de&units=metric&appid=177cb6005572c76b18089a6d3a9fd98a


module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl)
            
            .then(function(res){
            
            if(res.data.cod === 200){
                return {temp: res.data.main.temp, loc: res.data.name, country: res.data.sys.country};
            }})
            .catch(function(err){
                throw new Error(err.response.data.message);
            })
    }
}