import React, { Component} from 'react'
// import axios from 'axios'
import GettingData from './components/form'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header >
          <h1>City Explorer </h1>
        </header>

        <GettingData />
      </div>
    )
  }
}


export default App;
