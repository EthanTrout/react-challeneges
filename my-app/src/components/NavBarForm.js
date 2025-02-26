import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "My Gallery",
         isLoggedIn: false,
         buttonText: "Log in"
      }
    }
    handleClick = () =>{
        this.setState(prevState =>{
            return{
                isLoggedIn: !prevState.isLoggedIn,
                buttonText: prevState.isLoggedIn ? "Submit" : "Log out",
                
            }
        })
    }
    
    render() {
    return (
      <div className={css.NavBar}>
        <span>{this.state.message}</span>
        {this.state.isLoggedIn ?(
            <button onClick = {this.handleClick}>{this.state.buttonText}</button>
        ):(
            <NavBarChild handleClick = {this.handleClick} buttonText = {this.state.buttonText}/>
        )}
        
      </div>
    )
  }
}

export default NavBarForm
