import React, { useEffect, useState } from 'react'
import '../App.css';

function UseEffectApi() {
    const [users, setUsers] = useState([])

    const getUsers= async()=>{
      const res= await fetch("https://jsonplaceholder.typicode.com/photos");
            setUsers(await res.json());
          
    }
    useEffect(()=>{
        getUsers();
    },[])
    return (
        <>
        <div className={{backgroundColor:"gray"}}>
        <h1>List Of GitHub User</h1> 
           <div className="container-fluid mt-5">
               <div className="row text-center">

                   {
                       users.map((curEle)=>{
                          return(
                            <div className="col-10 col-md-4 mt-5"  key={curEle.id}>
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image"><img  sec={curEle.thumbnailUrl} className="rounded" width="155" /></div>
                                    <div className="ml-3 w-100" >
                                       <h4 className="mb-0 mt-0 textLeft">User</h4>
                                       <span className="textLeft">{curEle.title}</span>  
                                       <div className="p-2 m-2 bg-primary d-flex justify-content-between rounded  text-white stats">
                                           <div className="d-flex flex-column"><span className="articles">Articles</span><span className="number1">38</span></div>
                                           <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number2">980</span></div>
                                           <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number3">9.8</span></div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                          )
                       })
                   }
                   
               </div>
               </div> 
               </div>
        </>
    )
}

export default UseEffectApi
