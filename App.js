import React from "react";
import ReactDOM from "react-dom/client";

/*
HTML

<div id="parent">
    <div id = "child1">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
    <div id = "child2">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);
console.log(parent);

// heading is a React element and can be called as a Javascript object but not a HTML element.
console.log(typeof parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
// As DOM is a tree so we create root where all the code will be rendered.
//All code will be bundled and put inside this root.
root.render(parent);
//Here it converts heading an object into HTML.
