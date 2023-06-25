import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './assets/components/Card/Card'
import SideCart from './assets/components/SideCard/SideCard'
// import Container from 'react-bootstrap/Container';
import NavigationBar from './assets/components/NavigationBar/NavigationBar'
// import SpentTime from './components/SpentTime/SpentTime'
// import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* main div */}
        <div className="fixed-top justify-content-between">
        <NavigationBar></NavigationBar>
        </div>
        
        <div className="main row w-100">
            
          <div className="card-container col-md-8"><Card></Card></div>
          <div className="sidecart col-md-4 card mt-5"><SideCart></SideCart></div>
        </div>
     
        {/* <div className="spent-time col">Spent time</div> */}
        
        
      
    </>
  )
}

export default App