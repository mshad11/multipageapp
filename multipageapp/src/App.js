
import './App.css';
import Nav from './components/navbar/Nav';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/dashboard/Home'
import About from './components/About';
import Dashboard from './components/dashboard/Dashboard';
import Login from './Login';
import {useAuth0} from '@auth0/auth0-react'
function App() {
  const {user} = useAuth0()
  return (
    <div className="app">
      {!user ? <Login/> :(<BrowserRouter>
      <Nav/>
     <div className='app-body'>
       <Routes>
         <Route path = '/' element = {<Home/>}></Route> 
         <Route path = '/about' element = {<About/>}></Route>
         <Route path = '/dashboard' element = {<Dashboard/>}></Route>
       </Routes>
     </div>

      </BrowserRouter>)}
      

     
    </div>
  );
}

export default App;
