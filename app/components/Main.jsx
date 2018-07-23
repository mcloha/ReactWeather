var React = require('react');
var Navbar = require('Navbar');

var Main = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {children}
                </div>
            </div>           
        </div>
    )
}

module.exports = Main;