var React = require("react");
var {Link} = require("react-router");

var Examples = React.createClass({
    render: function(){
        return(
            <div>
                <h1 className="text-center page-title">Examples</h1>
                <p>This is the examples page.</p>
                <ol>
                    <li>
                         <Link to="/?location=Philadelphia, Us">Philadelphia, PA</Link>
                    </li>
                    <li>
                        <Link to="/?location=Rio, Br">Rio, Brazil</Link>
                    </li>
                </ol>
            </div>
        )
    }
});

module.exports = Examples;