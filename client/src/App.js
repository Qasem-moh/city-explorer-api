
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GetDataFromUser from './components/city'

// import Cities from './components/cities'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GetDataFromUser />
      </div>
    )
  }
}

export default App