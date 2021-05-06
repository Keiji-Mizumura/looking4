import LoginForm from "../components/layout/login-form";
import Container from "../components/containers/container";
import Heading from "../components/meta/heading";

export default function LoginPage(){
    return(
        <div>
            <Heading title="- Login"/>
            <Container>
                <LoginForm />
            </Container>
        </div>
    )
}