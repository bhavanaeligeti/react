// const heading = document.createElement("h1");
// heading.innerHTML = "Hello everyone....";

// const root = document.getElementById("root");

// root.appendChild(heading);

// REACT

// const heading = React.createElement("h1", {
//     id : "title",
//     className : "header",
//     style : {
//         color: "red",
//         background: "green"
//     }
// }, "Hello Everyone...");
// console.log(heading)
// const root1 = ReactDOM.createRoot(document.getElementById("root"));

// root1.render(heading);


// const heading1 = React.createElement("h1", {
//     id : "title",
//     style : {
//         color: "red"
//     }
// }, "RED");

// const heading2 = React.createElement("h2", {
//     id : "title",
//     style : {
//         color: "blue"
//     }
// }, "BLUE");

// const container = React.createElement("div", {
//     id: "container",
//     style: {
//         background: "cyan"
//     }
// }, 
// [heading1, heading2]
// )

// const root2 = ReactDOM.createRoot(document.getElementById("root"));

// root2.render(container);



// importing react

import React from "react";
import ReactDOM  from "react-dom/client";

// React Element

// const heading = React.createElement("h1", {
//     id : "title"
// }, "Hello Everyone...");

// JSX

// const heading = (
//     <h1 key = "h1">
//         Hello Everyone....
//     </h1>
// );

// React Component

const Title = () => (
    <h1>React</h1>
);

var x = 10;

const HeaderComponent = () => {
    return (
        <div>
            {/* {heading} */}
            {/* <Title /> */}
            {Title ()}
            {x} 
            <h2>Get Started..</h2>
            <p>React is a free and open-source front-end JavaScript library for 
            building user interfaces based on components. </p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);