import React from "react";
import './Nav.css';
import {Link} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
function Nav(){
    const{logout} = useAuth0();
    return(
        <div className="nav">
            <Link style={{textDecoration: 'none', color:'blue',}} to= '/' >Home</Link>
            <Link style={{textDecoration: 'none', color:'blue',}} to= '/about' >About</Link>
            <Link style={{textDecoration: 'none', color:'blue',}} to= '/dashboard' >Dashboard</Link>
             <button onClick={()=> logout()} className="logout"> Logout</button>
        </div>
    )
}
export default Nav;