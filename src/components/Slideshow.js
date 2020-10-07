import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

//renders carousel component
function Slideshow(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //makes arrows visible
        nextArrow: <div style={{color: "black"}}/>,
        prevArrow: <div style={{color: "black"}}/>

    }
    return(
        <div className="slideshow">
            <Slider {...settings}>
                {/*
                    slide images are set as backgrounds using css
                */}
                <div className="slide-img-1">
                    <div className="caption">Come try our award winning Lo Mein</div>
                </div>
                <div className="slide-img-2">
                    <div className="caption">Handmade dumplings</div>
                </div>
                <div className="slide-img-3">
                    <div className="caption">Have a seat at our bar</div>
                </div>
            </Slider>
        </div>
    )
}

export default Slideshow