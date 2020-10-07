import React from 'react'

//renders award section
function Accolades(){
    return(
        <div className="info">
            <h3 className="info-title">Community Favourite</h3>
            <hr/>
            <div className="info-images">
                <img height="250" src="images/win.png"/>
            </div>
            <div className="info-text">
                <div>
                    <p>Voted<br/>Best Local Business<br/>(2019)</p>
                </div>
                <div>
                    <p>Best Value<br/>Runner Up<br/>(2020)</p>
                </div>
                <div>
                    <p>Featured In<br/>"Blake's Must See"<br/>Food Blog<br/>(2020)</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Accolades