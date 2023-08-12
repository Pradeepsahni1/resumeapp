import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";
import Editor from "./components/Editor/Editor";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Editor/>
    </div>
  );
}

export default App;