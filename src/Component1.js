import React from 'react'
import "./Component1.css"
import { TextField } from '@mui/material'

export default function Component1() {
  return (
    <div id="component1">
        <div id="register_form">
            <div id="inner_div_register_form">
              <h1 id="register_now">Register Now</h1>
              <table>
                  <tr><td className="label_heading">User Name</td><td><TextField id="outlined-basic" label="User name" variant="outlined" style={{fontSize:"5vw"}}/></td></tr>
                  <tr><td className="label_heading">Full Name</td><td><TextField id="outlined-basic" label="Full Name" variant="outlined" /></td></tr>
                  <tr><td className="label_heading">Email </td><td><TextField id="outlined-basic" label="Email" variant="outlined" /></td></tr>
                  <tr><td className="label_heading">Password</td><td><TextField id="outlined-basic" label="Password" variant="outlined" /></td></tr>
              </table>
              
              <label class="container">Agree with Terms and Conditions
               <input type="checkbox" />
               <span class="checkmark"></span>
             </label>
             <input type="button" value="Register" id="register_btn"/>
            </div>
        </div>
    </div>
  )
}
