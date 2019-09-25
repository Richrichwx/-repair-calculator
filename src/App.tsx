import React from 'react';
import './App.css';
import Form from "./components/Form";
import Setting from "./components/Settings";

const App = () => {
  return (
    <div className="App">
      <Setting />
      <Form />
    </div>
  );
};

export default App;
