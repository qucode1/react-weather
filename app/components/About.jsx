var React = require("react");
var {Link} = require("react-router");

// var About = React.createClass({
//     render: function(){
//         return(
//             <h3>About Component</h3>
//         )
//     }
// });

var About = (props) => {
    return(
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Welcome to my <strong>React Weather App</strong>. Search for any city you want and find out about it's weather.</p>
            <ul>
                <li>
                    <a target="_blank" href="https://facebook.github.io/react/">React</a> - This was the JavaScript framework used.
                </li>
                <li>
                    <a target="_blank" href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
                </li>
            </ul>
            <Link to="/" className="button">Get Started</Link>
        </div>
    )
};

module.exports = About;