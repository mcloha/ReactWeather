var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This app is part of the <b>React JS</b> course. You can try to search for weather in the <u>Get Weather</u> tab, or in the search section above.</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> ~ This was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> ~ This was the api for weather data by city name.
                </li>
            </ul>
        </div>
        
    )
}

module.exports = About;