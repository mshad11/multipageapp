import React from 'react';
import './Card.css'
import {Link} from 'react-router-dom'
function Card(){
    return(
        <div className='card'>
        <p>Shahid simple card</p>
        <p>of blog</p>
        <Link to = '/dashboard'><p>read more to Dashboard</p></Link>
        <Link to = '/about'><p>read more to About</p></Link>
        </div>
    )
}
export default Card;