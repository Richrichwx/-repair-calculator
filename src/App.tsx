import React from 'react';
import './App.css';
import FeedBack from "./components/FeedBack";
import Setting from "./components/Settings";

const App = () => {
  return (
    <div className="App">
      <Setting />
      <FeedBack />
    </div>
  );
};

export default App;
