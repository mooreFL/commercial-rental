import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51JtkFRFAXQF3PAb4qY9z72BJ2hqPV5JlNc2zj00m9Aupi5Ci4peK622oZ5hBo7kHwn4kg701AFcsheE5BtE1I4Of00jiaSmziR" 

const stripeTestPromise = loadStripe(PUBLIC_KEY);


export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm /> 
        </Elements>
    );
}

