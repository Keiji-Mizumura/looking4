import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import UserProfile from "../../components/layout/user-profile";

export default function ProfilePage(){
    return(
        <div>
            <Heading title=" - Profile" />
            <Header />
            <UserProfile />
            <Footer />
        </div>
    )
}
