import React, { Component } from "react";
import "./App.css";
import SmurfVillage from './Smurfs'
import SmurfsForm from './SmurfsForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfVillage />
        <SmurfsForm />
      </div>
    );
  }
}

export default App;
