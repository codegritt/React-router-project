import React from "react"
import { NavLink, Outlet } from "react-router-dom"


export default function RootLayouts(){
    return(
        <div className="root-layout">
 <header>
 <nav>
   <h1>React router</h1>
   <NavLink to={"/"}>Home</NavLink>
   <br></br>
   <br></br>
   <NavLink to={"/about"}>About</NavLink>
 </nav>

   </header>

   <main>
       <Outlet></Outlet>
   </main>

        </div>
    )
}