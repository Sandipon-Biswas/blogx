import React from 'react'
import Footer from '../clint/Footer'
import Logo from '../smallFile/Logo'
import { Link } from 'react-router-dom'
const Dashboard = () => {
    return (
        <>
<div className="bg-dark">
<div className=" container text-light d-flex justify-content-between align-items-center  ">
                    <p className="mt-3" > <Link className="text-decoration-none"  to="/" > <Logo/> </Link> </p>
                    <p className="mt-3" > <h5>Dashboard</h5> </p>
                </div>
</div>
            <div className="container-fluid">
                <div style={{height:"90vh"}} className="row text-white">
                    <div  className="col-3 bg-dark d-grid  justify-content-center align-items-center  ">
                        <p><a style={{textDecoration:"none"}} href="">Manage</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Manage</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Manage</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Manage</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Manage</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Manage</a></p>
                        <p><a style={{textDecoration:"none"}} href="">Manage</a></p>
                    </div>
                    <div className="col-9 d-flex justify-content-center align-items-center">
                        <h1>Welcome To Admin   Dashboard</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard
