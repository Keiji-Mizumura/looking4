import Logo from "../../components/ui/logo";
import Navigation from "../../components/ui/navigation";
import Container from "../containers/container";

import classes from "../../styles/layout/header.module.css";

export default function Header(){
    return(
        <header className={classes.header}>
            <Container>
                <Logo />
                <Navigation />  
            </Container>         
        </header>
    )
}