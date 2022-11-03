import React from 'react';

export default class Student extends React.Component{


  render()
      
      {
        console.warn(this.props.name)
        return(
            <div style={{backgroundColor:"purple", margin:20}}> 
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfCfynXv42fOnrTQAs-99j09O8uz7mDilOQ&usqp=CAU'></img> 


           <h1>Bonjour {this.props.name}</h1>
           <h2>{this.props.email }</h2>
            </div>
        )
      }

}