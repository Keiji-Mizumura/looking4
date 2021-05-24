import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import UserProfile from "../../components/layout/user-profile";
import VerificationNotification from "../../components/layout/verification-notification";

import { useEffect, useState } from "react";
import { useAuth } from "../../components/context/auth-context";
import { useRouter } from "next/router";

import firebase from "../../components/backend/firebase";

export default function ProfilePage(){

    const { hasUser, currentUser, writeUserData, isVerified } = useAuth();
    const router = useRouter();

    const [verified, setVerified] = useState(false);

    useEffect(()=>{
        var user = firebase.auth().currentUser;
        setVerified(user.emailVerified);
        if(hasUser(currentUser.uid)){
            router.push("/profile/" + currentUser.uid);
        }
    },[]);

    return(
        <div>
            <Heading title=" - Profile" />
            <Header />
            {verified ? 
                <UserProfile /> :
                <VerificationNotification />
            }
            <Footer />
        </div>
    )
}
