import React from 'react'

//renders information component such as map and hours
function Info(){
    return(
        <div className="info">
            <h3 className="info-title">Stop on by</h3>
            <hr/>
            <table>
                <tbody>
                    <tr>
                        <td>Monday - Friday</td>
                        <td>10:00am - 8:00pm</td>
                    </tr>
                    <tr>
                        <td>Saturday - Sunday</td>
                        <td>10:00am - 10:00pm</td>
                    </tr>
                    <tr>
                        <td>Call us:</td>
                        <td>(123)-456-7890</td>
                    </tr>
                    <tr>
                        <td>Email us:</td>
                        <td>username@domain.ext</td>
                    </tr>
                </tbody>
            </table>
            <div className="info-map">
                <img src="images/map.png"/>
            </div>
            <hr/>
        </div>
    )
}

export default Info