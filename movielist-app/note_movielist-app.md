Movie List App
==============

Technologies used:
    - React
    - Bootstrap
    - Babel
    - Webpack

1. Configure Webpack:
    Add two scripts in the package.json file- start script and build script
    `
    start: webpack --mode development
    build: webpack --mode production
    `
    Once babel is installed, we need to configure webpack so that it can work with babel
    Configure webpack for html file

2. Creating a development server
    install the package webpack-dev-server
    change the start script as following:
        `start: webpack-dev-server --mode development --open`
    this will recompile the entire project if there is any change in any files.

3. Structuring the project
   src- this folder contains all react code
    - container
    - component 

4. Adding style: Bootstrap
    install bootstrap and css loader
    `npm install --save-dev bootstrap css-loader style-loader`

    Add this line to react app entry point i.e. src/index.js
    `import 'bootstrap/dist/css/bootstrap.min.css';`

5. Adding ESLint
    install the following package
    `npm install --save-dev eslint eslint-loader esling-plugin-react`


