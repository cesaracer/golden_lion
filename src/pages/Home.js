import React from 'react'
import Slideshow from '../components/Slideshow'
import Gallery from '../components/Gallery'
import Accolades from '../components/Accolades'
import Collage from '../components/Collage'
import Info from '../components/Info'

//home page
function Home(){
    return(
        <div>
            <Slideshow/>
            <Gallery/>
            <Accolades/>
            <Collage/>
            <Info/>
        </div>
    )
}

export default Home