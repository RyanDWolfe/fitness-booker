import React, { Component } from 'react'

class StudiosContainer extends Component {


  getStudios() {

  }
  
  
  
  
  
    render() {
    return (
      <div>
	<div className="inputContainer">
	  <input className="taskInput" type="text" 
	    placeholder="search" maxLength="50" />
	</div>  	    
	<div className="listWrapper">
	   <ul className="taskList">
	   </ul>
	</div>
      </div>    
    )
  }
}

export default StudiosContainer