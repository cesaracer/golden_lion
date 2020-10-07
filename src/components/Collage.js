import React from 'react'

//renders collage section
function Collage(){
    return(
        <div className="info">
            <h3 className="info-title">What Makes Us Special</h3>
            <hr/>
            <div className="collage">
                {/*overlay that covers the images*/}
                <div className="overlay">
                    <div className="ov-group">
                        <div className="ov-1"><h4>Fresh<br/>Handmade<br/>Noodles<br/><div className="highlight">Everyday</div></h4></div>
                        <div className="ov-1"><h4><div className="highlight">Local</div>Ingredients</h4></div>
                    </div>
                    <div className="ov-main"></div>
                    <div className="ov-group">
                        <div className="ov-1"><h4><div className="highlight">Family</div>Owned</h4></div>
                        <div className="ov-1"><h4>Tea<br/>Time<br/><div className="highlight">Specials</div></h4></div>
                    </div>
                </div>

                {/*image collage that is covered with text. images are set with css to avoid scaling issues*/}
                <div className="collage-group-1">
                    <div className="collage-img-1"></div>
                    <div className="collage-img-2"></div>
                </div>
                <div className="collage-img-main"></div>
                <div className="collage-group-1">
                    <div className="collage-img-3"></div>
                    <div className="collage-img-4"></div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Collage