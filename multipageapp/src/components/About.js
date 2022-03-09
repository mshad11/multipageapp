import React from 'react';
import './About.css'
import {Link} from 'react-router-dom'
function About(){
    return(
        <div className='about'>
            <h1>About us</h1>
            <h1>Welcome to About Page</h1>
            <Link to = '/'>Go to Home</Link>
            <Link to = '/dashboard'></Link>
            
            </div>
    )
}
export default About;