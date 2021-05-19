import Heading from "../../../components/meta/heading";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";

import Profile from "../../../components/layout/profile";

import { useRouter } from "next/router";

import { useAuth } from "../../../components/context/auth-context";

import { useState, useEffect } from "react";

export default function UserPage(){

    const [user, setUser] = useState('');

    const { getUser } = useAuth();

    const router = useRouter();
    const { uid } = router.query;

    useEffect(()=>{
       setUser(getUser(uid));
    },[])

    return(
        <div>
            <Heading title=" - Profile" />
            <Header />
            
            <Profile user={user} />

            <Footer />
        </div>
    )
}