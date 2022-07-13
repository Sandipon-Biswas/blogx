
import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout';
import data from "./data.json"
const SinglePost = () => {
    const {id} =useParams();
    const foundBlog = data.filter((detail) => detail.id == id);
     console.log(foundBlog);
    const { url,title,dec } = foundBlog[0] ;
    return (
        <>
        <Layout>
        <div className=" container p-5 " >
            <div className="text-center"><img width="500px"  src={url} alt=""/></div>
            <h1 className="text-primary   " > {title} </h1>
            <p style={{textAlign: "justify"}} className="text-light text-justify " > { dec } </p>
            
        </div>
        </Layout>
        </>
    )
}

export default SinglePost
