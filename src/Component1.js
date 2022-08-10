import React from 'react'
import "./Component1.css"
import { TextField } from '@mui/material'

export default function Component1() {

  const loginbtnfun=()=>{
    document.getElementById("inner_div_register_form1").setAttribute("style","display:none")
    document.getElementById("inner_div_register_form2").setAttribute("style","display:block")
    document.getElementById("login_btn").setAttribute("style","display:none")
    document.getElementById("register_btn1").setAttribute("style","display:block")

  }

  const registerbtnfun=()=>{
    document.getElementById("inner_div_register_form1").setAttribute("style","display:block")
    document.getElementById("inner_div_register_form2").setAttribute("style","display:none")
    document.getElementById("register_btn1").setAttribute("style","display:none")
    document.getElementById("login_btn").setAttribute("style","display:block")

    
  }
  return (
    <div id="component1">
        <div id="register_form">
            <div id="inner_div_register_form1">
              <h1 id="register_now">Register Now</h1>
              <table>
                  <tr><td><i class="fa fa-user" aria-hidden="true" style={{fontSize:"2vw"}}></i></td><td className="label_heading">Name</td><td><TextField id="outlined-basic" label="Name" variant="outlined" style={{fontSize:"5vw"}} autoFocus={true}/></td></tr>
                  <tr><td><i class="fa fa-phone" aria-hidden="true" style={{fontSize:"2vw"}}></i></td><td className="label_heading">Mobile</td><td><TextField id="outlined-basic" label="Mobile" variant="outlined" /></td></tr>
                  <tr><td><i class="fa fa-envelope" aria-hidden="true" style={{fontSize:"2vw"}}></i></td><td className="label_heading">Email </td><td><TextField id="outlined-basic" label="Email" variant="outlined" /></td></tr>
                  <tr><td><i class="fa fa-key" aria-hidden="true" style={{fontSize:"2vw"}}></i></td><td className="label_heading">Password</td><td><TextField id="outlined-basic" label="Password" variant="outlined" /></td></tr>
              </table>
              
              <label class="container">Agree with Terms and Conditions
               <input type="checkbox" />
               <span class="checkmark"></span>
             </label>
             <input type="button" value="Register" id="register_btn"/>
            </div>
            <button id="login_btn" onClick={loginbtnfun}>Login</button>
            <div id="inner_div_register_form2">
              <h1 id="register_now">Login Now</h1>
              <table>
                
                  <tr><td><i class="fa fa-envelope" aria-hidden="true" style={{fontSize:"2vw"}}></i></td><td className="label_heading">Email </td><td><TextField id="outlined-basic" label="Email" variant="outlined" /></td></tr>
                  <tr><td><i class="fa fa-key" aria-hidden="true" style={{fontSize:"2vw"}}></i></td><td className="label_heading">Password</td><td><TextField id="outlined-basic" label="Password" variant="outlined" /></td></tr>
              </table>
              
      
             <input type="button" value="Login" id="login_user_btn"/>
            </div>
            <button id="register_btn1" onClick={registerbtnfun}>Register</button>
        </div>
    </div>
  )
}
