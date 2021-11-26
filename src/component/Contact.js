import React from 'react'
import Img from '../Images/OIP.jpg'

function Contact() {
    return (
        <>
             <section style={{ backgroundColor: 'skyblue' }} id="header" className=" d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12 pt-5 pt-lg-0  order-2 order-lg-1">
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
                                <div className="col-lg-6 col-12 orded-1  order-lg-2 header-img">
                                    <img src={Img}
                                        className="img-fluid animated"
                                        alt=" home img" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

            </>
    )
}

export default Contact
