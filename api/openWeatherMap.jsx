var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=177cb6005572c76b18089a6d3a9fd98a";

// http://api.openweathermap.org/data/2.5/weather?q=krefeld,de&units=metric&appid=177cb6005572c76b18089a6d3a9fd98a


module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        })
    }
}