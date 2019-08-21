import React, {Component} from 'react';
import './App.css'

import CardBox from './components/CardBox'



export default class App extends Component {
  
  render(){
    return (
      <div className="App">
        <header className="header">
          <h2 className="Home">Home</h2>
        </header>
  
        <CardBox />
      </div>
    );

  }
}

