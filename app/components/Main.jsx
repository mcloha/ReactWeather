var React = require('react');
var Navbar = require('Navbar');

var Main = ({ children }) => {
    return (
        <div>
            <Navbar />
            <h2>Main Component</h2>
            {children}
        </div>
    )
}

module.exports = Main;