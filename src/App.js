import './App.css';
import React, { Component } from 'react';
import Burger from './components/Burger';

class App extends Component{
  render(){
    return(
      <div className='burgersContent'>
      <Burger />
      </div>
    )
  }
}

export default App;
