var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example location for try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Moscow'>Moscow, Russia</Link>
                </li>
                <li>
                    <Link to='/?location=Jerusalem'>Jerusalem, Israel</Link>
                </li>
            </ol>
        </div>
    );
} 

module.exports = Examples;