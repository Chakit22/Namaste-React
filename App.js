import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const jsxHeading = <h1 id="heading">Hello there!!</h1>;
// The above line is JSX and not HTML inside Javascript.
// It has a HTML like syntax.

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

/* Babel transpiles the code above and converts the JSX code to ECMA Script.*/

// JSX => React.createElement => JS Object => HTML Element. Babel does that .
// Babel is a dependency of PARCEL.

// React Functional component

const Title = () => <h1 className="head">Title component</h1>;

// console.log(title);

const HeadingComponent = () => (
  <div id="container">
    <h2>{console.log("dkdjhfjd")}</h2>
    <Title />
    <h1 className="heading">Heading Component</h1>
  </div>
);

const title = (
  <div className="head">
    hjfhdjf
    <HeadingComponent />
    {HeadingComponent()}
    <HeadingComponent></HeadingComponent>
  </div>
);

// root.render(<HeadingComponent />);
//typeof HeadingComponent is a function.

const ele1 = <div>{ele2}</div>;
const ele2 = <h1>Hey there</h1>;
// root.render(title);

//React fragments - To solve the problem of multiple parents inside JSX instead of using
// one more div tag use this React fragment.
const Component1 = () => (
  <React.Fragment>
    <div id="container1">
      <Title />
    </div>
    <div id="container2">Hey there</div>
  </React.Fragment>
);

const Component2 = () => (
  <>
    <div id="container1">
      <Title />
    </div>
    <div id="container2">Hey there</div>
  </>
);

// root.render(<component1/>);
root.render(<Component1 />);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Component2 />);