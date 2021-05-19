import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import FreelancerAccount from "../../components/layout/freelancer-account";
export default function AccountFreelancerPage(){
    return(
        <div>
            <Heading title=" - Freelancer Account" />
            <Header />

            <FreelancerAccount />

            <Footer />
        </div>
    )
}