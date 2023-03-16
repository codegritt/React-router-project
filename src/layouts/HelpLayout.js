import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout(){
    return(
        <div className="help-layout"> 
<h2>Website to help</h2>


<nav>
  
   <NavLink to={"/faq"}>View the FAQ</NavLink>
   <br></br>
   <br></br>
   <NavLink to={"/contact"}>Contact Us</NavLink>
 </nav>

<Outlet></Outlet>
        </div>
    )
}