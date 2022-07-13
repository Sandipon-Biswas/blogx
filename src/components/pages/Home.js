import React from 'react'
import FinalBlog from '../clint/blog/FinalBlog'
import Layout from '../clint/Layout'
import TopSlidder from '../slidder/TopSlidder'

export const Home = () => {
    return (
        <>
            <Layout>
                <TopSlidder/>
                <FinalBlog/>
            </Layout>
        </>
    )
}
