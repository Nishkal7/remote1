import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main Page where the flow will start</h1>
      <Link to="/test">Go to State sharing POC Page</Link>
    </div>
  );
};

export default Main;
