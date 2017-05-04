var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function(){
//         var {temp, location} = this.props;
//         return(
//             <p>It's {temp} °C in {location}</p>
//             )
//     }
// });

var WeatherMessage = ({temp, location}) => {
    return(
        <div className="primary callout">
            <p className="text-center">It's <strong>{temp} °C</strong> in <strong>{location}</strong></p>
        </div>
        )    
};

module.exports = WeatherMessage;