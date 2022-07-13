import React from 'react'
import Blog from './Blog'

const FinalBlog = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9"> <Blog/> </div>
                <div className="col-md-3 py-4 mt-4  ">
                    <div className="card w-100 bg-dark text-light px-4 ">
                        <p className="text-center mt-2 h6 " >Catagory</p>
                        <div className="d-flex justify-content-between "><p>sport</p> <p>3</p> </div>
                        <div className="d-flex justify-content-between "><p>Golobal</p> <p>3</p> </div>
                        <div className="d-flex justify-content-between "><p>Desi</p> <p>1</p> </div>
                        <div className="d-flex justify-content-between "><p>Football</p> <p>4</p> </div>
                        <div className="d-flex justify-content-between "><p>Cricket</p> <p>6</p> </div>
                    </div>
                    <div className="card w-100 bg-dark mt-5 text-light px-4 ">
                        <p className="text-center mt-2 h6 " >Popular Tag</p>
                        <div className="d-flex justify-content-between "><p>khena</p> <p>3</p> </div>
                        <div className="d-flex justify-content-between "><p>news</p> <p>3</p> </div>
                        <div className="d-flex justify-content-between "><p>khobor</p> <p>1</p> </div>
                        <div className="d-flex justify-content-between "><p>bangladesh</p> <p>4</p> </div>
                        <div className="d-flex justify-content-between "><p>sport</p> <p>6</p> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalBlog
