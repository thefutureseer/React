import React, { Component } from 'react'
import { getCountStart } from '../../virtualAPI/data'

export default class ClassComponent extends Component {

  //constructor to initialize state
  constructor(props) {
    super(props)
     this.state ={
      count: 0
     }

  }

  //componentDidMount
  componentDidMount() {
    //fetch from virtual api
    this.fetchData();
  }

  fetchData = () => {
    try {
      const startNumber = getCountStart();
      this.setState({count: startNumber.count})
    } catch(err){
      console.error()
    }
  }

  //event handler
  handleClick = () => {
    this.setState((prevCount)=>({
      count: prevCount.count - 1
    })
  )

  }

  // Render the component
  render() {
    const { message } = this.props; // Destructure props
    const { count } = this.state; // Destructure state

    return (
      <div>
      <h1>{message}</h1> {/* Prop */}
      <p>Count: {count}</p> {/* State */}
      <button onClick={this.handleClick}>Decrement</button>
    </div>
  )
}
}