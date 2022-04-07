import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Resources from "./Resources";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
  // const [bacon, setBacon] = useState(null);
  // useEffect(() => {
  //   fetch("/bacon")
  //     .then((res) => res.json())
  //     .then((data) => setBacon(data));
  // }, []);
  // return <div>{bacon ? bacon : `...where's my stuff?...`}</div>;
}

export default App;
