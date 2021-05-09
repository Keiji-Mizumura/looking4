import Heading from "../../components/meta/heading";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import ClientAccount from "../../components/layout/client-account";
export default function AccountClientPage(){
    return(
        <div>
            <Heading title=" - Client Account" />
            <Header />

            <ClientAccount />

            <Footer />
        </div>
    )
}