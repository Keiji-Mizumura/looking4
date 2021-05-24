import Container from "../containers/container";
import WarningMessage from "../ui/warning-message";

import { useEffect, useState } from "react";

import firebase from "../backend/firebase";

export default function VerificationNotification(){


    useEffect(()=>{
        var user = firebase.auth().currentUser;

        if(!user.emailVerified){
            user.sendEmailVerification().then(function() {
            // Email sent.
            }).catch(function(error) {
            // An error happened.
            });
        }
    },[])

    return(
        <div style={{marginTop: '75px'}}>
            <Container>
                <WarningMessage>
                    <h2>Your Account is not yet verified. Check email for verification link.</h2>
                </WarningMessage>
            </Container>
        </div>
    )
}