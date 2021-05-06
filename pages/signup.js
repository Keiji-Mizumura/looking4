import SignupForm from "../components/layout/signup-form";
import Container from "../components/containers/container";

import Heading from "../components/meta/heading";

export default function SignupPage(){
    return(
        <div>
            <Heading title="- Signup" />
            <Container>
                <SignupForm />
            </Container>
        </div>       
    )
}