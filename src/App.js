import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './components/Dialog';

class App extends Component {
  state={
    isOpen:false
  }
  render(){
    return (
      <div className="App">
        <button onClick={(e)=>this.setState({isOpen:true})}>Open Dialog</button>
        <Dialog isOpen={this.state.isOpen} onClose={(e)=>this.setState({isOpen:false})}>
          Lorem ipsum sit amet conseecteur
          Lorem ipsum sit amet conseecteur
        </Dialog>
      </div>
    );
  } 
}

export default App;
