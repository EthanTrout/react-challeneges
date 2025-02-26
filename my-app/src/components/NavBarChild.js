import React from 'react'

function NavBarChild(props) {
  return (
    <div>
       <form>
                <label >UserName</label>
                <input placeholder='Enter Username'></input>
                <label>Password</label>
                <input placeholder='Enter Password'></input>
                <button onClick = {props.handleClick}>{props.buttonText}</button>
            </form>
    </div>
  )
}

export default NavBarChild
