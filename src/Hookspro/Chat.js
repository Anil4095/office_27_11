import React, { useEffect, useState } from 'react'

function Chat() {
    const [num , setNum]= useState(0)
    useEffect(()=>{
        if(num >= 1){
document.title= `Chat (${num})`
        }else{
            document.title=`Chat`;
        }
    })
    return (
        <div>
            <h1>This is Number Count: {num}</h1>
            <button onClick={()=>setNum(num+1)}>Click</button>
        </div>
    )
}

export default Chat
