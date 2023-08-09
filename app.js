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


const heading1 = React.createElement("h1", {
    id : "title",
    style : {
        color: "red"
    }
}, "RED");

const heading2 = React.createElement("h2", {
    id : "title",
    style : {
        color: "blue"
    }
}, "BLUE");

const container = React.createElement("div", {
    id: "container",
    style: {
        background: "yellow"
    }
}, 
[heading1, heading2]
)

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(container);