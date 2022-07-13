import React from 'react'
import Logo from '../smallFile/Logo'

const Footer = () => {
    return (
<div className="bg-dark">
    <div className="container pt-5 pb-2 text-light">
        <div className="row">
            <div className="col-md-4 text-light">
                <span> { <Logo/> } </span>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo minus vel aliquid quisquam nobis odit aut molestias soluta modi quas! </p>

            </div>
            <div className="col-md-4 text-center ">
                <h5>Links</h5>
                <p>home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className="col-md-4">

                <h5>Contact</h5>
                <p>013243523554</p>
                <p>dhaka</p>
                <p>Biplob@gmail.com</p>

            </div>
        </div>
    </div>
</div>
    )
}

export default Footer
