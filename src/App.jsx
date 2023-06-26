import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './assets/components/Card/Card'
import NavigationBar from './assets/components/NavigationBar/NavigationBar'


function App() {
 const [readTime, setReadTime] = useState("");

  const handleTime =(time)=>{
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if(previousReadTime){
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    }
    else{
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
    
  }

  return (
    <>
        {/* main div */}
        <div className="fixed-top justify-content-between">
         <NavigationBar></NavigationBar>
        </div>
        
        <div className="main row w-100">
            
          <div className="">
            <Card handleTime={handleTime} readTime={readTime}></Card>
          </div>
        </div>
 
    </>
  )
}

export default App