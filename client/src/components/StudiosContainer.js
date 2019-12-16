import React, { Component } from 'react'

class StudiosContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
          studios: {}
        }
        this.createStudioCard = this.createStudioCard.bind(this) //not sure if this helps
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

  createStudioCard(studioDetail){ //can't seem to figure out how to eaily add a lot of html
    const div = document.createElement('div className="studioCard"')
    const name = document.createElement('h1')
    const class_type = document.createElement('h3')
    const description = document.createElement('p')
    const address = document.createElement('p')
    
    name.innerHTML = studioDetail.name
    class_type.innerHTML = studioDetail.class_type
    description.innerHTML = studioDetail.description
    address.innerHTML = studioDetail.address

    div.appendChild(name)
    div.appendChild(class_type)
    div.appendChild(description)
    div.appendChild(address)

    console.log(div) //can't get here
  }

  createStudiosList() {
   const ul = document.getElementById('studioList')
   this.state.studios.map(function(studio){
    let li = document.createElement('li')
    console.log(this) // this is undefined
    //const studioCard = <createStudioCard studioDetail={studio} /> //this function is not called correctly. I also tried this.createStudioCard(studio) and studio.createStudioCard(), etc.
    //li.innerHTML = studioCard //studio.name wroks, but want to absctract
    const div = document.createElement('div')
    div.setAttribute("class", "studioCard")
    const name = document.createElement('h1')
    const class_type = document.createElement('h3')
    const description = document.createElement('p')
    const address = document.createElement('p')
    
    name.innerHTML = studio.name
    class_type.innerHTML = studio.class_type
    description.innerHTML = studio.description
    address.innerHTML = studio.address

    div.appendChild(name)
    div.appendChild(class_type)
    div.appendChild(description)
    div.appendChild(address)
    li.appendChild(div)
    ul.appendChild(li)
   })
  }

  async componentDidMount() {
    await this.getStudios();
    this.createStudiosList()
  }
  
  
    render() {
    return (
      <div>
	<div className="inputContainer">
	  <input className="taskInput" type="text" 
	    placeholder="search" maxLength="50" />
	</div>  	    
	<div className="listWrapper">
	   <ul id="studioList" className="taskList"> 
	   </ul>
	</div>
      </div>    
    )
  }
}

export default StudiosContainer