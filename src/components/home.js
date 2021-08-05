import React from 'react'
import Nav from './nav'
import Intro from './intro'
import Interest from './interest'
import Service from './service'
import Footer from './footer'



const Home = () => {
    return(
        <div>
            <Nav />
            <Intro />
            <Interest />
            <Service />
            <Footer />
        </div>
    )
}

export default Home