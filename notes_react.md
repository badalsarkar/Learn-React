REACT
=====
Sources
-------
1. <https://www.taniarascia.com/getting-started-with-react/>

#### JSX
JSX = Javascript + XML
HTML like syntax inside javascript file.
React uses JSX but it is not mandatory. Using it helps to read the code and find many errors.


#### Setting up REACT
- You can add React CDN and Babel CDN and the srcipt in the HTML file. THis is not the best way as it is difficult to 
maintain. 
- user the "create-react-app" command. This will setup the development environment for you.
  The command is "npx create-react-app *name of the app*. Once you installed, run "npm start". This will run the app in 
  localhost 3000.
- React Developer Tools- A google chrome plugin that helps debugging react in chrome dev tools.

#### Folder structure
- Public folder: contains the html file with "root" element. All react components are added in the root element
- src folder: this folder contains all our React code. 

#### Type of component
- Class component: These are custom component defined as class. A class component must include a render() method and the 
 return can only return one parent element.
- Simple component: This is a function. This component does not use the "class" keyword. The function returns JSX code.

#### Props
React handles data with properties (Props) and state
Props are read-only for components. So, components can't change the Props value.

#### State
This is data that can be saved and modified without being added to the database. For example, items added and removed
from shopping cart.

## Rendering Element
Elements are the smallest building blocks of React apps. 
React elements are immutable. They can't be changed once created. The only way to update them is to create new element.
to render an element, you need to pass two things to ReactDOM.render method- the element itself and the DOM node where to 
render the element.
`
const element= <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
`

## Components and Props
Components are re-usable items. They are made of elements. They are javascript function take input and return React 
element describing what should appear in the screen. 

Props are the argument that is passed to component as JSX attributes. When React sees an element representing a user defined
component, it passes the JSX attribute to this component as single object. this object is called "props".

Always start component name with capital letter. Component with lowercase letter is treated as DOM tags.This is realted
to JSX. To learn more about the reasoning [click here](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)


## State and Lifecycle

State variables are private to the component and mutable. To use state  variable, we need to declare the component as 
class. We need to add a constructor and call the base constructor with the props

When a component is added to the DOM it is called mounting and when it is removed from the DOM it is called unmounting. 
We can run special function during mounting and unmounting. Function named "componentDidMount()" is called while mounting.
And "componentWillUnmount()" is called during unmounting. 

setState() function triggers an update in the UI.

## Event Handler

## Conditional Rendering

## Lists and Keys
- the use of map() method.
- use keys in an array of items

## Forms
- Controlled Component
