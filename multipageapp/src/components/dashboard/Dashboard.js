import React from 'react';
import './Dashboard'
import {Link} from 'react-router-dom'
import Card from '../abouta/Card';
function Dashboard(){
    return(
        <div className='dashboard'>
            <h1>This is mybdashboard</h1>
            <Link to = '/'>Go to Home</Link>
            <Link to = '/about'>About</Link>
            <Card/>
            <Card/>
        </div>
    )
}
export default Dashboard;