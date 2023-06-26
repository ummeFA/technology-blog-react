import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './assets/components/Card/Card'
import NavigationBar from './assets/components/NavigationBar/NavigationBar'


function App() {
  
  return (
    <>
        {/* main div */}
        <div className="fixed-top justify-content-between">
         <NavigationBar></NavigationBar>
        </div>
        
        <div className="main row w-100">
            
          <div className="">
            <Card></Card>
          </div>
        </div>
 
    </>
  )
}

export default App