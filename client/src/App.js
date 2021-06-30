
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GetData from './components/city'

// import Cities from './components/cities'
class App extends Component {
  render() {
    return (
      <div className="App">

        <header >
          <h1>City Explorer </h1>
        </header>
        {/* <Cities /> */}
        <GetData />
      </div>
    )
  }
}

export default App