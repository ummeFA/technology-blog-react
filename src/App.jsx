import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './assets/components/Card/Card'
import SideCard from './assets/components/SideCard/SideCard'
import NavigationBar from './assets/components/NavigationBar/NavigationBar'


function App() {
  // const [totalBookmark, setTotalBookmark]=useState("");

  // const handleBookmark =(item)=>{
  //   const previousBookmark = JSON.parse(localStorage.getItem("totalBookmark"));
  //   if(previousBookmark){
  //     const sum = previousBookmark+sum;
  //     localStorage.setItem("totalBookmark",sum);      
  //   }else{
  //     localStorage.setItem("totalBookmark",item);      
  //   }
  // }



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