var React = require("react");

var Nav = require("Nav");

// var Main = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <h2>Main Component</h2>
//                 <Nav/>
//                 {this.props.children}
//             </div>
//             )
//     }
// });

var Main = (props) => {
    return (
        <div>
            <h2>Main Component</h2>
            <Nav/>
            {props.children}
        </div>
        )    
};

module.exports = Main;