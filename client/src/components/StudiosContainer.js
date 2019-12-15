import React, { Component } from 'react'

class StudiosContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
          studios: {}
        }
      }

  async getStudios() {
    try {
      const response = await fetch('http://localhost:3000/api/v1/studios');
      const data = await response.json();
      this.setState({studios: data});
    } catch (err) {
      console.log(err)
    }
  }

  createStudioCard(){

  }

  createStudiosList() {
   const ul = document.getElementById('studioList')
   this.state.studios.map(function(studio){
    let li = document.createElement('li')
    li.innerHTML = studio.name
    ul.appendChild(li)
   })
  }

  
  
  
  async componentDidMount() {
    await this.getStudios();
    await this.createStudiosList()
  }
  
  
    render() {
    return (
      <div>
	<div className="inputContainer">
	  <input className="taskInput" type="text" 
	    placeholder="search" maxLength="50" />
	</div>  	    
	<div className="listWrapper">
	   <ul id="studioList"className="taskList">
	   </ul>
	</div>
      </div>    
    )
  }
}

export default StudiosContainer