import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './assets/components/Card/Card'
import SideCard from './assets/components/SideCard/SideCard'
import NavigationBar from './assets/components/NavigationBar/NavigationBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* main div */}
        <div className="fixed-top justify-content-between">
         <NavigationBar></NavigationBar>
        </div>
        
        <div className="main row w-100">
            
          <div className="card-container col-md-9">
            <Card></Card>
          </div>

          <div  className="side-card col-md-3 mt-5">
            <SideCard></SideCard>
          </div>
        </div>
 
    </>
  )
}

export default App