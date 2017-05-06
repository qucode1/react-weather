var React = require("react");

var WeatherForm     = require("WeatherForm");
var WeatherMessage  = require("WeatherMessage");
var openWeatherMap  = require("openWeatherMap");
var ErrorModal      = require("ErrorModal");

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false,
        }
    },
    handleSearch: function(location){
        var that = this;
        
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            temp: undefined,
            location: undefined
        });
        
        openWeatherMap.getTemp(location).then(function(tempAndLocation){
            that.setState({
                location: tempAndLocation.loc + ", " + tempAndLocation.country,
                temp: tempAndLocation.temp,
                isLoading: false
            });
            
        }, function(e){
            console.log(e.message);
            that.setState({
                errorMessage: e.message,
                isLoading: false
            });
        });
    },
    render: function(){
        var {isLoading, temp, location, errorMessage} = this.state;
        
        function renderMessage(){
            if(isLoading){
                return <p className="text-center">Fetching Weather...</p>
            } else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>
            } else if(errorMessage){
                return <p className="text-center">Couldn't get current weather data: {errorMessage}</p>
            }
        }
        
        function renderError(){
            if(typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage}/>    
                )
            }
        }
        
        return(
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;