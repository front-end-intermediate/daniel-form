import { render } from "react-dom";
import React from "react";

export const App = () => {
  return (
    <>
      <h1>It works!</h1>
    </>
  );
};

render(<App />, document.getElementById("root"));
