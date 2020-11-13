import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';
import WeatherBox from "./components/WeatherBox";

function App() {
  return (
    <div>
      <WeatherBox />
    </div>
  );
}

export default App;
