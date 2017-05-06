#ADD npm webpack globally

    -npm install -g webpack@1.12.13
    
#ADD npm react and react-dom locally

    -npm install --save react@0.14.7 react-dom@0.14.7

#ADD devDependencies webpack, babel-core, babel-loader, babel-preset-es2015, babel-preset-react

    -npm install --save-dev webpack@1.12.13 babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0
    
#Index changes: 

    -delete cdn's
    -delete type of script and change src to "bundle.js"
    
#ADD new file in public: app.js:

    -require components
    -run components
    
#ADD components dir in public:

    -add Greeter.js
    -define function greeter()
    -export function: module.exports = greeter;
    
#ADD Webpack/ generate bundle.js    (doesn't work with jsx):

    -$ webpack ./public/app.js ./public/bundle.js (in terminal)

#ADD Webpack Config: 

    - add webpack.config.js:
        -entry
        -output {path, filename}
        -resolve {extensions[]}
        
    - run webpack with $ webpack
    
#ADD Babel & jsx support: 

    - webpack.config.js changes: 
        - change entry to app.jsx
        - add module {
            loaders[{
                loader,
                query{presets[]},
                test,
                exclude
            }]
        }
        
    -run $ webpack
    
#Refactor Components:

    - require React & ReactDOM in app.jsx
    - create Greeter.jsx, GreeterForm.jsx, GreeterMessage.jsx in components
    - require react and module.export each function
    - require components in Greeter.jsx
    - require Greeter.jsx in app.jsx
    
#Custom Package Names:

    - change component require paths in app.jsx & greeter.jsx to filename only
    - add to webpack.config in resolve obj:
        root: __dirname,
        alias: {
            Greeter: "public/components/Greeter.jsx",
            GreeterMessage: "public/components/GreeterMessage",
            GreeterForm: "public/components/GreeterForm"
        },
        extensions[]
        
    - use $ webpack -w to listen for live changes !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
#react-router:

    - npm install react-router@2.0.0 --save
    
#devtools: 

    - add "debugger;" to code to pause code and access code in console
    - add "cheap-module-eval-source-map", "inline-source-map" or 
      "eval-source-map" to webpack.config as devtool: "string" to 
      show hand-written code in console
    
#refactoring stateless functional components:

    - presentational components with render function only:
    -   var WeatherMessage = ({temp, location}) => { // obj destr. of whatver is passed(props)
            // var {temp, location} = props;
            return(
                <p>It's {temp} °C in {location}</p>
                )    
        };

#installing foundation:

    - npm install css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1 foundation-sites@6.2.0 --save-dev
    - update webpack.config:
        entry[]: add paths to jquery and foundation-sites js before app.jsx 
            add script! in front inside the path
        externals{}: jquery: "jQuery"
        add var webpack = require("webpack") before module.exports to 
        load in webpack utilities then add
            plugins[]: new webpack.ProvidePlugin({
                "$": "jquery",
                "jQuery": "jquery"
            })
    - app.jsx:
        add require("style!css!foundation-sites/dist/foundation.min.css");
            chain style-loader(to inject into html) and 
            css-loader(to tell require what to do with css)
        start foundation: $(document).foundation();
        
#add ErrorModal & Component Lifecycle Methods:

    -componentWillMount: gets called before rendering
    -componentDidMount: gets called after rendering, allowing access to any refs of children
    - ErrorModal.jsx: 
        componentDidMount: function() {
            var modal = new Foundation.Reveal($("#error-modal"));
            modal.open();
        }
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <button className="button hollow" data-close="">Okay</button>
    
#add PropTypes to ErrorModal.jsx:

    - set expected values for props and wether they are required
        propTypes: {
            title: React.propTypes.string,
            message: React.propTypes.string.isRequired
        }
        
#add scss:

    - npm install sass-loader node-sass
    - change .css to .scss
    - change alias to .scss in webpack.config
    
#Fix Nav Search & Example Links:

    Weather.jsx-----------------------------------------------------------------
    Read URL Props to find location:
    +    componentDidMount: function(){
    +        var location = this.props.location.query.location;
    +        
    +        if(location && location.length > 0){
    +            this.handleSearch(location);
    +            window.location.hash = "#/";
    +        }
    +    },
    Receive new Props from Main.jsx(Container) after Rendering:
    +    componentWillReceiveProps: function(newProps){
    +        var location = newProps.location.query.location;
    +        
    +        if(location && location.length > 0){
    +            this.handleSearch(location);
    +            window.location.hash = "#/";
    +        }        
    +    },
    Nav.jsx---------------------------------------------------------------------
    Read input value and encode input for URL usage:
    +        var location = this.refs.location.value;
    +        var encodedLocation = encodeURIComponent(location);
    +        
    +        if(location.length > 0){
    +            this.refs.location.value = "";
    +            window.location.hash = "#/?location=" + encodedLocation;
    +        }