import React from 'react'
import Img2 from '../Images/img3.png'

function Service() {  
    return (
        <>
            <section style={{backgroundColor:'skyblue'}} id="header" className=" d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                         <div  className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1"></div>
                         <h1>
                             Expand You Business With <strong className="brand-name">IMG Global Infotech</strong>
                         </h1>
                        
                             <h2 className="my-3 ml-0">
                                 We have Good Team To Build Web Apps
                             </h2>
                          <div className="mt-3">
                              <a href="" className="btn-get-started">Get Started</a>
                          </div>
                        </div>
                        <div className="col-lg-12 orded-1  order-lg-2 header-img">
                            <img src={Img2} 
                            className="img-fluid animated" 
                            alt=" home img"/>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
            </>
    )
}

export default Service
