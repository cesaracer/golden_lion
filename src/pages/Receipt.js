import React from 'react'
import { Redirect } from 'react-router-dom'

function Receipt(props){
    //redirects to home page if email state is empty/undefined
    if(props.location.state.email === ''){
        return(
            <Redirect to="/"/>
        )
    }
    return(
    //displaying order number and email where receipt was sent
        <div className="receipt">
            <h2>Order: #{props.location.state.orderId}</h2>
            <h4>An email has been sent to {props.location.state.email},</h4>
            <h4>Thank you for ordering</h4>
        </div>
    )
}

export default Receipt