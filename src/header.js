import React, {Component} from 'react'
import './App.css';

class header extends Component {
    constructor(props)
    {
    super(props);
    this.state={
        title: 'Meeting times',
       }
    }
    

    
    render(){
      return (
        
        <div className="App">
        <h2>{this.state.title}</h2>
       
    
          
    
          
        
          
    
          
    
          
    
         
        </div>
        );
    
    }
    }
    export default header