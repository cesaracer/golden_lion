import Axios from 'axios'
import React, {useState } from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {email_regex, phone_regex, card_regex, cvc_regex, exp_regex} from '../regex'

//renders checkout form
function Checkout(props){
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [card, setCard] = useState('')
    const [cvc, setCvc] = useState('')
    const [exp, setExp] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const history = useHistory()

    const handleClick = async() => {
        //validating user info
        if(validate()){
            //api call to process order
            let res = await Axios.post('https://us-central1-restaurant-d2b4d.cloudfunctions.net/app/confirm', {email: email})
            if(res.request.status === 201){
                //redirecting to receipt page
                history.push({
                    pathname: '/receipt',
                    state: {
                        orderId: res.data.orderId,
                        email: email
                    }
                })
            }
        }
    }

    //validating user input using regular expressions
    const validate = () => {
        if(fName === '' || lName === ''){
            setErrorMsg('Please input your name')
            return false
        }
        if(!email_regex.test(email)){
            setErrorMsg('Invalid email')
            return false
        }
        if(!phone_regex.test(phone)){
            setErrorMsg('Invalid phone number')
            return false
        }
        if(!card_regex.test(card)){
            setErrorMsg('Invalid card number')
            return false
        }
        if(!cvc_regex.test(cvc)){
            setErrorMsg('Invalid CVC')
            return false
        }
        if(!exp_regex.test(exp)){
            setErrorMsg('Invalid expiration date')
            return false
        }
        return true
    }
    
    if(props.cart.length > 0){
        return(
            <div>
                <div className="title"><h1>Checkout</h1></div>
                <form>
                    <div>
                        <h5 style={{color: "red", fontStyle: "italic"}}>{errorMsg}</h5>
                    </div>
                    <div className="input-2">
                        <input value={fName} onChange={e => setFName(e.target.value)} placeholder="First name"/>
                        <input value={lName} onChange={e => setLName(e.target.value)} placeholder="Last name"/>
                    </div>
                    <div className="input-2">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        <input type="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone"/>
                    </div>
                    <div className="input-1">
                        <input value={card} onChange={e => setCard(e.target.value)} placeholder="Card Number"/>
                    </div>
                    <div className="input-3">
                        <input value={cvc} maxLength="3" onChange={e => setCvc(e.target.value)} placeholder="CVC"/>
                        <input value={exp} onChange={e => setExp(e.target.value)} placeholder="MM/YY"/>
                    </div>
                    <div>
                        <div className="btn" onClick={handleClick}>Confirm</div>
                    </div>
                </form>
            </div>
        )
    }
    else{
        //redirects to cart page if cart is empty
        return(
            <Redirect to="/cart"/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Checkout)