import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import UserProfile from "../../components/layout/user-profile";

import { useEffect } from "react";
import { useAuth } from "../../components/context/auth-context";
import { useRouter } from "next/router";

export default function ProfilePage(){

    const { hasUser, currentUser } = useAuth();
    const router = useRouter();

    useEffect(()=>{
        console.log(hasUser(currentUser.uid));
        if(hasUser(currentUser.uid)){
            router.push("/profile/" + currentUser.uid);
        }
    },[]);

    return(
        <div>
            <Heading title=" - Profile" />
            <Header />
            <UserProfile />
            <Footer />
        </div>
    )
}
