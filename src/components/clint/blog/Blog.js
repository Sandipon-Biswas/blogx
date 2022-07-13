import React from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'
import {Container ,Card} from 'react-bootstrap';

const Blog = () => {
    return (
        <section className="container py-4 py-lg-5" >
        <div className="row j">
            {
               data.map((blog)=>{
                   const{id,title,url}=blog
                    return(
                       
                       <div key={id} className="col-lg-4 mx-0 mb-4 ">
                       <Card className=" p-0 shadow  " >
                           <Card.Img variant="top" src={url} />
                          
                           <Card.Body>
                              
                               <Card.Title> {title.slice(0,30)} </Card.Title>
                               
                               
                               <Link className=" btn-sm btn btn-primary" to={`/singlepost/${id}`} >Read more</Link>

                           </Card.Body>
                       </Card>
                   </div>
                       
          
                  

                    )
               })
            }  
        
            
        </div>
 </section>
    )
}

export default Blog
