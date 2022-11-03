import logo from './logo.svg';
import './App.css';

import React from 'react'
import Student from './Student'

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      name:"Eya B-Jaouahdou"
    }
  }

  render() {

  return (

    <div className="App"> 
  <h1>Hello Go My Code</h1>
    <Student name="Eya B-Jaouahdou" email={"eyajaouahdou19@gmail.com"}/>
    <button onClick={()=>this.setState({name:"Eya"}) } >Update Name</button>
    </div>
    

  );
  }
}
  
export default App;
