import React, { Component } from 'react'
import axios from 'axios'

function App() {

  let getData = async () => {
    let axiosData = await axios.get('http://localhost:8888/wheather')

    console.log((axiosData));
  }
  return (
    <div className="App">
      <div>
        <button onClick={getData}>Get</button>

      </div>

    </div>
  );
}

export default App;
