import React from 'react'

//renders simple gallery of food
function Gallery(){
    return(
        <div className="info">
            <h3 className="info-title">Delicious Food</h3>
            <hr/>
            {/* images are set using css to avoid using precise measurements*/}
            <div className="info-images">
                <div className="info-img-1"></div>
                <div className="info-img-2"></div>
                <div className="info-img-3"></div>
            </div>
            <hr/>
        </div>
    )
}

export default Gallery