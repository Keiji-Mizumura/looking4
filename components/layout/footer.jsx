import classes from "../../styles/layout/footer.module.css";
import Container from "../containers/container";
import Logo from "../ui/logo";

export default function Footer(){
    return(
        <footer className={classes.footer}>
            <Container>
                <div className={classes.main}>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <h2>Looking4</h2>
                        <ul>
                            <li>Lorem.</li>
                            <li>Accusamus.</li>
                            <li>Illo.</li>
                            <li>Explicabo.</li>
                            <li>A?</li>
                        </ul>
                    </div>
                    <div>
                        <h2>About</h2>
                        <ul>
                            <li>Lorem.</li>
                            <li>Accusamus.</li>
                            <li>Illo.</li>
                            <li>Explicabo.</li>
                            <li>A?</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Terms</h2>
                        <ul>
                            <li>Lorem.</li>
                            <li>Accusamus.</li>
                            <li>Illo.</li>
                            <li>Explicabo.</li>
                            <li>A?</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.sub}>
                    <p>
                        Copyright &copy; 2021 Looking4 Team
                    </p>
                </div>
            </Container>
        </footer>
    )
}