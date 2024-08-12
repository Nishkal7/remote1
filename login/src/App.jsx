import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Main from "./Main";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />}/>
      {/* POC TESTING COMP Below */}
      <Route path="/test" element={<Home />}/>
    </Routes>
  </Router>
);
export default App;