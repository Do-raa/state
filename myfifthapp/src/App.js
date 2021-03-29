import './App.css';
import React, { Component } from 'react';  


export default class App extends Component { 

  state={  
    userProfil : {   
    fullName:"Dorra Elkahla", 
    bio:"i am a student ", 
    imgSrc:'./picture/girl.jpg', 
    profession: "webdevelopper"}, 
    time : 0 ,
    show : false
  } 

  tickHandler = ()=>{
    this.setState({time : this.state.time + 1})

    return this.state.time
  }

  componentDidMount(){
    var timer = setInterval(this.tickHandler , 1000)
    this.setState({time : timer})
  }
      
    
     
    
    

  render (){    
     if   (this.state.show === true) {  
        return <span><p>My name is : {this.state.userProfil.fullName}</p> 
        <p>My biography : {this.state.userProfil.bio}</p> 
        <p>My profession :I am a {this.state.userProfil.profession}</p>  
        <img src={this.state.userProfil.imgSrc} alt=""/></span>;} 

const displaytime = ()=>{
  if (this.state.time < 60){
    return this.state.time + 'Seconds(s)'
  }

  const SS = this.state.time % 60 ;
  const MM = ((this.state.time / 60) % 60).toFixed(0)
  const HH = (this.state.time/(60*60)).toFixed(0)
  return `${HH}h: ${MM}m: ${SS}s` ;
}
  return( 
  <div className ="App">  
  
  <button onClick={()=>this.setState({ show : true})}>Show Me</button>   
  <p>{displaytime()} </p>
  </div> 
  ) ;
} }
