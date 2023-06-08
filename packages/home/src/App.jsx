import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const Nav = React.lazy(()=> import("mfNav/Nav"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
  <React.Suspense fallback="Loading Nav">
    <Nav />
    </React.Suspense>
    <div>Name: home</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
