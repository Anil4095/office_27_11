import React, { useEffect, useState } from 'react'
import '../App.css';

function SizeEffect() {
    const [screen, setScreen] = useState(window.screen.width)


    const actualWidth=()=>{
        console.log(window.innerWidth)
        setScreen(window.innerWidth)
    }

    useEffect(()=>{
        console.log(" Add event")
        window.addEventListener("resize",actualWidth)
         
          return ()=>{
              console.log("Remove  event")
              window.removeEventListener("resize", actualWidth)
          }
    })
    return (
        <div className="header" style={{backgroundColor:"Browm"}}>
            <h1>This is Size Effect   : {screen} </h1>
        
        </div>
    ) 
}

export default SizeEffect
