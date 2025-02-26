import React, { Component } from 'react'
import css from './css/NavBarSimple.module.css'

export class NavBarSimple extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello Guest",
         isLoggedIn: false,
         buttonText: "Log In"
      }
    }
    handleClick = () =>{
        this.setState(prevState =>{
            return{
                message: !prevState.isLoggedIn ? "Hello Guest" : "Hello User",
                buttonText: !prevState.isLoggedIn ? "Log In" : "Log Out",
                isLoggedIn: !prevState.isLoggedIn,
            }
        })
    }
    
    render() {
    return (
      <div className={css.NavBar}>
        <span>{this.state.message}</span>
        <button onClick = {this.handleClick}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default NavBarSimple
